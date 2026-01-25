import Image from "next/image";
import nonCustodialSvg from "../../public/images/non-custodial.svg";
import multiPartySvg from "../../public/images/multi-party.svg";
import realWorldAssetSvg from "../../public/images/real-world-asset.svg";

function UseCaseCard({ icon, title, description, points }) {
  return (
    <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-accent-primary/60 transition-colors">
      <div className="flex justify-center">
        <Image src={icon} alt={title} width={80} height={80} />
      </div>

      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-white/80">{description}</p>

      {points?.length ? (
        <ul className="mt-4 text-left text-sm text-white/70 space-y-2 max-w-xs mx-auto">
          {points.map((p) => (
            <li key={p} className="flex gap-2">
              <span className="text-accent-primary">•</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function UseCases() {
  return (
    <section id="use-cases" className="section text-center">
      <h2 className="text-3xl font-semibold text-center mb-3">
        Build with OPTN Labs
      </h2>
      <p className="text-white/70 max-w-2xl mx-auto mb-10">
        OPTN Labs provides infrastructure and developer primitives that help
        teams ship reliable Bitcoin Cash applications—especially when
        transactions get complex.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <UseCaseCard
          icon={nonCustodialSvg}
          title="Payments & App Backends"
          description="Run wallets and apps that depend on reliable transaction monitoring, metadata, and history—without building the plumbing from scratch."
          points={[
            "Index and query on-chain activity",
            "Serve token metadata and media",
            "Monitor payments and confirmations",
          ]}
        />

        <UseCaseCard
          icon={multiPartySvg}
          title="Covenant-Powered Workflows"
          description="Enable transaction flows with enforced rules—useful for escrow, programmable payouts, and safer authorization patterns."
          points={[
            "Escrow and conditional releases",
            "Restricted spends and recipient controls",
            "Multi-party or staged transactions",
          ]}
        />

        <UseCaseCard
          icon={realWorldAssetSvg}
          title="Token Launch & Control"
          description="Launch CashTokens with metadata that resolves cleanly across apps, and build policies around issuance and movement."
          points={[
            "BCMR + metadata distribution",
            "Media hosting via IPFS gateway patterns",
            "Issuance and lifecycle monitoring",
          ]}
        />
      </div>

      <div className="mt-10">
        <a href="#docs" className="text-accent-primary hover:underline">
          Start from the Quickstart docs →
        </a>
      </div>
    </section>
  );
}
