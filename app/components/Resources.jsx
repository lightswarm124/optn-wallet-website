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

function Bullet({ title, desc }) {
  return (
    <div className="text-left">
      <div className="font-semibold text-white">{title}</div>
      <div className="text-sm text-white/70 mt-1">{desc}</div>
    </div>
  );
}

export default function Resources() {
  return (
    <section
      id="docs"
      className="section text-center gradient-section-dark-to-light"
    >
      <h2 className="text-3xl font-semibold text-center mb-3">
        Docs & Quickstart
      </h2>
      <p className="text-white/70 max-w-2xl mx-auto mb-10">
        Start here if you’re building on Bitcoin Cash. These links cover the
        most useful starting points while OPTN Labs docs are being expanded.
      </p>

      {/* Quickstart */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h3 className="text-xl font-semibold text-white">
              Start building in ~5 minutes
            </h3>
            <a
              href="#contact"
              className="text-sm text-accent-primary hover:underline"
            >
              Need higher limits or dedicated capacity? Contact us →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
            <Bullet
              title="1) Pick your integration path"
              desc="Most teams start with indexing + monitoring, then add metadata and advanced transaction flows."
            />
            <Bullet
              title="2) Use OPTN Wallet as the proof-point"
              desc="See how token UX and advanced transaction flows look in a real product."
            />
            <Bullet
              title="3) Build from known-good examples"
              desc="CashScript examples are the fastest way to prototype escrow, restrictions, and multi-party flows."
            />
            <Bullet
              title="4) Follow build notes"
              desc="Our blog bridges ETH/SOL mental models to BCH patterns and primitives."
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link
              href="/blog"
              className="hero-button bg-white rounded-3xl text-background-dark w-56 h-12 flex items-center justify-center"
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
        </div>
      </div>

      {/* OPTN-first docs (mirrors Products) */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-4 flex-wrap mb-4">
          <h3 className="text-xl font-semibold text-white text-left">
            OPTN Labs components
          </h3>
          <div className="text-sm text-white/60 text-left">
            We’re turning these into dedicated docs pages. For now, start here
            and reach out for access or integration help.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ResourceCard
            title="Chaingraph Indexing (GraphQL)"
            description="Best for explorers, backends, and app-visible history."
            href="#contact"
            external={false}
            pill="OPTN"
          />
          <ResourceCard
            title="Electrum Connectivity"
            description="Best for wallets and payment monitoring flows."
            href="#contact"
            external={false}
            pill="OPTN"
          />
          <ResourceCard
            title="BCMR Token Metadata"
            description="Best for token UX and clean metadata resolution."
            href="#contact"
            external={false}
            pill="OPTN"
          />
          <ResourceCard
            title="IPFS Gateway Patterns"
            description="Best for dependable media delivery (token icons/art)."
            href="#contact"
            external={false}
            pill="OPTN"
          />
          <ResourceCard
            title="Wallet Reference Implementation"
            description="Open-source reference for token flows + advanced transactions."
            href="https://github.com/OPTNLabs/OPTNWallet"
            pill="GitHub"
          />
          <ResourceCard
            title="Dedicated Capacity / Higher Limits"
            description="Tell us what you’re building and we’ll point you to the right setup."
            href="#contact"
            external={false}
            pill="Teams"
          />
        </div>
      </div>

      {/* Background reading */}
      <div className="max-w-6xl mx-auto mt-12">
        <h3 className="text-xl font-semibold text-white text-left mb-4">
          Background reading
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

          <ResourceCard
            title="Ledger Academy: Bitcoin Covenants"
            description="Glossary-style explanation of covenants and why they matter."
            href="https://www.ledger.com/academy/glossary/bitcoin-covenants"
            pill="Glossary"
          />
          <ResourceCard
            title="OPTN Labs Blog"
            description="Developer education: CashTokens, covenants, and bridging EVM mental models."
            href="/blog"
            external={false}
            pill="OPTN"
          />
          <ResourceCard
            title="OPTN Wallet (Google Play)"
            description="Download the wallet to see covenant-focused UX and token handling in practice."
            href="https://play.google.com/store/apps/details?id=optn.wallet.app"
            pill="App"
          />
        </div>
      </div>
    </section>
  );
}
