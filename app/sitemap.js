// app/sitemap.js
import { getAllPostsMeta } from "../lib/blog";

export default function sitemap() {
  const base = "https://www.optnlabs.com";

  const staticRoutes = [
    { url: `${base}/` },
    { url: `${base}/platform` },
    { url: `${base}/solutions` },
    { url: `${base}/pricing` },
    { url: `${base}/wallet` },
    { url: `${base}/infrastructure` },
    { url: `${base}/engineering` },
    { url: `${base}/about` },
    { url: `${base}/developers` },
    { url: `${base}/blog` },
    { url: `${base}/cashtokens` },
    { url: `${base}/covenants-on-bitcoin-cash` },
    { url: `${base}/bcmr-token-metadata` },
    { url: `${base}/faq` },
    { url: `${base}/policy` },
  ];

  // Blog posts (if your blog util works at build time)
  let posts = [];
  try {
    posts = getAllPostsMeta().map((p) => ({
      url: `${base}/blog/${p.slug}`,
      ...(p.date ? { lastModified: new Date(p.date) } : {}),
    }));
  } catch {
    posts = [];
  }

  return [...staticRoutes, ...posts];
}
