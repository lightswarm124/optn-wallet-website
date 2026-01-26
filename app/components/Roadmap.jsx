export default function Roadmap() {
  const items = [
    {
      title: "Now",
      pill: "Available today",
      bullets: [
        "OPTN Wallet foundations: CashTokens flows + covenant-focused UX",
        "Advanced transaction building: core flows working, ongoing hardening",
        "Hosted infrastructure access for teams (endpoints + operational support)",
        "Token UX improvements and metadata reliability work (BCMR + retrieval patterns)",
        "Developer updates via blog + examples (what’s working, what’s next)",
      ],
    },
    {
      title: "Next",
      pill: "Near-term",
      bullets: [
        "Covenant marketplace / add-ons marketplace (user-friendly contract interfaces)",
        "More covenant templates: escrow, restricted spends, programmable payouts",
        "Transaction builder hardening: clearer errors, safer defaults, better diagnostics",
        "Hosted access improvements: clearer tiers, higher limits, and reliability work",
        "Engineering support packages: integration help and build support",
      ],
    },
    {
      title: "Later",
      pill: "Maybe later",
      bullets: [
        "Expanded ecosystem integrations and partner launches with real production apps",
        "More reusable contract flows and testing/deployment tooling around them",
        "Dedicated infrastructure options for serious production workloads (isolation where applicable)",
        "Potential future chain support (BTC/ETH) — explored after BCH roadmap milestones land",
      ],
    },
  ];

  return (
    <section id="roadmap" className="section text-center">
      <h2 className="text-3xl font-semibold text-center mb-3">Roadmap</h2>
      <p className="text-white/70 max-w-3xl mx-auto mb-10">
        We’re building a wallet that proves the UX, plus hosted infrastructure
        access and hands-on engineering support for teams shipping on Bitcoin
        Cash.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((col) => (
          <div
            key={col.title}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl text-left hover:border-accent-primary/40 transition-colors"
          >
            <div className="flex items-baseline justify-between gap-3 flex-wrap">
              <h3 className="text-xl font-semibold text-white">{col.title}</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                {col.pill}
              </span>
            </div>

            <ul className="mt-5 space-y-2 text-sm text-white/80">
              {col.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-accent-primary">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
