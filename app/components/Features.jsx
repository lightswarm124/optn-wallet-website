import Image from "next/image";
import secureTransactionsSvg from "../../public/images/secure-transactions.svg";
import userFriendlySvg from "../../public/images/user-friendly.svg";
import exploreUseCasesSvg from "../../public/images/explore-use-cases.svg";
import realWorldAssetSvg from "../../public/images/real-world-asset.svg";

function Card({ icon, title, description, points, href, hrefLabel }) {
  return (
    <div className="text-left bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-accent-primary/60 transition-colors h-full">
      <div className="flex items-center gap-3">
        <Image src={icon} alt={title} width={44} height={44} />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>

      <p className="mt-3 text-white/80">{description}</p>

      {points?.length ? (
        <ul className="mt-4 text-sm text-white/70 space-y-2">
          {points.map((p) => (
            <li key={p} className="flex gap-2">
              <span className="text-accent-primary">•</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
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
        The main things we offer today.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <Card
          icon={userFriendlySvg}
          title="OPTN Wallet"
          description="A BCH wallet for end users and a reference app for developers."
          points={[
            "Create and manage CashTokens",
            "Connect to web apps through WalletConnect",
            "Add-on marketplace inside the wallet",
          ]}
          href="/wallet"
          hrefLabel="Explore wallet"
        />

        <Card
          icon={realWorldAssetSvg}
          title="Hosted BCH Services"
          description="Hosted BCH infrastructure that includes token data access alongside core backend services."
          points={[
            "Electrum, Chaingraph, BCMR, IPFS, and TokenIndex",
            "Public endpoints and request-based access",
            "Built to support wallet and app teams",
          ]}
          href="/infrastructure"
          hrefLabel="Explore infrastructure"
        />

        <Card
          icon={secureTransactionsSvg}
          title="Hosted BCH Services"
          description="Hosted BCH infrastructure for teams that need backend access without running the full stack."
          points={[
            "Electrum, Chaingraph, BCMR, and IPFS",
            "Public endpoints and request-based access",
            "Built to support wallet and app teams",
          ]}
          href="/infrastructure"
          hrefLabel="Explore infrastructure"
        />

        <Card
          icon={exploreUseCasesSvg}
          title="Engineering Support"
          description="Direct engineering help for teams building products on BCH."
          points={[
            "Wallet and token integration work",
            "Contract and transaction flow design",
            "Backend architecture and launch support",
          ]}
          href="/engineering"
          hrefLabel="Explore engineering"
        />
      </div>
    </section>
  );
}
