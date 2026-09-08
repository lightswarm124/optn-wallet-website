import {
  ArrowLink,
  ButtonLink,
  FinalCTA,
  FlowSteps,
  Icon,
  SectionLabel,
} from "../components/SitePrimitives";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Controlled BCH Workflows for Software, AI & Treasury | OPTN Labs",
  description:
    "Use Bitcoin Cash transaction rules to build controlled payment workflows for software, AI agents, treasury operations, and BCH applications.",
  path: "/solutions",
});

const useCases = [
  ["brain", "AI payments", "Allow agents or automated services to request payments while restricting recipients, amounts, and remaining authority.", "Explore AI payments"],
  ["building", "Treasury & business workflows", "Coordinate payouts, delegated budgets, and recovery paths with enforceable rules.", "Explore treasury workflows"],
  ["cube", "BCH applications", "Build CashToken and covenant-based products that require constrained transaction behavior.", "Explore BCH applications"],
];

const deploymentSteps = [
  { title: "Define", body: "Identify the workflow and required rules." },
  { title: "Design", body: "Create the policy and transaction logic." },
  { title: "Integrate & test", body: "Build, test, and validate with your team." },
  { title: "Deploy", body: "Deploy the workflow and transition to ongoing support if needed." },
];

export default function SolutionsPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="site-container">
          <div className="solution-hero-copy">
            <SectionLabel>Solutions</SectionLabel>
            <h1>Deploy controlled financial workflows.</h1>
            <p className="page-hero-copy">Use OPTN to put enforceable rules around money moved by people and software—from AI payments to treasury operations—using Bitcoin Cash transaction rules.</p>
            <div className="hero-actions"><ButtonLink href="/#contact">Talk to OPTN</ButtonLink></div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Use cases</SectionLabel>
          <h2>Start where you have real risk.</h2>
          <div className="three-columns control-grid">
            {useCases.map(([icon, title, body, link]) => <div className="column-item" key={title}><span className="icon-circle"><Icon name={icon} /></span><h3>{title}</h3><p>{body}</p><ArrowLink href="/#contact">{link}</ArrowLink></div>)}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Deployment path</SectionLabel>
          <h2>From a real use case to deployment.</h2>
          <FlowSteps steps={deploymentSteps} className="pricing-steps" />
          <div className="custom-offer-band solution-offer-band">
            <div><SectionLabel>Deployment options</SectionLabel><strong>Start with open tools, or bring us a workflow.</strong><p>Use the self-managed path for exploration. Contact OPTN for scoped engineering, integration, testing and deployment support.</p></div>
            <div className="solution-offer-links"><ArrowLink href="/developers">Explore developer tools</ArrowLink><ArrowLink href="/pricing">View pricing</ArrowLink><ButtonLink href="/#contact">Talk to OPTN</ButtonLink></div>
          </div>
        </div>
      </section>

      <FinalCTA title="Have a use case in mind?" body="Let’s talk about how to deploy it." />
    </div>
  );
}
