import {
  ArrowLink,
  ButtonLink,
  FinalCTA,
  FlowSteps,
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
    body: "Build directly with the open wallet, covenant and transaction tooling.",
    features: ["OPTN Wallet", "Open tools and templates", "Local testing and verification", "Public documentation"],
    href: "/developers",
    label: "Explore the tools",
  },
  {
    status: "Coming soon",
    title: "Builder",
    price: "Not yet priced",
    body: "A future convenience layer for teams that want less wiring around OPTN's open tools.",
    features: ["Convenience layer over open tools", "Guided setup as it develops", "Integration recipes as they mature", "Pricing to be announced"],
    href: "/#contact",
    label: "Ask about the roadmap",
  },
  {
    status: "Available now",
    title: "Custom engineering",
    price: "Scoped to project",
    body: "Work directly with OPTN on specialized BCH, CashToken, covenant, and agent-payment engineering.",
    features: ["Workflow and architecture scoping", "Wallet and CashToken integration", "Covenant and transaction design", "Testing and release support"],
    href: "/#contact",
    label: "Discuss custom work",
  },
];

const steps = [
  { title: "Choose a path", body: "Start with open tools or identify where support will help." },
  { title: "Configure", body: "Define the workflow, policy and integration boundaries." },
  { title: "Build or review", body: "Use the tooling yourself or bring OPTN in for scoped work." },
];

const questions = [
  ["Do paid plans include hosted financial control?", "No. These plans are for convenience tooling and support around self-managed workflows. Hosted authorities, monitoring and managed coordination remain future product directions."],
  ["Does OPTN hold customer keys or funds?", "The open and paid tooling paths do not require OPTN to hold your keys or funds. Custom arrangements should be scoped explicitly."],
  ["When should I choose Custom?", "Choose Custom for production workflow design, covenant or transaction work, wallet and CashToken integration, testing, security review, or deployment support."],
  ["When will Builder be available?", "Builder is an upcoming convenience layer. We will publish availability and pricing when the recurring tooling and support commitments are ready."],
];

export default function PricingPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="site-container price-intro">
          <SectionLabel>Pricing</SectionLabel>
          <h1>Start free. Pay for the easier path.</h1>
          <p className="page-hero-copy">OPTN&apos;s core tooling is open and self-managed. Paid options make setup, configuration, integration and ongoing use easier without requiring OPTN to operate your financial authority.</p>
          <div className="hero-actions"><ButtonLink href="/developers">Explore free tools</ButtonLink><ButtonLink href="/#contact" variant="secondary">Talk to OPTN</ButtonLink></div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Choose your path</SectionLabel>
          <h2>Open tools, an upcoming Builder, or custom support.</h2>
          <div className="pricing-tier-grid">
            {plans.map((plan) => (
              <div className="pricing-tier" key={plan.title}>
                <span className="status-pill">{plan.status}</span>
                <h3>{plan.title}</h3>
                <strong className="offer-price">{plan.price}</strong>
                <p>{plan.body}</p>
                <ul className="check-list">{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                <ArrowLink href={plan.href}>{plan.label}</ArrowLink>
              </div>
            ))}
          </div>
          <div className="custom-pricing-band">
            <div><SectionLabel>Custom</SectionLabel><h3>Need a production workflow or deeper support?</h3><p>Scope engineering, covenant design, integration, adversarial testing, migration and deployment support with OPTN.</p></div>
            <ButtonLink href="/#contact">Talk to OPTN</ButtonLink>
          </div>
          <p className="fine-print">Builder is not yet generally available and has no public price. Additional integration, audit, compliance and specialized engineering work may require separate scope and pricing.</p>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>What support can mean</SectionLabel>
          <h2>Get less wiring and better support.</h2>
          <div className="three-columns pricing-value-grid">
            <div className="column-item"><h3>Configure</h3><p>Guided policy and configuration helpers make the open tools easier to apply.</p></div>
            <div className="column-item"><h3>Validate</h3><p>Recipes and local workflows help teams test integration points before release.</p></div>
            <div className="column-item"><h3>Maintain</h3><p>Updates, migration guidance and bounded support reduce ongoing maintenance work.</p></div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>From open tools to supported implementation</SectionLabel>
          <h2>Choose, configure, build.</h2>
          <FlowSteps steps={steps} className="pricing-steps" />
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Common questions</SectionLabel>
          <h2>Clear boundaries matter.</h2>
          <div className="faq-grid">
            {questions.map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}</summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <FinalCTA title="Have a workflow in mind?" body="Tell us what you need to control." />
    </div>
  );
}
