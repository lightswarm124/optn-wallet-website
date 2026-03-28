// app/sitemap.js
import { getAllPostsMeta } from "../lib/blog";

export default function sitemap() {
  const base = "https://www.optnlabs.com";

  const staticRoutes = [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/wallet`, lastModified: new Date() },
    { url: `${base}/tokenindex`, lastModified: new Date() },
    { url: `${base}/infrastructure`, lastModified: new Date() },
    { url: `${base}/engineering`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
    { url: `${base}/policy`, lastModified: new Date() },
  ];

  // Blog posts (if your blog util works at build time)
  let posts = [];
  try {
    posts = getAllPostsMeta().map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: p.date ? new Date(p.date) : new Date(),
    }));
  } catch {
    posts = [];
  }

  return [...staticRoutes, ...posts];
}
