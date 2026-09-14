#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const require = createRequire(import.meta.url);
const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(SCRIPT_DIR, "..");
const OUTPUT = path.join(ROOT, "content", "current-copy.en.md");
const APP_DIR = path.join(ROOT, "app");
const BLOG_DIR = path.join(ROOT, "content", "blog");
const SUPPORTED_EXTENSIONS = [".js", ".jsx", ".mjs", ".ts", ".tsx"];
const ROUTE_EXTENSIONS = [".js", ".jsx", ".ts", ".tsx"];
const ENTRY_BASENAMES = new Set([
  "page",
  "route",
  "layout",
  "loading",
  "error",
  "not-found",
  "global-error",
  "template",
  "default",
]);

function loadParser() {
  const candidates = [
    ["@babel/parser", "babel"],
    ["next/dist/compiled/babel/parser", "babel"],
    ["espree", "espree"],
  ];
  const failures = [];
  for (const [moduleName, kind] of candidates) {
    try {
      return { parser: require(moduleName), kind, moduleName };
    } catch (error) {
      failures.push(`${moduleName}: ${error.code ?? error.message}`);
    }
  }
  throw new Error(`No supported JavaScript/JSX parser found. ${failures.join("; ")}`);
}

const { parser, kind: parserKind } = loadParser();

const COPY_PROPERTIES = new Set([
  "access",
  "a",
  "alt",
  "aria-description",
  "aria-label",
  "answer",
  "body",
  "caption",
  "cta",
  "date",
  "description",
  "detail",
  "endpoint",
  "eyebrow",
  "feature",
  "features",
  "heading",
  "h1",
  "h2",
  "h3",
  "label",
  "name",
  "note",
  "price",
  "question",
  "q",
  "role",
  "secondaryLabel",
  "stage",
  "status",
  "summary",
  "text",
  "title",
]);

const NON_COPY_PROPERTIES = new Set([
  "className",
  "href",
  "id",
  "icon",
  "key",
  "method",
  "path",
  "rel",
  "src",
  "target",
  "type",
  "variant",
]);

const ICON_NAMES = new Set([
  "person",
  "stack",
  "route",
  "shield",
  "brain",
  "building",
  "cube",
  "wallet",
  "code",
  "gear",
  "check",
]);

const TEXT_ATTRIBUTES = new Set([
  "alt",
  "aria-label",
  "aria-description",
  "placeholder",
  "title",
  "value",
]);
const AST_CACHE = new Map();

function normalizeText(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function keyName(node) {
  if (!node) return "";
  if (node.type === "Identifier" || node.type === "JSXIdentifier") return node.name;
  if (isStringLiteral(node)) return node.value;
  return "";
}

function isStringLiteral(node) {
  return node?.type === "StringLiteral" ||
    (node?.type === "Literal" && typeof node.value === "string");
}

function isCopyProperty(property) {
  if (!property || NON_COPY_PROPERTIES.has(property)) return false;
  return COPY_PROPERTIES.has(property) ||
    /(?:title|description|label|body|copy|text|content|message|note|summary|cta|heading|subtitle|tagline|aria|alt|name|role|status|prompt|question|answer|caption|price|feature|stage|detail|endpoint)/i.test(property);
}

function isRouteOrUrl(value) {
  return value.startsWith("/") || value.startsWith("#") ||
    /^[a-z][a-z\d+.-]*:\/\//i.test(value) || value.startsWith("mailto:");
}

function stringAlternatives(node) {
  if (!node) return [];
  if (isStringLiteral(node)) return [node.value];
  if (node.type === "ConditionalExpression") {
    return [...stringAlternatives(node.consequent), ...stringAlternatives(node.alternate)];
  }
  if (node.type === "TemplateLiteral") {
    let values = [node.quasis[0]?.value.cooked ?? ""];
    for (let index = 0; index < node.expressions.length; index += 1) {
      const expressionValues = stringAlternatives(node.expressions[index]);
      const alternatives = expressionValues.length ? expressionValues : ["{value}"];
      const next = [];
      for (const prefix of values) {
        for (const value of alternatives) {
          next.push(`${prefix}${value}${node.quasis[index + 1]?.value.cooked ?? ""}`);
        }
      }
      values = next;
    }
    return values;
  }
  return [];
}

function sourceKey(loc, suffix = "") {
  const line = String(loc?.start?.line ?? 0).padStart(4, "0");
  const column = String((loc?.start?.column ?? 0) + 1).padStart(3, "0");
  return `L${line}_C${column}${suffix}`;
}

function parseSource(sourceText, sourcePath) {
  if (AST_CACHE.has(sourcePath)) return AST_CACHE.get(sourcePath);

  let ast;
  try {
    if (parserKind === "espree") {
      ast = parser.parse(sourceText, {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        loc: true,
      });
    } else {
      const plugins = ["jsx"];
      if (/\.(?:ts|tsx)$/.test(sourcePath)) {
        plugins.push(["typescript", { isTSX: sourcePath.endsWith(".tsx") }]);
      }
      ast = parser.parse(sourceText, {
        sourceType: "module",
        plugins,
        errorRecovery: false,
      });
    }
  } catch (error) {
    throw new Error(`Could not parse ${sourcePath} with ${parserKind}: ${error.message}`, { cause: error });
  }
  AST_CACHE.set(sourcePath, ast);
  return ast;
}

function visitAst(node, callback) {
  if (!node || typeof node !== "object") return;
  if (typeof node.type === "string") callback(node);
  for (const [key, value] of Object.entries(node)) {
    if (["loc", "start", "end", "extra", "leadingComments", "innerComments", "trailingComments", "tokens", "comments"].includes(key)) continue;
    if (Array.isArray(value)) {
      for (const child of value) visitAst(child, callback);
    } else if (value && typeof value === "object") {
      visitAst(value, callback);
    }
  }
}

function moduleSpecifiers(ast) {
  const values = [];
  visitAst(ast, (node) => {
    if ((node.type === "ImportDeclaration" ||
      node.type === "ExportNamedDeclaration" ||
      node.type === "ExportAllDeclaration") && node.source?.value) {
      values.push(node.source.value);
    } else if (node.type === "ImportExpression" && node.source?.value) {
      values.push(node.source.value);
    } else if (node.type === "CallExpression") {
      const isDynamicImport = node.callee?.type === "Import";
      const isRequire = node.callee?.type === "Identifier" && node.callee.name === "require";
      const specifier = node.arguments?.[0];
      if ((isDynamicImport || isRequire) && isStringLiteral(specifier)) {
        values.push(specifier.value);
      }
    }
  });
  return values;
}

function resolveLocalImport(specifier, importer) {
  const extension = path.extname(specifier.split(/[?#]/, 1)[0]);
  if (extension && !SUPPORTED_EXTENSIONS.includes(extension)) return null;

  let base;
  if (specifier.startsWith("@/")) {
    base = path.join(ROOT, specifier.slice(2));
  } else if (specifier.startsWith(".")) {
    base = path.resolve(ROOT, path.dirname(importer), specifier);
  } else {
    return null;
  }

  const candidates = [base];
  for (const extension of SUPPORTED_EXTENSIONS) candidates.push(`${base}${extension}`);
  for (const extension of SUPPORTED_EXTENSIONS) candidates.push(path.join(base, `index${extension}`));
  const resolved = candidates.find((candidate) =>
    SUPPORTED_EXTENSIONS.includes(path.extname(candidate)) &&
    fs.existsSync(candidate) &&
    fs.statSync(candidate).isFile(),
  );
  if (!resolved) {
    throw new Error(`Could not resolve local source import "${specifier}" from ${importer}. Update the resolver if the project's import conventions changed.`);
  }

  const relative = path.relative(ROOT, resolved);
  if (relative === ".." || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
    throw new Error(`Local source import "${specifier}" from ${importer} resolves outside the repository.`);
  }
  return relative.split(path.sep).join("/");
}

function isEntrySource(sourcePath) {
  const extension = path.extname(sourcePath);
  const basename = path.basename(sourcePath, extension);
  return ROUTE_EXTENSIONS.includes(extension) && ENTRY_BASENAMES.has(basename);
}

function discoverSourceGraph() {
  const entryFiles = [];
  function findEntries(directory, relativeDirectory = "app") {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const absolute = path.join(directory, entry.name);
      const relative = path.posix.join(relativeDirectory, entry.name);
      if (entry.isDirectory()) findEntries(absolute, relative);
      else if (entry.isFile() && isEntrySource(relative)) entryFiles.push(relative);
    }
  }
  findEntries(APP_DIR);

  const visited = new Set();
  const pending = [...entryFiles];
  while (pending.length) {
    const sourcePath = pending.pop();
    if (visited.has(sourcePath)) continue;
    visited.add(sourcePath);
    const absolute = path.join(ROOT, sourcePath);
    if (!fs.existsSync(absolute)) {
      throw new Error(`Discovered source file disappeared while extracting: ${sourcePath}`);
    }
    const source = fs.readFileSync(absolute, "utf8");
    const ast = parseSource(source, sourcePath);
    for (const specifier of moduleSpecifiers(ast)) {
      const dependency = resolveLocalImport(specifier, sourcePath);
      if (dependency && !visited.has(dependency)) pending.push(dependency);
    }
  }

  const pages = entryFiles.filter((sourcePath) => path.basename(sourcePath, path.extname(sourcePath)) === "page");
  const routes = new Map();
  for (const page of pages) {
    const route = routeForPage(page);
    const previous = routes.get(route);
    if (previous) {
      throw new Error(`Multiple page files map to ${route}: ${previous} and ${page}. Check route groups or parallel routes.`);
    }
    routes.set(route, page);
  }
  return {
    pages: pages.sort((a, b) => routeForPage(a).localeCompare(routeForPage(b))),
    sources: [...visited].sort(),
  };
}

function extractJavaScriptCopy(sourceText, sourcePath) {
  const ast = parseSource(sourceText, sourcePath);
  const entries = new Map();
  const composedChildren = new WeakSet();

  function add(node, rawText, kind, suffix = "") {
    const text = normalizeText(rawText);
    if (!text) return;
    const baseKey = sourceKey(node.loc, suffix);
    let key = baseKey;
    let duplicate = 2;
    while (entries.has(key)) {
      key = `${baseKey}_${duplicate}`;
      duplicate += 1;
    }
    entries.set(key, { text, kind });
  }

  function addAlternatives(node, expression, kind) {
    const alternatives = [...new Set(stringAlternatives(expression).map(normalizeText).filter(Boolean))];
    alternatives.forEach((value, index) => {
      add(node, value, kind, alternatives.length > 1 ? `_variant_${index + 1}` : "");
    });
  }

  function collectComposedChildren(element) {
    const children = element.children ?? [];
    let buffer = "";
    let hasDynamic = false;
    const nodes = [];

    const flush = () => {
      if (hasDynamic && normalizeText(buffer)) {
        add(element, buffer, "jsx-composed");
        nodes.forEach((child) => composedChildren.add(child));
      }
      buffer = "";
      hasDynamic = false;
      nodes.length = 0;
    };

    for (const child of children) {
      if (child.type === "JSXText") {
        buffer += child.value;
        nodes.push(child);
        continue;
      }
      if (child.type === "JSXExpressionContainer") {
        const alternatives = stringAlternatives(child.expression);
        if (alternatives.length) {
          buffer += alternatives[0];
          nodes.push(child);
        } else {
          buffer += "{value}";
          hasDynamic = true;
          nodes.push(child);
        }
        continue;
      }
      flush();
    }
    flush();
  }

  function visit(node, parent = null) {
    if (!node || typeof node !== "object") return;

    if (node.type === "JSXElement") collectComposedChildren(node);

    if (node.type === "JSXText" && !composedChildren.has(node)) {
      add(node, node.value, "jsx-text");
    }

    if (node.type === "JSXAttribute") {
      const attributeName = keyName(node.name);
      if (TEXT_ATTRIBUTES.has(attributeName)) {
        const value = node.value;
        if (isStringLiteral(value)) add(node, value.value, `jsx-attribute:${attributeName}`);
        else if (value?.type === "JSXExpressionContainer") {
          addAlternatives(node, value.expression, `jsx-attribute:${attributeName}`);
        }
      }
    }

    if (isStringLiteral(node) && parent) {
      if (parent.type === "JSXAttribute") {
        // Text-bearing JSX attributes are handled above; routes/classes are not copy.
      } else if (parent.type === "ArrayExpression") {
        if (!ICON_NAMES.has(node.value) && !isRouteOrUrl(node.value)) {
          add(node, node.value, "array-copy-candidate");
        }
      } else if (parent.type === "ObjectProperty" || parent.type === "Property") {
        const property = keyName(parent.key);
        if (isCopyProperty(property)) {
          add(node, node.value, `property:${property}`);
        }
      } else if (parent.type === "VariableDeclarator" &&
        !ICON_NAMES.has(node.value) && !isRouteOrUrl(node.value)) {
        add(node, node.value, "variable-copy-candidate");
      }
    }

    if (node.type === "JSXExpressionContainer" &&
      (parent?.type === "JSXElement" || parent?.type === "JSXFragment")) {
      addAlternatives(node, node.expression, "jsx-expression");
    }

    for (const [key, value] of Object.entries(node)) {
      if (["loc", "start", "end", "extra", "leadingComments", "innerComments", "trailingComments", "tokens", "comments"].includes(key)) continue;
      if (Array.isArray(value)) {
        for (const child of value) visit(child, node);
      } else if (value && typeof value === "object") {
        visit(value, node);
      }
    }
  }

  visit(ast);
  return Object.fromEntries(entries);
}

function routeForPage(sourcePath) {
  const route = path.posix.dirname(sourcePath).replace(/^app\/?/, "");
  const segments = route.split("/").filter((segment) =>
    segment && !segment.startsWith("@") && !/^\([^)]*\)$/.test(segment),
  );
  if (segments.some((segment) => /^(?:\(\.\)|\(\.\.\)|\(\.\.\.\))/.test(segment))) {
    throw new Error(`Intercepting route conventions are not supported by the copy extractor: ${sourcePath}`);
  }
  return segments.length ? `/${segments.join("/")}` : "/";
}

function isPublished(dateValue) {
  if (!dateValue) return true;
  const published = Date.parse(`${dateValue}T00:00:00Z`);
  if (!Number.isFinite(published)) return true;
  const now = new Date();
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  return published <= today;
}

function stripRenderedTitleAndImports(markdown) {
  const source = String(markdown)
    .trimStart()
    .replace(/^(?:import\b[\s\S]*?;\s*\r?\n\s*)+/, "")
    .replace(/^#\s+[^\n]+\n+/, "")
    .trim();

  let codeFence = null;
  return source.split("\n").map((line) => {
    const fence = /^\s*(`{3,}|~{3,})/.exec(line)?.[1];
    if (fence) {
      if (!codeFence) codeFence = { character: fence[0], length: fence.length };
      else if (fence[0] === codeFence.character && fence.length >= codeFence.length) codeFence = null;
      return line;
    }
    if (!codeFence && / {2,}$/.test(line)) {
      // CommonMark accepts a backslash as a hard line break, avoiding trailing
      // whitespace in the generated file without changing rendered copy.
      return line.replace(/ {2,}$/, "\\");
    }
    return line;
  }).join("\n");
}

function renderJsonBlock(value, fence = "```") {
  return `${fence}json\n${JSON.stringify(value, null, 2)}\n${fence}`;
}

function markdownFence(body) {
  const matches = [...body.matchAll(/`{3,}/g)].map((match) => match[0].length);
  const length = Math.max(3, ...matches) + 1;
  return "`".repeat(length);
}

function buildCatalog() {
  const sections = [
    "# OPTN Labs — extracted English website copy",
    "",
    "Generated by `npm run copy:extract`. Do not hand-edit this file; change the source copy and regenerate it. Keys are source-location identifiers for review/localization planning, not production translation keys. JSX spacing is normalized. Blog bodies are preserved as Markdown/MDX; Markdown hard line breaks are represented with backslashes.",
    "",
    "This catalog is extracted from the current working tree. It includes App Router pages and handlers, their imported local modules, and dated blog posts published as of the generation date. The separate [`content-map.md`](../content-map.md) explains page order, visitor journey, and content responsibilities.",
    "",
    "## Routed page strings",
    "",
  ];

  const { pages: pageFiles, sources } = discoverSourceGraph();
  for (const sourcePath of pageFiles) {
    const absolute = path.join(ROOT, sourcePath);
    const source = fs.readFileSync(absolute, "utf8");
    const strings = extractJavaScriptCopy(source, sourcePath);
    const route = routeForPage(sourcePath);
    sections.push(`### ${route} — \`${sourcePath}\``, "", renderJsonBlock(strings), "");
  }

  sections.push("## Shared shell, metadata, API handlers, and imported copy-bearing modules", "");
  for (const sourcePath of sources.filter((sourcePath) => !pageFiles.includes(sourcePath))) {
    const absolute = path.join(ROOT, sourcePath);
    const source = fs.readFileSync(absolute, "utf8");
    const strings = extractJavaScriptCopy(source, sourcePath);
    sections.push(`### \`${sourcePath}\``, "", renderJsonBlock(strings), "");
  }

  sections.push("## Published article metadata and full body text", "");
  const articleFiles = fs.readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .sort((a, b) => a.localeCompare(b));

  for (const filename of articleFiles) {
    const sourcePath = path.posix.join("content/blog", filename);
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
    const { content, data } = matter(raw);
    if (!isPublished(data.date)) continue;
    const metadata = {
      title: data.title ?? filename.replace(/\.mdx$/, ""),
      description: data.description ?? "",
      date: data.date ?? null,
      author: data.author ?? null,
      tags: data.tags ?? [],
    };
    const body = stripRenderedTitleAndImports(content);
    const fence = markdownFence(body);
    sections.push(
      `### ${metadata.title} — \`${sourcePath}\``,
      "",
      "Metadata:",
      "",
      renderJsonBlock(metadata),
      "",
      "Article body (Markdown/MDX):",
      "",
      `${fence}mdx\n${body}\n${fence}`,
      "",
    );
  }

  if (!pageFiles.some((sourcePath) => routeForPage(sourcePath) === "/")) {
    throw new Error("No root page was discovered under app/. Check the Next.js route layout.");
  }

  return {
    text: `${sections.join("\n").trimEnd()}\n`,
    routeCount: pageFiles.length,
    sourceCount: sources.length,
  };
}

const { text: expected, routeCount, sourceCount } = buildCatalog();
const checkOnly = process.argv.includes("--check");

if (checkOnly) {
  if (!fs.existsSync(OUTPUT) || fs.readFileSync(OUTPUT, "utf8") !== expected) {
    console.error("English copy catalog is stale. Run `npm run copy:extract`.");
    process.exitCode = 1;
  } else {
    console.log("English copy catalog is up to date.");
  }
} else {
  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, expected, "utf8");
  console.log(`Wrote ${path.relative(ROOT, OUTPUT)} from ${routeCount} page templates, ${sourceCount} imported source files, and published blog sources.`);
}
