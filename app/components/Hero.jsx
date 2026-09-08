import Image from "next/image";
import Link from "next/link";
import heroImage from "../../public/assets/images/OPTNWelcome1.png";

const heroLinks = [
  { href: "/#contact", label: "Build with OPTN", primary: true },
  { href: "/#stack", label: "See the stack" },
  { href: "/wallet", label: "Explore OPTN Wallet" },
  { href: "/#use-cases", label: "View use cases" },
];

function HeroVisual() {
  const primitiveStack = ["CashTokens", "Covenants", "Low fees", "UTXO transactions"];

  const optnStack = [
    "OPTN Wallet",
    "TokenIndexer",
    "Public BCH services",
    "Covenant-aware patterns",
    "Builder / integration support",
  ];

  const launchStack = [
    "Wallet-ready apps",
    "Token-aware apps",
    "BCH service access",
    "Controlled payouts / escrow",
    "BCH product launches",
  ];

  return (
    <div className="hero-diagram surface-panel rounded-[2rem] p-5 md:p-6">
      <div className="relative mb-5 flex items-center justify-center">
        <div className="relative h-20 w-full max-w-[280px]">
          <Image
            src={heroImage}
            alt="OPTN Labs"
            fill
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
        <div className="section-chip">Transformation diagram</div>
        <div className="mt-3 text-sm leading-6 text-white/75">
          BCH primitives become usable product infrastructure when OPTN turns
          them into a stack teams can ship with.
        </div>
        <div className="mt-4 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-center text-xs uppercase tracking-[0.2em] text-white/65">
          BCH primitives → OPTN stack → launched app flows
        </div>
        <div className="mt-4 grid gap-3">
          <StackGroup title="BCH primitives" items={primitiveStack} />
          <ArrowLabel />
          <StackGroup title="OPTN stack" items={optnStack} accent />
          <ArrowLabel />
          <StackGroup title="Launchable apps" items={launchStack} />
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-white/70">
        BCH primitives → OPTN infrastructure → launched apps
      </div>
    </div>
  );
}

function ArrowLabel() {
  return (
    <div className="flex items-center justify-center">
      <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-accent-primary/90">
        ↓
      </div>
    </div>
  );
}

function StackGroup({ title, items, accent = false }) {
  return (
    <div
      className={`rounded-2xl border px-4 py-3 ${
        accent ? "border-accent-primary/25 bg-black/30" : "border-white/10 bg-black/20"
      }`}
    >
      <div className="text-xs font-medium uppercase tracking-[0.18em] text-accent-primary/90">
        {title}
      </div>
      <div className="mt-3 grid gap-2">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/80"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="section">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-2xl">
          <div className="section-chip">Bitcoin Cash app infrastructure</div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Ship Bitcoin Cash apps without rebuilding the stack
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
            OPTN Labs gives BCH teams a working app stack: wallet UX,
            TokenIndexer, public BCH services, covenant-aware transaction
            patterns, and integration support.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
            From OPTN Wallet to TokenIndexer and public BCH services, we turn
            BCH primitives into practical product infrastructure for wallets,
            apps, token projects, and builders.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {heroLinks.map((link) =>
              link.primary ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-background-dark transition-colors hover:bg-white/90"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition-colors hover:border-accent-primary/50 hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          <p className="mt-5 text-sm text-white/60">
            Best for BCH builders, wallet and exchange teams, token projects,
            and product teams evaluating BCH app infrastructure.
          </p>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
