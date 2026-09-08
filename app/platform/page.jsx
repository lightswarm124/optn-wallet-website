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
  title: "Programmable Fund Control for Bitcoin Cash | OPTN Labs",
  description:
    "Learn how OPTN uses Bitcoin Cash transaction rules to define permitted recipients, amounts, next states, and recovery paths for software-operated funds.",
  path: "/platform",
});

const controls = [
  ["person", "Recipients", "Where funds may go."],
  ["stack", "Amounts", "Per-payment and cumulative limits."],
  ["route", "Next states", "What happens after a payment."],
  ["shield", "Recovery", "How control returns to the owner."],
];

export default function PlatformPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="site-container page-hero-grid">
          <div>
            <SectionLabel>Platform</SectionLabel>
            <h1>A control layer for software-operated funds.</h1>
            <p className="page-hero-copy">OPTN helps companies enforce spending rules around software-operated funds using Bitcoin Cash transaction rules. Applications can request actions. Transaction rules determine what the funds can actually do.</p>
            <div className="hero-actions"><ButtonLink href="/#contact">Talk to OPTN</ButtonLink></div>
          </div>
          <ArchitectureGraphic />
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>What OPTN controls</SectionLabel>
          <h2>Define what funds can do.</h2>
          <div className="four-columns control-grid">
            {controls.map(([icon, title, body]) => <div className="column-item" key={title}><span className="icon-circle"><Icon name={icon} /></span><h3>{title}</h3><p>{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Authorization vs. permitted outcomes</SectionLabel>
          <div className="boundary">
            <div>
              <h2>A different layer of control.</h2>
              <p className="section-intro">A wallet, signer, or MPC decides whether a transaction is authorized. OPTN helps define whether the resulting transaction is permitted, even if the signer is compromised or an application behaves unexpectedly.</p>
              <ArrowLink href="/engineering">Learn more about the difference</ArrowLink>
            </div>
            <div className="comparison">
              <div className="comparison-panel"><h3>Traditional flow</h3><p>Request</p><p>↓</p><p>Authorization<br /><small>(wallet / signer / MPC)</small></p><p>↓</p><p>Transaction executes</p></div>
              <div className="comparison-panel good"><h3>With OPTN</h3><p>Request</p><p>↓</p><p>OPTN coordination</p><p>↓</p><p>BCH covenant rules determine outcome</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container boundary">
          <div>
            <SectionLabel>Current enforcement boundary</SectionLabel>
            <h2>BCH and CashToken funds under covenant control.</h2>
            <p className="section-intro">Fund-level enforcement currently applies to Bitcoin Cash and CashToken funds placed under BCH covenant control. External-chain assets are outside the current enforcement boundary unless represented through a separately trusted bridge, custodian, or issuer layer.</p>
          </div>
          <div className="boundary-list">
            <div className="boundary-item"><span className="icon-circle"><Icon name="stack" /></span><div><strong>Bitcoin Cash</strong><span>Supported</span></div></div>
            <div className="boundary-item"><span className="icon-circle"><Icon name="cube" /></span><div><strong>CashTokens</strong><span>Supported</span></div></div>
          </div>
        </div>
      </section>

      <FinalCTA title="Have a technical question or use case?" body="Let’s talk about how OPTN can help." />
    </div>
  );
}
