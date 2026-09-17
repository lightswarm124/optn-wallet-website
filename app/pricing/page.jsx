import {
  ArrowLink,
  ButtonLink,
  FinalCTA,
  SectionLabel,
} from "../components/SitePrimitives";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Work with OPTN | Wallet, Ecosystem & Engineering",
  description:
    "Use OPTN Wallet, explore open Bitcoin Cash resources, work with OPTN engineering, or scope a controlled-payment pilot project.",
  path: "/pricing",
});

const plans = [
  {
    status: "Released product",
    title: "Use OPTN Wallet",
    price: "Available now",
    body: "Use the self-custody wallet for BCH, CashTokens, connected apps, and advanced wallet workflows.",
    features: ["BCH payments", "CashTokens and NFTs", "WalletConnect", "Advanced wallet tools"],
    href: "/wallet",
    label: "Explore OPTN Wallet",
  },
  {
    status: "",
    title: "Explore the ecosystem",
    body: "Use open code, technical guides, token and metadata resources, and available BCH infrastructure.",
    features: ["Open-source Wallet", "CashTokens and BCMR", "Covenant resources", "Infrastructure and token data"],
    price: "Open resources",
    href: "/ecosystem",
    label: "Explore the ecosystem",
  },
  {
    status: "",
    title: "Build with OPTN",
    price: "Project-based",
    body: "Work with OPTN on a Bitcoin Cash product, integration, transaction workflow, or production release.",
    features: ["Wallet and application integration", "CashTokens and metadata", "Transaction and covenant design", "Testing and release support"],
    href: "/#contact",
    label: "Contact us",
  },
  {
    status: "WIP exploration",
    title: "Pilot projects",
    price: "Scoped pilot",
    body: "Explore a bounded payment workflow for software or AI with defined financial rules.",
    features: ["Workflow definition", "Financial policy design", "Threat and failure modeling", "Pilot implementation"],
    href: "/#contact",
    label: "Contact us",
  },
];

const questions = [
  ["Is OPTN Wallet available now?", "Yes. OPTN Wallet is the released product and is available through Google Play. Its open-source implementation is also available on GitHub."],
  ["Can I use the ecosystem resources independently?", "Yes. Public code, technical guides, and available services can be explored without an engineering engagement."],
  ["What can an engineering project include?", "A project can cover architecture, wallet or application integration, CashTokens, transaction and covenant design, testing, and release preparation."],
  ["What does a pilot project include?", "A pilot can examine workflow definition, policy and recovery design, threat modeling, transaction implementation, and permitted and rejected paths."],
];

export default function PricingPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="site-container price-intro">
          <SectionLabel>Work with OPTN</SectionLabel>
          <h1>Use, explore, or build with OPTN.</h1>
          <p className="page-hero-copy">Start with the released Wallet, follow the open BCH ecosystem around it, or work with OPTN on engineering and pilot projects.</p>
          <div className="hero-actions"><ButtonLink href="/wallet">Explore OPTN Wallet</ButtonLink><ButtonLink href="/#contact" variant="secondary">Contact us</ButtonLink></div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Engagements</SectionLabel>
          <h2>Start with what you need</h2>
          <div className="pricing-tier-grid">
            {plans.map((plan) => (
              <div className="pricing-tier" key={plan.title}>
                {plan.status ? <span className="status-pill">{plan.status}</span> : null}
                <h3>{plan.title}</h3>
                {plan.price ? <strong className="offer-price">{plan.price}</strong> : null}
                <p>{plan.body}</p>
                <ul className="check-list">{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                <ArrowLink href={plan.href}>{plan.label}</ArrowLink>
              </div>
            ))}
          </div>
          <div className="custom-pricing-band">
            <div><SectionLabel>Not sure where to start?</SectionLabel><h3>Tell us what you are trying to use or build.</h3><p>We will point you to the Wallet, an open ecosystem resource, an engineering path, or a suitable pilot conversation.</p></div>
            <ButtonLink href="/#contact">Contact us</ButtonLink>
          </div>
          <p className="fine-print">Additional integration, audit, compliance, and specialized engineering work may require separate scope and pricing.</p>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Details</SectionLabel>
          <h2>Common questions</h2>
          <div className="faq-grid">
            {questions.map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}</summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <FinalCTA title="Have a project in mind?" body="Tell us what you need to use, build, integrate, or explore." />
    </div>
  );
}
