const stackCards = [
  {
    title: "OPTN Wallet",
    body: "Real wallet UX for BCH, CashTokens, app connections, add-ons, UTXO-aware flows, and advanced transactions.",
  },
  {
    title: "TokenIndexer",
    body: "Token balances, holder data, metadata, portfolio views, and app-facing APIs.",
  },
  {
    title: "BCH service access",
    body: "Electrum, Chaingraph, BCMR, IPFS, TokenIndexer, monitoring, and backend access where available.",
  },
  {
    title: "Transaction patterns",
    body: "Reusable patterns for controlled payouts, escrow, rewards, recovery, batch transactions, and token-aware flows.",
  },
  {
    title: "Integration support",
    body: "BCH-specific architecture, implementation, testing, launch support, and handoff.",
  },
];

export default function StackSection() {
  return (
    <section id="stack" className="section">
      <div className="mx-auto max-w-6xl">
        <div className="surface-panel rounded-[2rem] p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="section-chip">The OPTN stack</div>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                What stack means for BCH teams
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/75">
                OPTN packages the pieces BCH teams need before launch: wallet
                flows, token data, service access, transaction patterns, and
                hands-on integration support.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {stackCards.map((card, index) => (
                <div
                  key={card.title}
                  className={`matrix-cell ${index === 4 ? "md:col-span-2 xl:col-span-1" : ""}`}
                >
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
