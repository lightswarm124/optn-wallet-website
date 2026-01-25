import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

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
    };
  });

  // newest first (if date exists)
  posts.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  return posts;
}

export function getPostBySlug(slug) {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(raw);

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
