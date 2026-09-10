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
  ["brain", "AI payments", "Give automated services room to act while setting clear limits on where and how much they can spend.", "Discuss AI payments"],
  ["building", "Treasury & business workflows", "Create repeatable payouts and delegated budgets with clear approval and recovery paths.", "Discuss treasury workflows"],
  ["cube", "BCH applications", "Turn BCH, CashTokens, and covenant capabilities into products people can actually use.", "Discuss BCH applications"],
];

const deploymentSteps = [
  { title: "Define the outcome", body: "Identify what needs to happen and where control matters." },
  { title: "Design the rules", body: "Turn the workflow into a clear policy and transaction plan." },
  { title: "Build and test", body: "Integrate the pieces and validate them with your team." },
  { title: "Launch", body: "Move toward release with a support plan that fits the workflow." },
];

export default function SolutionsPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="site-container">
          <div className="solution-hero-copy">
            <SectionLabel>Solutions</SectionLabel>
            <h1>Make money-moving workflows easier to control.</h1>
            <p className="page-hero-copy">OPTN helps teams design and test Bitcoin Cash workflows for AI payments, treasury operations, and applications—so the rules are clear before money moves.</p>
            <div className="hero-actions"><ButtonLink href="/#contact">Discuss your workflow</ButtonLink></div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Use cases</SectionLabel>
          <h2>Start with the workflow that matters most.</h2>
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
            <div><SectionLabel>Ways to work with us</SectionLabel><strong>Start with public tools, or work with OPTN to ship.</strong><p>Explore on your own, or bring us in for the implementation, integration, testing, and support plan your workflow needs.</p></div>
            <div className="solution-offer-links"><ArrowLink href="/developers">Explore developer tools</ArrowLink><ArrowLink href="/pricing">View pricing</ArrowLink><ButtonLink href="/#contact">Talk to OPTN</ButtonLink></div>
          </div>
        </div>
      </section>

      <FinalCTA title="Have a workflow worth building?" body="Tell us what needs to move, who needs control, and where you want help." />
    </div>
  );
}
