import {
  ArrowLink,
  ArchitectureGraphic,
  ButtonLink,
  FinalCTA,
  Icon,
  SectionLabel,
} from "../components/SitePrimitives";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Financial Coordination & Programmable Fund Control for Bitcoin Cash | OPTN Labs",
  description:
    "Learn how OPTN separates financial coordination from covenant enforcement to define permitted recipients, amounts, next states, and recovery paths for software-operated funds.",
  path: "/platform",
});

const coordinationStages = [
  ["code", "Request", "A person, product, service, or AI agent requests an action."],
  ["route", "Coordinate", "OPTN resolves recipients, amounts, workflow paths, and recovery rules into a permitted transaction path."],
  ["shield", "Enforce", "For BCH or CashToken funds deliberately placed under covenant control, the covenant accepts only encoded outcomes."],
  ["stack", "Operate", "Monitoring, reconciliation, integrations, and workflow state can surround enforcement without OPTN taking custody."],
];

const controls = [
  ["person", "Recipients", "Who can be paid."],
  ["stack", "Amounts", "How much can move at once."],
  ["route", "Next steps", "What the workflow can do next."],
  ["shield", "Recovery", "How control returns when something goes wrong."],
];

export default function PlatformPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="site-container page-hero-grid">
          <div>
            <SectionLabel>Platform · Financial coordination</SectionLabel>
            <h1>Put clear limits around software-operated money.</h1>
            <p className="page-hero-copy">OPTN is developing a financial coordination layer for software-operated funds. Applications make requests; OPTN coordinates the permitted path; for funds deliberately placed under BCH covenant control, transaction rules enforce the encoded outcome.</p>
            <div className="hero-actions"><ButtonLink href="/#contact">Talk to OPTN</ButtonLink></div>
          </div>
          <ArchitectureGraphic />
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>How the platform fits together</SectionLabel>
          <h2>Separate the request, the policy, and the enforcement.</h2>
          <div className="four-columns control-grid">
            {coordinationStages.map(([icon, title, body]) => <div className="column-item" key={title}><span className="icon-circle"><Icon name={icon} /></span><h3>{title}</h3><p>{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Policy dimensions</SectionLabel>
          <h2>Make the rules visible before money moves.</h2>
          <div className="four-columns control-grid">
            {controls.map(([icon, title, body]) => <div className="column-item" key={title}><span className="icon-circle"><Icon name={icon} /></span><h3>{title}</h3><p>{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Authorization is only part of control</SectionLabel>
          <div className="boundary">
            <div>
              <h2>Signing is not the same as permission.</h2>
              <p className="section-intro">A wallet, signer, or MPC can approve a transaction. OPTN focuses on the next question: does the transaction itself match the rules the business set? That extra boundary is designed to reduce the damage from compromised keys or unexpected application behavior.</p>
              <ArrowLink href="/engineering">See the engineering path</ArrowLink>
            </div>
            <div className="comparison">
              <div className="comparison-panel"><h3>Traditional flow</h3><p>Request</p><p>↓</p><p>Authorization<br /><small>(wallet / signer / MPC)</small></p><p>↓</p><p>Transaction executes</p></div>
              <div className="comparison-panel good"><h3>With OPTN</h3><p>Request</p><p>↓</p><p>OPTN workflow</p><p>↓</p><p>BCH rules keep the outcome within bounds</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container boundary">
          <div>
            <SectionLabel>Current enforcement boundary</SectionLabel>
            <h2>Starting with BCH and CashTokens.</h2>
            <p className="section-intro">Today’s fund-level enforcement work is scoped to Bitcoin Cash and CashToken funds deliberately placed under BCH covenant control. Other chains or assets would require a separate trusted bridge, custodian, or issuer.</p>
          </div>
          <div className="boundary-list">
            <div className="boundary-item"><span className="icon-circle"><Icon name="stack" /></span><div><strong>Bitcoin Cash</strong><span>Supported</span></div></div>
            <div className="boundary-item"><span className="icon-circle"><Icon name="cube" /></span><div><strong>CashTokens</strong><span>Supported</span></div></div>
          </div>
        </div>
      </section>

      <FinalCTA title="Have a workflow that needs guardrails?" body="Tell us what the software should be allowed to do, and we’ll help map the next step." />
    </div>
  );
}
