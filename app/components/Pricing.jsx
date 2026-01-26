export default function Pricing() {
  const tiers = [
    {
      name: "Wallet",
      price: "Free",
      subtitle: "Download and use today",
      bullets: [
        "OPTN Wallet on Google Play",
        "Open-source reference implementation",
        "Community support (Telegram)",
      ],
      cta: {
        label: "Get OPTN Wallet",
        href: "https://play.google.com/store/apps/details?id=optn.wallet.app",
        external: true,
      },
      featured: false,
      note: "Best for learning, demos, and production evaluation.",
    },
    {
      name: "Hosted Access",
      price: "Contact Us",
      subtitle: "Endpoints + operational support",
      bullets: [
        "Access to hosted infrastructure endpoints",
        "Higher limits and priority capacity (as needed)",
        "Integration guidance for monitoring & reliability",
      ],
      cta: { label: "Request access", href: "#contact", external: false },
      featured: true,
      note: "Tell us mainnet vs chipnet, expected usage, and your app type.",
    },
    {
      name: "Engineering / Advisory",
      price: "Contact Us",
      subtitle: "Hands-on help for teams",
      bullets: [
        "Architecture reviews and integration planning",
        "Implementation support for wallet/backend flows",
        "Retainer-style ongoing support (optional)",
      ],
      cta: { label: "Talk to us", href: "#contact", external: false },
      featured: false,
      note: "Best for teams going live or building complex transaction flows.",
    },
  ];

  return (
    <section id="pricing" className="section text-center">
      <h2 className="text-3xl font-semibold text-center mb-3">Pricing</h2>
      <p className="text-white/70 max-w-3xl mx-auto mb-10">
        Start with the wallet for free. For hosted endpoints and production
        support, we’ll scope access and pricing around your workload.
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
            <div className="flex items-baseline justify-between gap-3 flex-wrap">
              <h3 className="text-xl font-semibold text-white">{t.name}</h3>
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
              {t.cta.external ? (
                <a
                  href={t.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    "inline-flex items-center justify-center w-full h-11 rounded-full font-medium transition-colors",
                    t.featured
                      ? "bg-white text-background-dark hover:bg-white/90"
                      : "bg-white/10 text-white hover:bg-white/15 border border-white/10",
                  ].join(" ")}
                >
                  {t.cta.label}
                </a>
              ) : (
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
              )}
            </div>

            <div className="mt-4 text-xs text-white/60">{t.note}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-sm text-white/60">
        Early-stage note: hosted access and pricing are tailored to workload
        until we publish fixed tiers.
      </div>
    </section>
  );
}
