import {
  ArrowLink,
  ButtonLink,
  EngineeringGraphic,
  FinalCTA,
  FlowSteps,
  Icon,
  SectionLabel,
} from "../components/SitePrimitives";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "OPTN Labs Engineering | Bitcoin Cash Development",
  description:
    "OPTN Labs helps teams build Bitcoin Cash wallets, CashToken applications, and controlled transaction workflows with architecture, implementation, testing, and release support.",
  path: "/engineering",
});

const areas = [
  ["wallet", "Wallet and application integration", "Connect products to BCH applications and transaction workflows."],
  ["stack", "CashTokens and BCMR", "Design token handling and metadata-aware product experiences."],
  ["code", "CashScript and covenant patterns", "Build constrained transaction paths within a defined technical scope."],
  ["gear", "Backend and testing", "Support transaction construction, indexing, test harnesses, and release review."],
];

const process = [
  { title: "Scope", body: "Define the product, constraints, and target workflow." },
  { title: "Build or review", body: "Work through architecture, implementation, or transaction design." },
  { title: "Validate", body: "Test behavior, review integration points, and prepare for release." },
];

export default function EngineeringPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="site-container page-hero-grid">
          <div>
            <SectionLabel>Engineering</SectionLabel>
            <h1>Engineering for products that move value.</h1>
            <p className="page-hero-copy">OPTN Labs helps teams build Bitcoin Cash wallets, CashToken applications, and controlled transaction workflows—with architecture, implementation, testing, and release support.</p>
            <div className="hero-actions"><ButtonLink href="/#contact">Talk to engineering</ButtonLink><ArrowLink href="/developers">Explore developer resources</ArrowLink></div>
          </div>
          <EngineeringGraphic />
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Work across the transaction stack</SectionLabel>
          <div className="technical-grid control-grid">
            {areas.map(([icon, title, body]) => <div className="column-item" key={title}><span className="icon-circle"><Icon name={icon} /></span><h3>{title}</h3><p>{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container process-grid">
          <div><SectionLabel>From technical question to tested implementation</SectionLabel><FlowSteps steps={process} /></div>
          <div><SectionLabel>Grounded in working BCH products</SectionLabel><div className="product-list proof-products">
            <div className="product-row"><span className="icon-circle"><Icon name="wallet" /></span><div><h3>OPTN Wallet <span className="status-inline">Shipped</span></h3><p>BCH and CashTokens wallet</p><ArrowLink href="/wallet">Explore Wallet</ArrowLink></div></div>
            <div className="product-row"><span className="icon-circle"><Icon name="stack" /></span><div><h3>FundMe.cash <span className="status-inline">Shipped</span></h3><p>Covenant-based crowdfunding</p></div></div>
            <div className="product-row"><span className="icon-circle"><Icon name="route" /></span><div><h3>Covenant coordination <span className="status-inline">Built and tested locally · In development</span></h3><p>Research for controlled payment workflows</p></div></div>
          </div></div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container resource-strip">
          <div><SectionLabel>Technical resources</SectionLabel><div className="resource-links"><ArrowLink href="/developers">Developers</ArrowLink><ArrowLink href="/cashtokens">CashTokens</ArrowLink><ArrowLink href="/covenants-on-bitcoin-cash">Covenants</ArrowLink><ArrowLink href="/bcmr-token-metadata">BCMR</ArrowLink><ArrowLink href="/blog">Blog</ArrowLink><ArrowLink href="https://github.com/OPTNLabs/OPTNWallet">GitHub</ArrowLink></div></div>
          <div className="boundary-note"><SectionLabel>Current technical boundary</SectionLabel><p>Fund-level enforcement currently applies to BCH and CashToken funds placed under BCH covenant control.</p><ArrowLink href="/platform">Read the Platform boundary</ArrowLink></div>
        </div>
      </section>

      <FinalCTA title="Have a technical question or use case?" body="Let’s talk about how OPTN can help." />
    </div>
  );
}
