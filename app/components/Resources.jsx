import Link from "next/link";
import { getAllPostsMeta } from "../../lib/blog";

function ResourceCard({ title, description, href, external = true, pill }) {
  const inner = (
    <div className="p-5 bg-white/5 text-gray-100 rounded-xl shadow-md border border-white/10 hover:border-accent-primary/50 transition-colors text-left h-full">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {pill ? (
          <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
            {pill}
          </span>
        ) : null}
      </div>
      {description ? (
        <p className="mt-2 text-sm text-white/70">{description}</p>
      ) : null}
      <div className="mt-4 text-accent-primary">
        <span className="hover:underline">Open {external ? "↗" : "→"}</span>
      </div>
    </div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return <Link href={href}>{inner}</Link>;
}

export default function Resources() {
  const latestPost = getAllPostsMeta()[0] ?? null;

  return (
    <section id="resources" className="section text-center">
      <h2 className="text-3xl font-semibold text-center mb-3">
        Writing & code
      </h2>
      <p className="text-white/70 max-w-3xl mx-auto mb-10 text-sm leading-6 md:text-base">
        Recent writing, source code, and a few references tied to our work.
      </p>

      {latestPost ? (
        <div className="mx-auto mb-8 max-w-4xl rounded-3xl border border-accent-primary/30 bg-white/[0.05] p-6 text-left">
          <h3 className="mt-3 text-2xl font-semibold text-white">
            {latestPost.title}
          </h3>
          <p className="mt-3 text-sm text-white/70">
            {latestPost.date} {latestPost.description ? `• ${latestPost.description}` : ""}
          </p>
          <div className="mt-5">
            <Link
              href={`/blog/${latestPost.slug}`}
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-background-dark hover:bg-white/90 transition-colors"
            >
              Read the latest post
            </Link>
          </div>
        </div>
      ) : null}

      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
        <Link
          href="/blog"
          className="hero-button bg-white rounded-3xl text-background-dark w-56 h-12 flex items-center justify-center hover:bg-white/90 transition-colors"
        >
          Read the blog
        </Link>

        <a
          href="https://github.com/OPTNLabs/OPTNWallet"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-button bg-white/10 rounded-3xl text-white w-56 h-12 flex items-center justify-center hover:bg-white/15 transition-colors"
        >
          OPTN Wallet Repo ↗
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <ResourceCard
          title="CashScript Covenants Guide"
          description="Reference material for covenant design on BCH."
          href="https://cashscript.org/docs/guides/covenants"
          pill="CashScript"
        />
        <ResourceCard
          title="CashScript Examples"
          description="Contract examples and patterns."
          href="https://github.com/CashScript/cashscript/tree/master/examples"
          pill="Examples"
        />
        <ResourceCard
          title="OPTN Wallet Repository"
          description="The public repository for OPTN Wallet."
          href="https://github.com/OPTNLabs/OPTNWallet"
          pill="Open source"
        />
      </div>
    </section>
  );
}
