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
  title: "Programmable Payments for Bitcoin Cash | OPTN Labs",
  description:
    "OPTN is developing BCH-native payment infrastructure for software and AI agents, with transaction rules for amounts, destinations, successor states, and recovery.",
  path: "/platform",
});

const coordinationStages = [
  ["code", "Request", "A person, application, service, or AI agent initiates a payment or financial action."],
  ["route", "Coordinate", "OPTN translates the request into the BCH transaction and policy path required to execute it."],
  ["shield", "Enforce", "For BCH or CashToken funds placed under covenant control, BCH covenant rules validate the transaction against defined conditions."],
  ["stack", "Operate", "Monitoring, reconciliation, integrations, and workflow state support ongoing operation while customers retain custody."],
];

const controls = [
  ["person", "Recipients", "Who can be paid."],
  ["stack", "Amounts", "How much can move at once."],
  ["route", "Next steps", "What the workflow can do next."],
  ["shield", "Recovery", "How control can return to a designated owner or recovery path."],
];

export default function PlatformPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="site-container page-hero-grid">
          <div>
            <SectionLabel>Platform · Programmable payments · In development</SectionLabel>
            <h1>Payment infrastructure for software and AI agents.</h1>
            <p className="page-hero-copy">OPTN is developing BCH-native payment infrastructure for software and AI agents. Applications can request payments while OPTN coordinates transaction composition and financial rules. Where funds are placed under BCH covenant control, transaction rules validate the spending path.</p>
            <div className="hero-actions"><ButtonLink href="/#contact">Talk to OPTN</ButtonLink></div>
          </div>
          <ArchitectureGraphic />
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>How the platform fits together</SectionLabel>
          <h2>From payment request to an enforceable transaction path.</h2>
          <div className="four-columns control-grid">
            {coordinationStages.map(([icon, title, body]) => <div className="column-item" key={title}><span className="icon-circle"><Icon name={icon} /></span><h3>{title}</h3><p>{body}</p></div>)}
          </div>
          <p className="section-intro platform-vision"><strong>Long-term direction:</strong> let people, applications, and AI use money programmatically, with transaction rules that reflect the financial policy of each workflow.</p>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Payment and transaction rules</SectionLabel>
          <h2>Define how software can use money.</h2>
          <div className="four-columns control-grid">
            {controls.map(([icon, title, body]) => <div className="column-item" key={title}><span className="icon-circle"><Icon name={icon} /></span><h3>{title}</h3><p>{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Programmable authority</SectionLabel>
          <div className="boundary">
            <div>
              <h2>Define what a transaction is allowed to do.</h2>
              <p className="section-intro">A signature establishes which key authorized a transaction. Programmable rules add a financial policy layer: how much moves, where it goes, what state continues, and how funds may be recovered. OPTN is developing this layer for BCH workflows where software needs financial authority.</p>
              <ArrowLink href="/engineering">See the engineering path</ArrowLink>
            </div>
            <div className="comparison">
              <div className="comparison-panel"><h3>Authorization</h3><p>Request</p><p>↓</p><p>Authorized key approves<br /><small>(wallet / signer / MPC)</small></p><p>↓</p><p>Transaction executes</p></div>
              <div className="comparison-panel good"><h3>Programmable authority</h3><p>Request</p><p>↓</p><p>Transaction policy</p><p>↓</p><p>BCH rules validate defined conditions</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container boundary">
          <div>
            <SectionLabel>Built on Bitcoin Cash</SectionLabel>
            <h2>Starting with BCH and CashTokens.</h2>
            <p className="section-intro">OPTN’s programmable-finance work uses BCH and CashTokens, with covenant rules applying to funds deliberately placed under BCH covenant control. Other chains or assets require a separate trusted bridge, custodian, or issuer.</p>
          </div>
          <div className="boundary-list">
            <div className="boundary-item"><span className="icon-circle"><Icon name="stack" /></span><div><strong>Bitcoin Cash</strong><span>Supported</span></div></div>
            <div className="boundary-item"><span className="icon-circle"><Icon name="cube" /></span><div><strong>CashTokens</strong><span>Supported</span></div></div>
          </div>
        </div>
      </section>

      <FinalCTA title="Planning an agent-payment or programmable-finance workflow?" body="Tell us about the application, payment flow, and transaction outcomes you need to define." />
    </div>
  );
}
