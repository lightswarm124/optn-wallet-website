import {
  ArrowLink,
  ButtonLink,
  FinalCTA,
  SectionLabel,
} from "../components/SitePrimitives";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "OPTN Labs Pricing | Free Tools, Builder & Custom Engineering",
  description:
    "Start with OPTN's free Bitcoin Cash tools and Wallet, follow Builder as it develops, or work with OPTN on custom BCH, CashToken, covenant, and agent-payment engineering.",
  path: "/pricing",
});

const plans = [
  {
    status: "Available now",
    title: "Community",
    price: "Free",
    body: "Everything you need to explore and build with OPTN's open BCH tools.",
    features: ["OPTN Wallet", "Open tools and templates", "Local testing and verification", "Public documentation"],
    href: "/developers",
    label: "Explore the tools",
  },
  {
    status: "Coming soon",
    title: "Builder",
    body: "A guided product layer for teams building with OPTN's open tools, with simpler setup and reusable integration workflows.",
    features: ["Guided setup", "Reusable integration workflows", "A smoother developer experience"],
    price: "",
    href: "/#contact",
    label: "Follow Builder development",
  },
  {
    status: "Available now",
    title: "Custom engineering",
    price: "Project-based",
    body: "Hands-on support for specialized BCH products, transaction workflows, and enterprise deployments.",
    features: ["Workflow and architecture scoping", "Wallet and CashToken integration", "Covenant and transaction design", "Testing and release support"],
    href: "/#contact",
    label: "Discuss custom work",
  },
];

const questions = [
  ["What is the managed platform direction?", "OPTN is developing a managed coordination layer; it is not available today. Teams can use available OPTN tools and infrastructure or work with OPTN through scoped engineering."],
  ["Does OPTN hold customer keys or funds?", "OPTN's standard tooling is built around customer-controlled keys and funds. Any non-standard operating model is scoped explicitly."],
  ["When should I choose Custom?", "Choose Custom for production workflow design, covenant or transaction work, wallet and CashToken integration, testing, security review, or deployment support."],
  ["When can I use Builder?", "Builder is in development. We will share access and pricing information when it is ready for teams."],
];

export default function PricingPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="site-container price-intro">
          <SectionLabel>Pricing</SectionLabel>
          <h1>Start with the open stack. Work with OPTN when you need more.</h1>
          <p className="page-hero-copy">Use OPTN Wallet, public developer resources, and infrastructure directly. Engage the team for specialized integration, transaction design, testing, and engineering delivery.</p>
          <div className="hero-actions"><ButtonLink href="/developers">Explore free tools</ButtonLink><ButtonLink href="/#contact" variant="secondary">Talk to OPTN</ButtonLink></div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Choose your path</SectionLabel>
          <h2>Choose the level of support that fits.</h2>
          <div className="pricing-tier-grid">
            {plans.map((plan) => (
              <div className="pricing-tier" key={plan.title}>
                <span className="status-pill">{plan.status}</span>
                <h3>{plan.title}</h3>
                {plan.price ? <strong className="offer-price">{plan.price}</strong> : null}
                <p>{plan.body}</p>
                <ul className="check-list">{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                <ArrowLink href={plan.href}>{plan.label}</ArrowLink>
              </div>
            ))}
          </div>
          <div className="custom-pricing-band">
            <div><SectionLabel>Custom</SectionLabel><h3>Need a production workflow or a partner to help you ship?</h3><p>Get focused help with architecture, covenant and transaction design, integration, adversarial testing, migration, and release.</p></div>
            <ButtonLink href="/#contact">Talk to OPTN</ButtonLink>
          </div>
          <p className="fine-print">Additional integration, audit, compliance, and specialized engineering work may require separate scope and pricing.</p>
          <div className="custom-pricing-band pricing-future-band">
            <div><SectionLabel>Long-term direction</SectionLabel><h3>A managed layer for programmable financial workflows.</h3><p>OPTN&apos;s longer-term platform direction brings payment coordination, programmable transaction rules, monitoring, integrations, reconciliation, and workflow operations into a managed product experience.</p></div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Common questions</SectionLabel>
          <h2>Availability and engagement details.</h2>
          <div className="faq-grid">
            {questions.map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}</summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <FinalCTA title="Have a workflow in mind?" body="Tell us what you need to build, simplify, or control." />
    </div>
  );
}
