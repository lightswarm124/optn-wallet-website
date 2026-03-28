import Link from "next/link";

function WorkCard({ title, body }) {
  return (
    <div className="surface-panel rounded-3xl p-5">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/75">{body}</p>
    </div>
  );
}

export const metadata = {
  title: "Engineering Support | BCH Product Work from OPTN Labs",
  description:
    "OPTN Labs provides engineering support for teams building on Bitcoin Cash, including wallet work, token systems, contract design, backend integration, and launch support.",
  alternates: {
    canonical: "https://www.optnlabs.com/engineering",
  },
};

export default function EngineeringPage() {
  return (
    <main className="site-shell min-h-screen text-white">
      <section className="px-6 pb-8 pt-16 md:pt-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent-primary/90">
              Engineering support
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Engineering support for BCH product teams
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
              We work with teams that need help with wallet work, token
              systems, contract design, backend integration, or launch support
              for BCH products.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-background-dark transition-colors hover:bg-white/90"
              >
                Talk to engineering
              </Link>
              <Link
                href="/infrastructure"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition-colors hover:border-accent-primary/50 hover:bg-white/10"
              >
                See infrastructure
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-accent-primary/25 bg-white/[0.06] p-6">
            <div className="text-sm font-medium text-accent-primary">
              We help with
            </div>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>Wallet and app integration</li>
              <li>CashTokens and contract design</li>
              <li>Backend and data architecture</li>
              <li>Launch review and support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <WorkCard
            title="Architecture"
            body="Support for product and technical decisions before the build gets expensive."
          />
          <WorkCard
            title="Implementation"
            body="Help when wallet flows, token logic, contracts, or backend work start adding complexity."
          />
          <WorkCard
            title="Launch support"
            body="Extra review and support when the product is moving closer to release."
          />
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <div className="surface-panel rounded-[2rem] p-6 md:p-8">
            <h2 className="text-3xl font-semibold text-white">Teams</h2>
            <div className="mt-6 grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm font-medium text-accent-primary">
                  Founders and product leads
                </div>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  People who need a second set of eyes before committing more time or budget.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm font-medium text-accent-primary">
                  Engineering teams
                </div>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Teams working through wallet integrations, contract logic,
                  backend architecture, or token-related product work.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm font-medium text-accent-primary">
                  Launch-stage projects
                </div>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Teams that want experienced review before shipping.
                </p>
              </div>
            </div>
          </div>

          <div className="surface-panel rounded-[2rem] p-6 md:p-8">
            <h2 className="text-3xl font-semibold text-white">Work</h2>
            <div className="mt-6 space-y-5 text-sm text-white/80">
              <div>
                <div className="font-medium text-white">Planning</div>
                <p className="mt-2 leading-6 text-white/75">
                  Token design, contract structure, and transaction planning
                  before implementation gets expensive.
                </p>
              </div>
              <div>
                <div className="font-medium text-white">Build work</div>
                <p className="mt-2 leading-6 text-white/75">
                  Support for wallet flows, backend services, app integration,
                  and more involved transaction behavior.
                </p>
              </div>
              <div>
                <div className="font-medium text-white">Release preparation</div>
                <p className="mt-2 leading-6 text-white/75">
                  Help when the product is moving toward launch and the
                  remaining technical decisions matter more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 pt-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-accent-primary/30 bg-gradient-to-br from-white/[0.1] to-transparent p-6 md:p-8">
          <h2 className="text-3xl font-semibold text-white">
            Need engineering help?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75 md:text-base">
            Send us a short note about the product, the stage, and where you
            need help.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-background-dark transition-colors hover:bg-white/90"
            >
              Get in touch
            </Link>
            <Link
              href="/blog"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition-colors hover:border-accent-primary/50 hover:bg-white/10"
            >
              Read updates
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
