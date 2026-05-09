import Image from "next/image";
import Link from "next/link";
import heroImage from "../../public/images/OPTNWelcome1.png";

export default function Hero() {
  return (
    <section id="hero" className="section text-center">
      <div className="relative w-full max-w-2xl h-28 md:h-32 mx-auto">
        <Image
          src={heroImage}
          alt="OPTN"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <p className="mt-6 text-sm font-medium uppercase tracking-[0.22em] text-accent-primary/90">
        Products and infrastructure for Bitcoin Cash
      </p>

      <h1 className="text-4xl md:text-5xl font-semibold mt-6">
        Wallet software, token data, and hosted services for Bitcoin Cash
      </h1>

      <p className="hero-description text-lg mb-7 max-w-2xl mx-auto mt-4 text-white/80">
        OPTN Labs builds products and infrastructure for the BCH ecosystem,
        from end-user wallet software to developer tooling and hosted backend
        services.
      </p>

      <div className="mx-auto mb-8 grid max-w-4xl gap-3 text-left md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm font-medium text-accent-primary">Wallet</div>
          <div className="mt-2 text-sm text-white/75">
            A BCH wallet with token creation, app connections, and an add-on marketplace.
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm font-medium text-accent-primary">Token data</div>
          <div className="mt-2 text-sm text-white/75">
            Token data access for address portfolios, holder data, and token metadata.
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm font-medium text-accent-primary">Hosted access</div>
          <div className="mt-2 text-sm text-white/75">
            Electrum, Chaingraph, BCMR, IPFS, and related BCH backend services.
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <a
          href="#products"
          className="inline-flex h-12 w-56 items-center justify-center rounded-full bg-white text-background-dark font-medium hover:bg-white/90 transition-colors"
        >
          View products
        </a>

        <a
          href="/infrastructure"
          className="inline-flex h-12 w-56 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white font-medium hover:bg-white/15 transition-colors"
        >
          Hosted services
        </a>

        <Link
          href="/blog"
          className="inline-flex h-12 w-56 items-center justify-center rounded-full border border-white/10 bg-transparent text-white font-medium hover:border-accent-primary/50 hover:bg-white/5 transition-colors"
        >
          Read blog
        </Link>
      </div>

      <p className="mt-5 text-sm text-white/60">
        We also help teams build wallet products, token systems, contracts, and backend services on BCH.
      </p>
    </section>
  );
}
