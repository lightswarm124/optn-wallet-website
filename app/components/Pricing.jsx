export default function Pricing() {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      subtitle: "For builders exploring BCH",
      bestFor: "Learning + prototypes",
      bullets: [
        "Docs, blog guides, and reference implementations",
        "Community support (Telegram)",
        "Best-effort public resources as available",
      ],
      note: "Great for proof-of-concepts and learning the stack.",
      cta: { label: "Start with Docs", href: "#docs" },
      featured: false,
    },
    {
      name: "Team",
      price: "Contact",
      subtitle: "For teams shipping to production",
      bestFor: "Apps going live",
      bullets: [
        "Higher limits and priority capacity",
        "Integration support (wallet/app backend)",
        "Guidance on indexing, metadata, and monitoring patterns",
      ],
      note: "Tip: include mainnet vs chipnet + expected usage.",
      cta: { label: "Request access", href: "#contact" },
      featured: true,
    },
    {
      name: "Dedicated",
      price: "Contact",
      subtitle: "For serious workloads and partners",
      bestFor: "High-volume or partner ops",
      bullets: [
        "Dedicated capacity and tuning for your workload",
        "Optional private endpoints / isolation (where applicable)",
        "Ongoing support via retainer-style engagement",
      ],
      note: "Tip: share throughput targets + reliability requirements.",
      cta: { label: "Talk to us", href: "#contact" },
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="section text-center">
      <h2 className="text-3xl font-semibold text-center mb-3">Pricing</h2>
      <p className="text-white/70 max-w-3xl mx-auto mb-10">
        Simple pricing that scales from experiments to production. If you’re
        building something real, we’ll help you get reliable access and ship
        faster.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={[
              "rounded-2xl p-6 text-left border transition-colors",
              t.featured
                ? "bg-white/10 border-accent-primary/60"
                : "bg-white/5 border-white/10 hover:border-accent-primary/40",
            ].join(" ")}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-white">{t.name}</h3>
                <div className="text-xs text-white/60 mt-1">{t.bestFor}</div>
              </div>
              {t.featured ? (
                <span className="text-xs px-2 py-1 rounded-full bg-accent-primary/20 text-accent-primary">
                  Most common
                </span>
              ) : null}
            </div>

            <div className="mt-3">
              <div className="text-3xl font-semibold text-white">{t.price}</div>
              <div className="text-sm text-white/70 mt-1">{t.subtitle}</div>
            </div>

            <ul className="mt-5 space-y-2 text-sm text-white/80">
              {t.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-accent-primary">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <a
                href={t.cta.href}
                className={[
                  "inline-flex items-center justify-center w-full h-11 rounded-full font-medium transition-colors",
                  t.featured
                    ? "bg-white text-background-dark hover:bg-white/90"
                    : "bg-white/10 text-white hover:bg-white/15 border border-white/10",
                ].join(" ")}
              >
                {t.cta.label}
              </a>
            </div>

            <div className="mt-4 text-xs text-white/60">{t.note}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-sm text-white/60 max-w-3xl mx-auto">
        Not sure which tier fits?{" "}
        <a href="#contact" className="text-accent-primary hover:underline">
          Tell us what you’re building
        </a>{" "}
        and we’ll point you to the right setup.
        <div className="mt-2 text-xs text-white/50">
          Early-stage note: capacity and pricing are tailored to workload until
          we publish fixed tiers.
        </div>
      </div>
    </section>
  );
}
