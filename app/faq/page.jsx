import Link from "next/link";
import { createPageMetadata } from "../../lib/seo";

const faqs = [
  {
    q: "What is OPTN Labs?",
    a: "OPTN Labs builds Bitcoin Cash wallets, developer tools, infrastructure, and programmable transaction systems. OPTN Wallet is the shipped user product, while the broader platform work focuses on tools and transaction controls for BCH applications and software-operated funds.",
  },
  {
    q: "Is OPTN only a wallet?",
    a: "No. OPTN Wallet is the shipped user product, but OPTN also builds developer tools, Bitcoin Cash infrastructure, CashToken integrations, and programmable transaction systems for product teams.",
  },
  {
    q: "What is OPTN Wallet?",
    a: "OPTN Wallet is our BCH wallet and reference implementation. It proves the wallet UX, token flows, app connections, add-ons, and advanced transaction behavior we want to make easier for other teams.",
  },
  {
    q: "What does OPTN build?",
    a: "OPTN builds wallet software, CashTokens support, token indexing, Bitcoin Cash infrastructure, covenant-aware transaction flows, and integration support.",
  },
  {
    q: "What is TokenIndexer?",
    a: "TokenIndexer is OPTN's token data layer for balances, holders, metadata, and app-facing APIs.",
  },
  {
    q: "What Bitcoin Cash services are available?",
    a: "The public service surface includes Electrum, Chaingraph, BCMR, IPFS, and token data access, with public status for what is currently exposed.",
  },
  {
    q: "Can OPTN help with CashTokens?",
    a: "Yes. CashTokens are a core part of the stack, from wallet support to metadata and token-aware app flows.",
  },
  {
    q: "Can OPTN help with covenants?",
    a: "Yes. We help with covenant patterns, transaction planning, and product flows that depend on constrained spend behavior.",
  },
  {
    q: "Do I need to know CashScript?",
    a: "No. If you already know CashScript, great. If not, OPTN can still help with the design and implementation path.",
  },
  {
    q: "What does outcome control mean?",
    a: "It means the app can shape what a valid transaction is allowed to do, not just who can authorize it.",
  },
  {
    q: "What should I send when I reach out?",
    a: "Send what you are building, the part of the stack you need help with, your timeline, and any repo or architecture notes that will help us understand the scope.",
  },
];

export const metadata = createPageMetadata({
  title: "OPTN Labs FAQ | Wallets, Infrastructure & BCH Engineering",
  description:
    "Frequently asked questions about OPTN Labs, OPTN Wallet, Bitcoin Cash infrastructure, and BCH implementation support.",
  path: "/faq",
});

function Question({ q, a }) {
  return (
    <details className="surface-panel rounded-[1.75rem] p-5 md:p-6">
      <summary className="cursor-pointer list-none text-lg font-semibold text-white">
        {q}
      </summary>
      <p className="mt-3 text-sm leading-6 text-white/75">{a}</p>
    </details>
  );
}

export default function FaqPage() {
  return (
    <div className="site-shell supporting-page min-h-screen">
      <section className="px-6 pb-8 pt-16 md:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent-primary/90">
            Visitor guide
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mt-5 text-base leading-7 text-white/75 md:text-lg md:leading-8">
            A short answer page for teams deciding whether OPTN Labs is the
            right fit for their BCH product, wallet, or infrastructure work.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-background-dark transition-colors hover:bg-white/90"
            >
              Contact OPTN
            </Link>
            <Link
              href="/wallet"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition-colors hover:border-accent-primary/50 hover:bg-white/10"
            >
              Explore OPTN Wallet
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-4xl gap-4">
          {faqs.map((item) => (
            <Question key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </section>

      <section className="px-6 pb-16 pt-10">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-accent-primary/30 bg-gradient-to-br from-white/[0.1] to-transparent p-6 md:p-8 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Still unsure?
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/75 md:text-base">
            Send a short note and we will point you to the right route or the
            right part of the stack.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-background-dark transition-colors hover:bg-white/90"
            >
              Build with OPTN
            </Link>
            <Link
              href="/blog"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition-colors hover:border-accent-primary/50 hover:bg-white/10"
            >
              Read builder notes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
