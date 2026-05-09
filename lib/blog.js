import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function parseDateMs(dateStr) {
  if (!dateStr) return 0;
  const ms = Date.parse(dateStr);
  return Number.isFinite(ms) ? ms : 0;
}

function getTodayUtcMs() {
  const now = new Date();
  return Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
  );
}

function isPublished(dateStr) {
  const publishedMs = parseDateMs(dateStr);
  if (!publishedMs) return true;
  return publishedMs <= getTodayUtcMs();
}

export function getAllPostsMeta() {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const fullPath = path.join(BLOG_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? null,
      description: data.description ?? "",
      tags: data.tags ?? [],
      published: isPublished(data.date ?? null),
    };
  });

  return posts
    .filter((p) => p.published)
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}

export function getPostBySlug(slug) {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(raw);

  if (!isPublished(data.date ?? null)) {
    throw new Error("Post is not published yet");
  }

  return {
    slug,
    frontmatter: {
      title: data.title ?? slug,
      date: data.date ?? null,
      description: data.description ?? "",
      tags: data.tags ?? [],
    },
    content,
  };
}
