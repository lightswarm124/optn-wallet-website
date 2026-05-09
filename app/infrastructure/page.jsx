import Link from "next/link";
import ServiceStatusBlock from "../components/ServiceStatusBlock";

function StackCard({ title, body, items }) {
  return (
    <div className="surface-panel rounded-[2rem] p-6 md:p-8">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/75 md:text-base">
        {body}
      </p>
      <ul className="mt-6 space-y-3 text-sm text-white/80">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export const metadata = {
  title: "Hosted BCH Services | Infrastructure from OPTN Labs",
  description:
    "Hosted BCH infrastructure from OPTN Labs, including Electrum, Chaingraph, BCMR, IPFS, and token data access for wallet and app teams.",
  alternates: {
    canonical: "https://www.optnlabs.com/infrastructure",
  },
};

export default function InfrastructurePage() {
  return (
    <main className="site-shell min-h-screen text-white">
      <section className="px-6 pb-8 pt-16 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent-primary/90">
            Hosted access
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Hosted BCH services
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
                Hosted services for teams that need BCH backend access without
                running Electrum, Chaingraph, BCMR, IPFS, token data services,
                and related services themselves.
              </p>
            </div>
            <div className="rounded-[2rem] border border-accent-primary/30 bg-white/[0.05] p-5">
              <div className="text-sm font-medium text-accent-primary">
                Includes
              </div>
              <div className="mt-2 text-sm leading-6 text-white/75">
                Electrum, Chaingraph, BCMR, IPFS, and token data access.
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-background-dark transition-colors hover:bg-white/90"
            >
              Request access
            </Link>
            <Link
              href="#tokenindex"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition-colors hover:border-accent-primary/50 hover:bg-white/10"
            >
              View token data
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          <StackCard
            title="Connectivity"
            body="For wallets and apps that need reliable network access."
            items={[
              "Electrum endpoints for wallet connectivity",
              "Transaction broadcast support",
              "Mainnet and chipnet coverage where available",
            ]}
          />
          <StackCard
            title="Data"
            body="For products that need blockchain data and token lookups."
            items={[
              "Chaingraph for blockchain queries",
              "BCMR for token metadata",
              "Token data for balances, holders, and portfolios",
            ]}
          />
          <StackCard
            title="Content"
            body="For apps that need file and media delivery."
            items={[
              "IPFS gateway and API access",
              "Hosted routing through our stack",
              "Support during integration",
            ]}
          />
        </div>
      </section>

      <section id="tokenindex" className="px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="surface-panel rounded-[2rem] p-6 md:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent-primary/90">
              Token data
            </p>
            <div className="mt-4 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  CashTokens indexing and API
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
                  Our token data service indexes CashTokens and associates them with
                  addresses so apps can show balances, holder data, metadata, and
                  portfolios.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/#contact"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-background-dark transition-colors hover:bg-white/90"
                  >
                    Ask about token data access
                  </Link>
                  <Link
                    href="#tokenindex"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition-colors hover:border-accent-primary/50 hover:bg-white/10"
                  >
                    Jump to section
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-[2rem] border border-accent-primary/25 bg-white/[0.06] p-5">
                  <div className="text-sm font-medium text-accent-primary">
                    Token data
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Address portfolios, holder data, token summaries, and token metadata.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-black/20 p-5">
                  <div className="text-sm font-medium text-accent-primary">
                    API-first
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    A REST API for apps, mobile clients, and backend services.
                  </p>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-black/20 p-5">
                  <div className="text-sm font-medium text-accent-primary">
                    Open source
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Run it yourself or use it through our hosted service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-panel rounded-[2rem] p-6 md:p-8">
            <h2 className="text-3xl font-semibold text-white">For</h2>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li>App backends that need BCH data</li>
              <li>Wallet products that need connectivity and metadata</li>
              <li>Teams that want to avoid early infrastructure overhead</li>
            </ul>
          </div>

          <div className="surface-panel rounded-[2rem] p-6 md:p-8">
            <h2 className="text-3xl font-semibold text-white">Access</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm font-medium text-accent-primary">
                  1. Share the project
                </div>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Tell us what you are building and what services you need.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm font-medium text-accent-primary">
                  2. Confirm the scope
                </div>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  We confirm network coverage, expected usage, and fit.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm font-medium text-accent-primary">
                  3. Get onboarded
                </div>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Access is set up around the product and the services involved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-section">
        <ServiceStatusBlock
          endpoint="/api/service-status?scope=public-infra"
          sectionId="public-service-status"
          title="Public service status"
          description="Live status for the public infrastructure endpoints we currently expose. Checks are cached server-side so the page stays fast while still refreshing on a regular cadence."
          columnsClassName="md:grid-cols-2 xl:grid-cols-3"
          z
        />
      </div>

      <section className="px-6 pb-16 pt-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-accent-primary/30 bg-gradient-to-br from-white/[0.1] to-transparent p-6 md:p-8">
          <h2 className="text-3xl font-semibold text-white">
            Need BCH backend access?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75 md:text-base">
            Tell us what you are building and what services you need.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-background-dark transition-colors hover:bg-white/90"
            >
              Get in touch
            </Link>
            <Link
              href="#tokenindex"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition-colors hover:border-accent-primary/50 hover:bg-white/10"
            >
              Explore token data
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
