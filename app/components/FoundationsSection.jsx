const proofItems = [
  {
    title: "OPTN Wallet",
    body: "Reference implementation for BCH wallet UX, CashTokens, app connections, and advanced transaction flows.",
  },
  {
    title: "TokenIndexer",
    body: "Balances, holders, metadata, and app-facing token data that product teams can actually use.",
  },
  {
    title: "Infrastructure access",
    body: "Public or scoped access to BCH infrastructure where teams need it before running every backend piece themselves.",
  },
  {
    title: "Builder notes",
    body: "Technical notes and field writeups that turn product learnings into reusable documentation.",
  },
];

const steps = [
  { id: "01", title: "Scope", body: "Map users, chain choice, required flows, and transaction rules." },
  { id: "02", title: "Design", body: "Plan wallet UX, token data, services, and covenant-aware behavior." },
  { id: "03", title: "Build", body: "Implement wallet connections, indexing, service access, and app logic." },
  { id: "04", title: "Launch", body: "Test, monitor, hand off, and support the next iteration." },
];

const trustItems = [
  "Product work",
  "Builder activity",
  "Technical focus",
];

export default function FoundationsSection() {
  return (
    <section id="foundations" className="section">
      <div className="mx-auto max-w-6xl">
        <div className="surface-panel rounded-[2rem] p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <div className="section-chip">Working product foundations</div>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                Proof from the wallet, infrastructure, and notes
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/75">
                OPTN Wallet, TokenIndexer, public BCH services, and builder
                notes give teams concrete starting points instead of a blank
                repo.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/60">
                Public proof includes the wallet, token data, public services,
                builder notes, and public infrastructure or status where
                already available.
              </p>

              <div className="mt-6 grid gap-4">
                {proofItems.map((item) => (
                  <div key={item.title} className="matrix-cell">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/75">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="matrix-cell">
                <h3 className="text-xl font-semibold text-white">
                  How OPTN works with teams
                </h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {steps.map((step) => (
                    <div key={step.id} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-accent-primary/90">
                        {step.id}
                      </div>
                      <h4 className="mt-2 text-base font-semibold text-white">{step.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-white/70">{step.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="matrix-cell">
                <h3 className="text-xl font-semibold text-white">
                  Built by BCH-native operators
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/75">
                  OPTN Labs is led by builders working directly on BCH wallet UX,
                  token infrastructure, and launch support.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {trustItems.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs uppercase tracking-[0.14em] text-white/75"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
