import {
  ArrowLink,
  ButtonLink,
  FinalCTA,
  Icon,
  SectionLabel,
} from "../components/SitePrimitives";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Bitcoin Cash Payment Solutions for AI, Treasury & Apps | OPTN Labs",
  description:
    "Explore AI-agent payments, treasury workflows, and BCH applications. OPTN is developing BCH-native payment infrastructure, with agent payments as its initial focus.",
  path: "/solutions",
});

const useCases = [
  ["brain", "AI payments", "AI agents can pay APIs, purchase services, receive funds, and take part in automated workflows. OPTN's initial product focus is BCH-native payment infrastructure for these interactions.", "Discuss agent payments", "Initial focus · In development"],
    ["building", "Treasury & business workflows", "Define repeatable payouts, grants, and delegated spending around clear transaction rules, workflow state, and recovery paths.", "Discuss treasury workflows"],
  ["cube", "BCH applications", "Bring CashTokens, wallet connectivity, infrastructure, and transaction tooling into a product experience without exposing every protocol detail to the end user.", "Discuss BCH applications"],
];

export default function SolutionsPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="site-container">
          <div className="solution-hero-copy">
            <SectionLabel>Solutions</SectionLabel>
            <h1>Payments and financial workflows for autonomous software.</h1>
            <p className="page-hero-copy">OPTN is developing BCH-native payment infrastructure, beginning with AI-agent payments. We also work with teams on scoped engineering for treasury workflows and Bitcoin Cash applications.</p>
            <div className="hero-actions"><ButtonLink href="/#contact">Discuss your workflow</ButtonLink></div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Focus areas</SectionLabel>
          <h2>Start with the financial workflow.</h2>
          <div className="three-columns control-grid">
            {useCases.map(([icon, title, body, link, focus]) => <div className="column-item" key={title}><span className="icon-circle"><Icon name={icon} /></span>{focus ? <span className="status-pill">{focus}</span> : null}<h3>{title}</h3><p>{body}</p><ArrowLink href="/#contact">{link}</ArrowLink></div>)}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <div className="custom-offer-band solution-offer-band">
            <div><SectionLabel>Ways to work with us</SectionLabel><strong>Start with public tools, or build with OPTN.</strong><p>Use the developer stack independently, or engage OPTN for workflow design, integration, testing, and delivery.</p></div>
            <div className="solution-offer-links"><ArrowLink href="/developers">Explore developer tools</ArrowLink><ArrowLink href="/pricing">View pricing</ArrowLink><ButtonLink href="/#contact">Talk to OPTN</ButtonLink></div>
          </div>
        </div>
      </section>

      <FinalCTA title="Planning an agent-payment workflow?" body="Talk with OPTN about payment composition, BCH integration, and the transaction rules your product needs." />
    </div>
  );
}
