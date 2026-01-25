import Image from "next/image";
import secureTransactionsSvg from "../../public/images/secure-transactions.svg";
import userFriendlySvg from "../../public/images/user-friendly.svg";
import exploreUseCasesSvg from "../../public/images/explore-use-cases.svg";

function ProductCard({
  icon,
  title,
  description,
  bestFor,
  deliverable,
  href = "#docs",
  hrefLabel = "Learn more",
}) {
  return (
    <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-accent-primary/60 transition-colors">
      <div className="flex justify-center">
        <Image src={icon} alt={title} width={72} height={72} />
      </div>

      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>

      {bestFor ? (
        <div className="mt-2 text-xs text-white/60">{bestFor}</div>
      ) : null}

      <p className="mt-3 text-white/80">{description}</p>

      {deliverable ? (
        <p className="mt-3 text-sm text-white/70">
          <span className="text-white/80 font-semibold">Deliverable:</span>{" "}
          {deliverable}
        </p>
      ) : null}

      <div className="mt-5">
        <a href={href} className="text-accent-primary hover:underline">
          {hrefLabel} →
        </a>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="products" className="section text-center">
      <h2 className="text-3xl font-semibold text-center mb-3">Products</h2>
      <p className="text-white/70 max-w-3xl mx-auto mb-10">
        OPTN Labs provides production infrastructure and developer tooling for
        Bitcoin Cash: indexing, connectivity, token metadata, and covenant-ready
        primitives—hardened in the OPTN Wallet.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <ProductCard
          icon={secureTransactionsSvg}
          title="Chaingraph Indexing (GraphQL)"
          bestFor="Best for: explorers, backends, analytics"
          description="Query transactions, token activity, and app-visible history with a developer-friendly GraphQL interface."
          deliverable="A query layer you can integrate into your app backend for history + token views."
        />

        <ProductCard
          icon={userFriendlySvg}
          title="Electrum Connectivity"
          bestFor="Best for: wallets, payment monitoring"
          description="Reliable network access for wallets and backends: monitoring, broadcasting, and confirmation tracking."
          deliverable="A connectivity layer pattern for monitoring + broadcast flows."
        />

        <ProductCard
          icon={exploreUseCasesSvg}
          title="BCMR Token Metadata"
          bestFor="Best for: token UX, launch quality"
          description="Resolve and serve CashTokens metadata cleanly across apps with caching and retrieval patterns."
          deliverable="Metadata resolution patterns that keep token names/icons consistent across apps."
        />

        <ProductCard
          icon={secureTransactionsSvg}
          title="IPFS Gateway Patterns"
          bestFor="Best for: token media hosting"
          description="Serve token media + metadata faster with IPFS gateway integration and caching approaches."
          deliverable="Gateway + caching approach for dependable token media delivery."
        />

        <ProductCard
          icon={userFriendlySvg}
          title="Wallet Reference Implementation"
          bestFor="Best for: learning + shipping faster"
          description="OPTN Wallet as a living reference for covenant-focused UX, token flows, and advanced transaction building."
          deliverable="Open-source reference code you can study and adapt."
          hrefLabel="View repo"
          href="https://github.com/OPTNLabs/OPTNWallet"
        />

        <ProductCard
          icon={exploreUseCasesSvg}
          title="Dedicated Capacity (Teams)"
          bestFor="Best for: production workloads"
          description="Higher limits, dedicated capacity, and integration support for production apps and partners."
          deliverable="A tailored setup based on your workload and reliability needs."
          href="#contact"
          hrefLabel="Request access"
        />
      </div>

      <div className="mt-10 text-sm text-white/60">
        Want the fastest path to integration?{" "}
        <a href="#contact" className="text-accent-primary hover:underline">
          Tell us what you’re building
        </a>{" "}
        and we’ll point you to the right components.
      </div>
    </section>
  );
}
