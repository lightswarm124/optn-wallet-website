import Link from "next/link";
import { createPageMetadata } from "../../lib/seo";

const faqs = [
  {
    q: "What is OPTN Labs?",
    a: "OPTN Labs is the company behind OPTN Wallet. We also publish resources for the Bitcoin Cash ecosystem, operate supporting infrastructure, provide engineering services, and explore controlled-payment pilot projects.",
  },
  {
    q: "What can I use today?",
    a: "OPTN Wallet is our released product for self-custody BCH and CashTokens. Builders can also use our public code, technical resources, token and metadata guidance, and available Bitcoin Cash infrastructure services.",
  },
  {
    q: "What can I do with OPTN Wallet?",
    a: "You can send and receive BCH, manage fungible tokens and NFTs, connect to compatible apps through WalletConnect, review transaction and message requests, protect and restore your wallet, and use advanced transaction and contract tools.",
  },
  {
    q: "Does OPTN hold Wallet users' keys or funds?",
    a: "No. OPTN Wallet is self-custody software: users control their own wallet and recovery phrase. Protecting and securely backing up that recovery phrase is essential.",
  },
  {
    q: "What does the ecosystem section include?",
    a: "It connects builders to OPTN Wallet, CashTokens and BCMR metadata guidance, covenant and contract resources, infrastructure, token data, open-source code, and practical implementation experience.",
  },
  {
    q: "What Bitcoin Cash services are available?",
    a: "The infrastructure section covers Electrum connectivity, Chaingraph queries, BCMR metadata, IPFS content, and TokenIndexer data. Check the live service status or contact us for the current access options.",
  },
  {
    q: "Can I use OPTN's open tools independently?",
    a: "Yes. Public code, documentation, and technical resources are available for teams that want to explore and build independently. OPTN engineering is available when you want help with architecture, integration, testing, or release preparation.",
  },
  {
    q: "What are controlled-payment pilot projects?",
    a: "They are WIP explorations for software and AI agents that need to make payments within defined rules. A pilot can examine permitted recipients, amounts, transaction paths, failure cases, and owner recovery for a specific workflow.",
  },
  {
    q: "Why separate signing authority from payment rules?",
    a: "A key establishes who may authorize a transaction. It does not necessarily restrict the recipient, amount, structure, or next state. Controlled-payment pilots explore how those financial boundaries can be defined separately for funds placed in a specific workflow.",
  },
  {
    q: "Can OPTN help with CashTokens, covenants, or CashScript?",
    a: "Yes. OPTN can help with CashToken-aware wallet and application flows, covenant patterns, transaction planning, and CashScript implementation. You do not need to know the implementation details before contacting us.",
  },
  {
    q: "When should I contact OPTN?",
    a: "Contact us when you need help with OPTN Wallet, BCH infrastructure, an ecosystem integration, engineering work, or a controlled-payment pilot project.",
  },
  {
    q: "What should I send when I reach out?",
    a: "Send what you are building, the part of the stack you need help with, your timeline, and any repo or architecture notes that will help us understand the scope.",
  },
];

export const metadata = createPageMetadata({
  title: "OPTN Labs FAQ | Wallet, Ecosystem & Pilot Projects",
  description:
    "Answers about OPTN Wallet, self-custody, Bitcoin Cash ecosystem resources, infrastructure, engineering, and controlled-payment pilot projects.",
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
            Straight answers about OPTN Wallet, self-custody, ecosystem
            resources, engineering, and controlled-payment pilot projects.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-background-dark transition-colors hover:bg-white/90"
            >
              Contact us
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
              Contact us
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
