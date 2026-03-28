import Link from "next/link";

function ApiCard({ title, body, items }) {
  return (
    <div className="surface-panel rounded-[2rem] p-6 md:p-8">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/75 md:text-base">{body}</p>
      <ul className="mt-6 space-y-3 text-sm text-white/80">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export const metadata = {
  title: "TokenIndex | CashTokens Indexing and API",
  description:
    "TokenIndex is an open-source CashTokens indexing service and API from OPTN Labs for address portfolios, holder data, balances, and metadata.",
  alternates: {
    canonical: "https://www.optnlabs.com/tokenindex",
  },
};

export default function TokenIndexPage() {
  return (
    <main className="site-shell min-h-screen text-white">
      <section className="px-6 pb-10 pt-16 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent-primary/90">
            Product
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                TokenIndex
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
                TokenIndex is our indexing service and API for CashTokens data.
                It associates CashTokens with addresses so apps can show
                balances, holder data, metadata, and token portfolios.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-background-dark transition-colors hover:bg-white/90"
                >
                  Ask about TokenIndex
                </Link>
                <Link
                  href="/infrastructure"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition-colors hover:border-accent-primary/50 hover:bg-white/10"
                >
                  See hosted services
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
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          <ApiCard
            title="Core API"
            body="The API is built around the token lookups most apps need first."
            items={[
              "Token summaries",
              "Top holders and holder lists",
              "Per-address token portfolios",
            ]}
          />
          <ApiCard
            title="Metadata"
            body="TokenIndex also resolves metadata so apps can display names, symbols, and related details."
            items={[
              "Token name and symbol",
              "Decimals and basic token details",
              "Metadata and media links where available",
            ]}
          />
          <ApiCard
            title="Operations"
            body="The service is open source and can be run in your own stack or accessed through ours."
            items={[
              "Health endpoint",
              "Metrics endpoint",
              "Hosted or self-hosted deployment",
            ]}
          />
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-panel rounded-[2rem] p-6 md:p-8">
            <h2 className="text-3xl font-semibold text-white">For</h2>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li>Apps that need token balances, holders, or address portfolios</li>
              <li>Wallets that need token metadata and token lookups</li>
              <li>Backends that need a cleaner API for CashTokens data</li>
            </ul>
          </div>

          <div className="surface-panel rounded-[2rem] p-6 md:p-8">
            <h2 className="text-3xl font-semibold text-white">Getting started</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm font-medium text-accent-primary">
                  1. Describe the use case
                </div>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Tell us what kind of token data your app needs.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm font-medium text-accent-primary">
                  2. Confirm the endpoints
                </div>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Decide which responses and network coverage matter.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm font-medium text-accent-primary">
                  3. Integrate
                </div>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Use TokenIndex directly or alongside the hosted stack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 pt-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-accent-primary/30 bg-gradient-to-br from-white/[0.1] to-transparent p-6 md:p-8">
          <h2 className="text-3xl font-semibold text-white">
            Need token data?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75 md:text-base">
            If your app needs CashTokens balances, holders, or address-level
            portfolios, TokenIndex is the simplest place to start.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-background-dark transition-colors hover:bg-white/90"
            >
              Get in touch
            </Link>
            <Link
              href="/infrastructure"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition-colors hover:border-accent-primary/50 hover:bg-white/10"
            >
              See hosted services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
