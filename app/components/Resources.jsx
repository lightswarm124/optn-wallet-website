import Link from "next/link";

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
  return (
    <section id="resources" className="section text-center">
      <h2 className="text-3xl font-semibold text-center mb-3">
        Blog & Resources
      </h2>
      <p className="text-white/70 max-w-3xl mx-auto mb-10">
        We’re publishing build notes and updates as we expand hosted access and
        ship the wallet. Here are a few useful references in the meantime.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
        <Link
          href="/blog"
          className="hero-button bg-white rounded-3xl text-background-dark w-56 h-12 flex items-center justify-center hover:bg-white/90 transition-colors"
        >
          Browse the Blog
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
          description="A practical primer for covenant-like spending constraints using CashScript."
          href="https://cashscript.org/docs/guides/covenants"
          pill="CashScript"
        />
        <ResourceCard
          title="CashScript Examples"
          description="Example contracts to copy, run, and adapt for your own apps."
          href="https://github.com/CashScript/cashscript/tree/master/examples"
          pill="Examples"
        />
        <ResourceCard
          title="Bitcoin Covenants (Overview)"
          description="High-level overview of covenant concepts and design space."
          href="https://covenants.info/"
          pill="Reference"
        />
      </div>
    </section>
  );
}
