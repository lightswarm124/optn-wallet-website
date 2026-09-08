import Link from "next/link";
import { getAllPostsMeta } from "../../lib/blog";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "OPTN Labs Blog | Builder Notes",
  description:
    "Builder notes, product updates, and technical field notes from OPTN Labs.",
  path: "/blog",
});

function formatDate(dateStr) {
  if (!dateStr) return null;
  // If you already store "YYYY-MM-DD", this stays stable and clean.
  // You can swap to Intl.DateTimeFormat later if you want.
  return dateStr;
}

export default function BlogIndex() {
  const posts = getAllPostsMeta();

  return (
    <div className="supporting-page blog-page min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Header */}
        <header className="mb-10">
          <p className="text-sm font-medium text-cyan-300/90">OPTN Labs Blog</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">
            Builder notes, product updates, and technical field notes
          </h1>
          <p className="mt-3 max-w-2xl text-base text-slate-300">
            CashTokens, covenants, wallet architecture, and the infrastructure
            we’re shipping to make BCH easier to build on.
          </p>
        </header>

        {/* Posts */}
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <article
              key={p.slug}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm transition hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between gap-4">
                {p.date ? (
                  <div className="text-sm text-slate-400">
                    {formatDate(p.date)}
                  </div>
                ) : (
                  <div />
                )}

                {p.tags?.length ? (
                  <div className="flex flex-wrap gap-2 justify-end">
                    {p.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>

              <h2 className="mt-4 text-xl font-semibold text-white">
                <Link
                  href={`/blog/${p.slug}`}
                  className="blog-card-title outline-none focus-visible:underline"
                >
                  {p.title}
                </Link>
              </h2>

              {p.description ? (
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {p.description}
                </p>
              ) : null}

              <div className="mt-5">
                <Link
                  href={`/blog/${p.slug}`}
                  className="text-sm font-medium text-cyan-300 hover:text-cyan-200"
                >
                  Read post →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
