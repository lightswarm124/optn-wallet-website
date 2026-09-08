const useCases = [
  {
    title: "CashTokens launches",
    body: "Issue tokens, publish metadata, show balances, support holder views, and make tokens usable in wallet and app UX.",
    help: "OPTN Wallet, TokenIndexer, metadata, public services, and integration support.",
    span: "xl:col-span-2",
  },
  {
    title: "Wallet and exchange integrations",
    body: "Add BCH, CashTokens, metadata, and transaction support without building every backend component from scratch.",
    help: "BCH service access, TokenIndexer, wallet flows, and API support.",
  },
  {
    title: "Token-aware app backends",
    body: "Use token balances, holder data, metadata, and history in dashboards, explorers, wallets, or reward systems.",
    help: "TokenIndexer, public APIs, and metadata support.",
  },
  {
    title: "User-owned rewards and airdrops",
    body: "Let users hold claims, redemptions, loyalty points, and community assets directly in their wallet.",
    help: "OPTN Wallet, CashTokens, token indexing, and wallet-connected flows.",
  },
  {
    title: "Controlled payouts and grant flows",
    body: "Design flows for amount, timing, token, recipient, recovery, staged releases, airdrops, and grant-style payouts.",
    help: "covenant-aware patterns, wallet UX, transaction construction, and testing.",
    span: "xl:col-span-2",
  },
  {
    title: "Escrow and access",
    body: "Support commerce, milestone releases, grants, and token-gated access with transaction-aware product flows.",
    help: "wallet UX, token data, transaction patterns, and service access.",
  },
  {
    title: "Wallet-connected web apps",
    body: "Connect web apps to wallet signing and low-fee BCH transaction flows.",
    help: "wallet connections, transaction construction, and app integration support.",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="section">
      <div className="mx-auto max-w-6xl">
        <div className="surface-panel rounded-[2rem] p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <div className="section-chip">Use cases OPTN supports</div>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                What teams can ship with OPTN
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/75">
                OPTN is built for teams that need BCH product flows, not just
                raw protocol access. The same stack can support launches,
                integrations, backends, and wallet-connected experiences.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {useCases.map((item) => (
                <div key={item.title} className={`matrix-cell ${item.span ?? ""}`}>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/75">{item.body}</p>
                  <p className="mt-3 text-xs leading-5 text-accent-primary/90">
                    OPTN helps with {item.help}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
