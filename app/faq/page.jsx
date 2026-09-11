import Link from "next/link";
import { createPageMetadata } from "../../lib/seo";

const faqs = [
  {
    q: "What is OPTN Labs?",
    a: "OPTN Labs is a Canadian company building Bitcoin Cash wallets, developer tools, infrastructure, and transaction systems. OPTN Wallet is the shipped user product; the wider company helps teams make BCH products easier to use, integrate, and operate.",
  },
  {
    q: "What is OPTN Wallet?",
    a: "OPTN Wallet is a self-custody BCH wallet and reference implementation. It supports everyday wallet use, CashTokens, connected applications, and advanced transaction work as the product continues to develop.",
  },
  {
    q: "Does OPTN hold customer keys or funds?",
    a: "No. OPTN's open and paid tooling paths are designed around self-custody and do not require OPTN to hold your keys or funds. Any custom arrangement should be scoped explicitly.",
  },
  {
    q: "What is available today, and what is still in development?",
    a: "OPTN Wallet, public developer resources, Bitcoin Cash infrastructure, and engineering support are available today. Some convenience layers, including Builder and the in-wallet add-on system, are still in development and are not generally available.",
  },
  {
    q: "What Bitcoin Cash services are available?",
    a: "The public infrastructure surface includes Electrum, Chaingraph, BCMR, IPFS, and token data access. TokenIndexer provides token balances, holders, metadata, and app-facing data, with public status for what is currently exposed.",
  },
  {
    q: "Can I use OPTN's open tools without OPTN?",
    a: "Yes. Public tools, documentation, and code are available for teams that want to explore and build independently. OPTN's engineering services are available when you want help shaping, integrating, testing, or shipping a workflow.",
  },
  {
    q: "Can OPTN help with CashTokens, covenants, or CashScript?",
    a: "Yes. OPTN can help with CashToken-aware wallet and application flows, covenant patterns, transaction planning, and CashScript implementation. You do not need to know CashScript before starting a conversation.",
  },
  {
    q: "When should I contact OPTN about engineering or custom work?",
    a: "Reach out when you need production workflow design, covenant or transaction work, wallet or CashToken integration, infrastructure guidance, testing, security review, or release support.",
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
