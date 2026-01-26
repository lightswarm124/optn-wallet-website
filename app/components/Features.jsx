import Image from "next/image";
import secureTransactionsSvg from "../../public/images/secure-transactions.svg";
import userFriendlySvg from "../../public/images/user-friendly.svg";
import exploreUseCasesSvg from "../../public/images/explore-use-cases.svg";

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
      <h2 className="text-3xl font-semibold text-center mb-3">
        Products & Services
      </h2>
      <p className="text-white/70 max-w-3xl mx-auto mb-10">
        OPTN Labs ships the world's first Covenant-enabled wallet, operates
        hosted Bitcoin Cash infrastructure endpoints, and offers hands-on
        engineering support—so teams can integrate quickly without running the
        plumbing themselves.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card
          icon={userFriendlySvg}
          title="OPTN Wallet"
          description="A covenant-focused Bitcoin Cash wallet and reference implementation for complex transactions and CashTokens flows."
          points={[
            "Advanced transaction-building UX",
            "CashTokens support + metadata handling patterns",
            "New paradigm for wallet security through covenants",
          ]}
          href="https://play.google.com/store/apps/details?id=optn.wallet.app"
          hrefLabel="Get it on Google Play"
        />

        <Card
          icon={secureTransactionsSvg}
          title="Hosted Infrastructure Endpoints"
          description="We run and maintain production endpoints for common BCH services (e.g., indexing, connectivity, metadata) and help teams integrate them safely."
          points={[
            "Chaingraph (GraphQL) access for history & analytics",
            "Electrum connectivity for monitoring + broadcast",
            "BCMR resolution + practical delivery patterns",
          ]}
          href="#contact"
          hrefLabel="Request access"
        />

        <Card
          icon={exploreUseCasesSvg}
          title="Engineering & Advisory"
          description="Integration and build support for teams launching on BCH—plus advisory-only options when you already have strong BCH experience."
          points={[
            "Integration planning + go-live support",
            "Reliability patterns for wallets and backends",
            "Covenant / complex transaction flow guidance",
          ]}
          href="#contact"
          hrefLabel="Talk to us"
        />
      </div>
    </section>
  );
}
