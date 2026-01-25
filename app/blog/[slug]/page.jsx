import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import Callout from "../_components/Callout";
import FeatureCard from "../_components/FeatureCard";
import { getAllPostsMeta, getPostBySlug } from "../../../lib/blog";
import ReadingProgress from "../_components/ReadingProgress";

export function generateStaticParams() {
  return getAllPostsMeta().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: `${post.frontmatter.title} | OPTN Wallet`,
      description: post.frontmatter.description,
    };
  } catch {
    return { title: "Post not found | OPTN Wallet" };
  }
}

function slugify(text) {
  return String(text || "")
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function extractHeadings(mdxSource) {
  const lines = String(mdxSource || "").split("\n");
  const headings = [];
  let inCode = false;

  for (const line of lines) {
    const t = line.trim();

    if (t.startsWith("```")) {
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;

    const m = /^(#{2,3})\s+(.+)$/.exec(t);
    if (!m) continue;

    const level = m[1].length; // 2 or 3
    const title = m[2].replace(/\s+#+\s*$/, "").trim();
    const id = slugify(title);

    headings.push({ level, title, id });
  }

  return headings;
}

function HeadingWithId(Tag) {
  return function H(props) {
    const childrenText =
      typeof props.children === "string"
        ? props.children
        : Array.isArray(props.children)
          ? props.children.filter((c) => typeof c === "string").join(" ")
          : "";
    const id = props.id || slugify(childrenText);
    return <Tag {...props} id={id} />;
  };
}

function parseDateMs(dateStr) {
  // Expecting "YYYY-MM-DD" (your current convention)
  if (!dateStr) return 0;
  const ms = Date.parse(dateStr);
  return Number.isFinite(ms) ? ms : 0;
}

export default async function BlogPost({ params }) {
  const { slug } = params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const toc = extractHeadings(post.content);

  // Use the SAME source as the blog index, and keep ordering stable.
  // If getAllPostsMeta() already sorts, this will preserve it.
  // If not, we sort newest -> oldest to match typical blog listing behavior.
  const allPostsRaw = getAllPostsMeta();
  const allPosts = [...allPostsRaw].sort(
    (a, b) => parseDateMs(a.date) - parseDateMs(b.date),
  );

  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const nextPost =
    currentIndex >= 0 && currentIndex + 1 < allPosts.length
      ? allPosts[currentIndex + 1]
      : null;

  const { content } = await compileMDX({
    source: post.content,
    options: { parseFrontmatter: false },
    components: {
      h2: HeadingWithId("h2"),
      h3: HeadingWithId("h3"),
      Callout,
      FeatureCard,
      a: (props) => (
        <a
          {...props}
          className="text-cyan-300 underline decoration-white/20 underline-offset-4 hover:text-cyan-200"
        />
      ),
    },
  });

  return (
    <main
      id="top"
      className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black"
    >
      <ReadingProgress toc={toc} />

      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Header (match blog index rhythm) */}
        <header className="mb-10">
          {/* Kicker line */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300/90 hover:text-cyan-200"
          >
            <span>OPTN Labs Blog</span>
          </Link>

          {/* Title */}
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">
            {post.frontmatter.title}
          </h1>

          {/* Meta row */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-400">
            {post.frontmatter.date ? (
              <span>{post.frontmatter.date}</span>
            ) : null}

            {post.frontmatter.tags?.length ? (
              <>
                <span>•</span>
                <div className="flex flex-wrap gap-2">
                  {post.frontmatter.tags.slice(0, 6).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </>
            ) : null}
          </div>

          {/* Description */}
          {post.frontmatter.description ? (
            <p className="mt-3 max-w-3xl text-base text-slate-300">
              {post.frontmatter.description}
            </p>
          ) : null}
        </header>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px]">
          <article
            className={[
              "prose prose-invert max-w-none",
              "prose-headings:scroll-mt-24 prose-headings:tracking-tight",
              "prose-p:text-slate-200/90",
              "prose-strong:text-white",
              "prose-hr:border-white/10",
              "prose-blockquote:border-white/10 prose-blockquote:bg-white/[0.04] prose-blockquote:rounded-xl prose-blockquote:px-5 prose-blockquote:py-4",
              "prose-pre:border prose-pre:border-white/10 prose-pre:bg-black/40",
              "prose-pre:rounded-xl prose-pre:shadow-sm prose-pre:px-4 prose-pre:py-4",
              "prose-pre:overflow-x-auto",
              "prose-code:text-slate-100",
              "prose-code:rounded prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5",
              "prose-li:marker:text-slate-500",
            ].join(" ")}
          >
            <div className="mx-auto max-w-[72ch]">{content}</div>

            {/* Bottom CTA: Next post in list */}
            <div className="mx-auto mt-14 max-w-[72ch]">
              {nextPost ? (
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="text-xs font-semibold tracking-wide text-slate-200">
                    Next up
                  </div>

                  <h3 className="mt-2 text-xl font-semibold text-white">
                    <Link
                      href={`/blog/${nextPost.slug}`}
                      className="hover:text-cyan-200"
                    >
                      {nextPost.title}
                    </Link>
                  </h3>

                  {nextPost.description ? (
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {nextPost.description}
                    </p>
                  ) : null}

                  <div className="mt-4">
                    <Link
                      href={`/blog/${nextPost.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200"
                    >
                      Continue reading <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="text-xs font-semibold tracking-wide text-slate-200">
                    That’s the latest post
                  </div>
                  <p className="mt-2 text-sm text-slate-300">
                    Head back to the blog index to pick another article.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200"
                    >
                      Browse all posts <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs font-semibold tracking-wide text-slate-200">
                  On this page
                </div>
                <a
                  href="#top"
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Top ↑
                </a>
              </div>

              {toc.length ? (
                <nav className="mt-4 max-h-[60vh] overflow-auto space-y-1 text-sm">
                  {toc.map((h) => (
                    <a
                      key={`${h.id}-${h.level}`}
                      href={`#${h.id}`}
                      data-toc-link
                      data-level={String(h.level)}
                      className={[
                        "block rounded-md px-2 py-1 transition",
                        "hover:bg-white/5 hover:text-white",
                        h.level === 2
                          ? "text-slate-300"
                          : "pl-5 text-slate-400",
                      ].join(" ")}
                    >
                      {h.title}
                    </a>
                  ))}
                </nav>
              ) : (
                <div className="mt-3 text-sm text-slate-400">
                  Add <code>##</code> headings to generate a TOC.
                </div>
              )}
            </div>
          </aside>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex items-center justify-between text-sm text-slate-400">
          <Link href="/blog" className="hover:text-white">
            ← Back to Blog
          </Link>
          <a href="#top" className="hover:text-white">
            Back to top ↑
          </a>
        </div>
      </div>
    </main>
  );
}
