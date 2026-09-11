import {
  ArrowLink,
  ButtonLink,
  FinalCTA,
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
  ["brain", "AI payments", "Software needs to make payments without unrestricted spending authority. Define permitted recipients, bounded amounts, and recovery paths before money moves.", "Discuss AI payments", "Initial focus"],
  ["building", "Treasury & business workflows", "Operations need repeatable payouts without giving every signer unrestricted discretion. Define approval, amount, continuation, and recovery rules for a more bounded workflow.", "Discuss treasury workflows"],
  ["cube", "BCH applications", "Applications need advanced BCH capabilities without making every user manage transaction complexity. Turn BCH, CashTokens, and covenant patterns into product experiences people can actually use.", "Discuss BCH applications"],
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
            {useCases.map(([icon, title, body, link, focus]) => <div className="column-item" key={title}><span className="icon-circle"><Icon name={icon} /></span>{focus ? <span className="status-pill">{focus}</span> : null}<h3>{title}</h3><p>{body}</p><ArrowLink href="/#contact">{link}</ArrowLink></div>)}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <div className="custom-offer-band solution-offer-band">
            <div><SectionLabel>Ways to work with us</SectionLabel><strong>Start with public tools, or work with OPTN to ship.</strong><p>Explore on your own, or bring us in when the workflow needs deeper design, integration, testing, or support.</p></div>
            <div className="solution-offer-links"><ArrowLink href="/developers">Explore developer tools</ArrowLink><ArrowLink href="/pricing">View pricing</ArrowLink><ButtonLink href="/#contact">Talk to OPTN</ButtonLink></div>
          </div>
        </div>
      </section>

      <FinalCTA title="Have a workflow worth building?" body="Tell us what needs to move, who needs control, and where you want help." />
    </div>
  );
}
