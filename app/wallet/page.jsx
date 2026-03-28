import Link from "next/link";
import ScreenshotCarousel from "../components/ScreenshotCarousel";

function InfoCard({ title, body }) {
  return (
    <div className="surface-panel rounded-3xl p-5">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/75">{body}</p>
    </div>
  );
}

export const metadata = {
  title: "OPTN Wallet | BCH Wallet and Reference Implementation",
  description:
    "OPTN Wallet is a BCH wallet and reference app from OPTN Labs, with CashTokens creation, WalletConnect, an in-wallet add-on marketplace, and customizable contract-based flows.",
  alternates: {
    canonical: "https://www.optnlabs.com/wallet",
  },
};

export default function WalletPage() {
  return (
    <main className="site-shell min-h-screen text-white">
      <section className="px-6 pb-10 pt-16 md:pt-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent-primary/90">
              Product
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              OPTN Wallet
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
              OPTN Wallet is our BCH wallet and reference app. It supports
              CashTokens creation, web app connections, built-in add-ons, and
              more advanced transaction flows.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://play.google.com/store/apps/details?id=optn.wallet.app"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-background-dark transition-colors hover:bg-white/90"
              >
                Get OPTN Wallet
              </a>
              <a
                href="https://github.com/OPTNLabs/OPTNWallet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition-colors hover:border-accent-primary/50 hover:bg-white/10"
              >
                View source
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <InfoCard
              title="Token support"
              body="Create and manage CashTokens, including fungible tokens, NFTs, and token metadata."
            />
            <InfoCard
              title="App connections"
              body="Connect to web apps through WalletConnect for account access and transaction signing."
            />
            <InfoCard
              title="Add-on marketplace"
              body="An in-wallet add-on surface for modules and app extensions."
            />
            <InfoCard
              title="Transaction control"
              body="Supports batch transactions and custom contract-based flows that can enforce how funds move."
            />
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-black/0 via-slate-950/40 to-black/0">
        <ScreenshotCarousel />
      </div>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <div className="surface-panel rounded-[2rem] p-6 md:p-8">
            <h2 className="text-3xl font-semibold text-white">Includes</h2>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li>BCH wallet management and transaction sending</li>
              <li>CashTokens creation and support for fungible and non-fungible tokens</li>
              <li>Batch transactions with multiple inputs and outputs</li>
              <li>Custom contract-based flows that can enforce transaction rules</li>
              <li>Background syncing for balances, UTXOs, and history</li>
            </ul>
          </div>

          <div className="surface-panel rounded-[2rem] p-6 md:p-8">
            <h2 className="text-3xl font-semibold text-white">Used for</h2>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li>A wallet product for BCH users</li>
              <li>A reference point for wallet UX and token flows</li>
              <li>An integration target for web apps</li>
              <li>A base for teams exploring BCH product ideas</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <InfoCard
            title="External apps"
            body="Web apps can connect through WalletConnect for account access and signing."
          />
          <InfoCard
            title="In-wallet apps"
            body="Add-ons can run inside the wallet through a built-in marketplace and permissioned extension model."
          />
          <InfoCard
            title="Infrastructure"
            body="The wallet can use configurable backend endpoints, overrides, and failover settings."
          />
        </div>
      </section>

      <section className="px-6 pb-16 pt-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-accent-primary/30 bg-gradient-to-br from-white/[0.1] to-transparent p-6 md:p-8">
          <h2 className="text-3xl font-semibold text-white">
            Try the wallet
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75 md:text-base">
            The wallet is the clearest way to see how we approach BCH
            software.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://play.google.com/store/apps/details?id=optn.wallet.app"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-background-dark transition-colors hover:bg-white/90"
            >
              Get OPTN Wallet
            </a>
            <Link
              href="/#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition-colors hover:border-accent-primary/50 hover:bg-white/10"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
