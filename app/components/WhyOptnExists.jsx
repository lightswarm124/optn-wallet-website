const cards = [
  {
    title: "Wallet UX",
    body: "Users need practical flows for BCH, CashTokens, app connections, UTXOs, and advanced transactions.",
  },
  {
    title: "Token data",
    body: "Apps need balances, metadata, holder views, portfolios, and registry support.",
  },
  {
    title: "Backend access",
    body: "Teams need reliable BCH services before they are ready to run every backend component themselves.",
  },
  {
    title: "Transaction patterns",
    body: "Builders need reusable patterns for controlled payouts, escrow, rewards, recovery paths, batch transactions, and app-specific rules.",
  },
];

export default function WhyOptnExists() {
  return (
    <section id="why-optn" className="section">
      <div className="mx-auto max-w-6xl">
        <div className="surface-panel rounded-[2rem] p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <div className="section-chip">Why OPTN exists</div>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                BCH has the primitives. Teams still need the app layer.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/75">
                Bitcoin Cash has low fees, CashTokens, and covenant-capable
                transaction patterns. But protocol capability is not product
                readiness. Teams still need wallet UX, token metadata,
                indexing, backend access, transaction construction, testing,
                and launch support. OPTN Labs is building that app layer.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/70">
                BCH has the primitives. OPTN turns them into wallet flows,
                token data, service access, and implementation paths teams can
                actually ship with.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/60">
                Beyond wallet access, OPTN helps teams shape what a transaction
                can do: controlled payouts, escrow, rewards, recovery paths,
                and token-aware application behavior.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {cards.map((card) => (
                <div key={card.title} className="matrix-cell">
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/75">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
