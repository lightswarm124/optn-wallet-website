const controlColumns = [
  {
    title: "Key control",
    question: "Who can authorize?",
    examples: ["Wallet access", "Signatures", "Permissions", "Shared authorization"],
  },
  {
    title: "Transaction-level control",
    question: "What must the transaction do?",
    examples: ["Amount", "Recipient", "Token", "Timing", "Recovery path", "App-specific rules"],
  },
];

export default function BeyondWalletAccess() {
  return (
    <section id="beyond-wallet-access" className="section">
      <div className="mx-auto max-w-6xl">
        <div className="surface-panel rounded-[2rem] p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <div className="section-chip">Beyond wallet access</div>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                Transaction rules can shape what funds are allowed to do
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/75">
                Most self-custody tools focus on who can sign. OPTN helps teams
                design BCH flows where transaction rules can also shape what
                funds are allowed to do.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/60">
                This is where BCH covenants become useful to product teams:
                controlled payouts, escrow, rewards, recovery paths, and
                token-aware applications.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {controlColumns.map((column) => (
                <div key={column.title} className="matrix-cell">
                  <h3 className="text-lg font-semibold text-white">{column.title}</h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-accent-primary/90">
                    {column.question}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {column.examples.map((example) => (
                      <span
                        key={example}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/75"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
