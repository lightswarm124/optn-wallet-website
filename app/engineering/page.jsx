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
  title: "Bitcoin Cash Product Engineering | OPTN Labs",
  description:
    "Product engineering from the team behind OPTN Wallet: BCH wallet and application integration, CashTokens, transaction design, testing, and release.",
  path: "/engineering",
});

const areas = [
  ["wallet", "Wallet and application integration", "Connect your product to BCH apps, wallets, and transaction flows."],
  ["stack", "CashTokens and BCMR", "Make token balances, metadata, and user experiences work together."],
  ["code", "CashScript and covenant patterns", "Design transaction rules for workflows with real constraints."],
  ["gear", "Backend, testing, and deployment", "Build services, adversarial test harnesses, and release checks that keep a workflow ready for launch."],
];

const process = [
  { title: "Plan", body: "Define the workflow, threat model, constraints, and outcome you want to reach." },
  { title: "Build or review", body: "Work through architecture, implementation, or transaction design." },
  { title: "Test and prepare", body: "Test failure paths, review integration points, and get ready for release." },
];

export default function EngineeringPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="site-container page-hero-grid">
          <div>
            <SectionLabel>Engineering</SectionLabel>
            <h1>Product engineering for Bitcoin Cash applications.</h1>
            <p className="page-hero-copy">The OPTN team builds across wallets, CashTokens, infrastructure, and covenant-based transaction flows. We apply that product experience to teams moving from architecture and transaction design through integration, testing, and release.</p>
            <div className="hero-actions"><ButtonLink href="/#contact">Discuss a project</ButtonLink><ArrowLink href="/developers">Explore developer resources</ArrowLink></div>
          </div>
          <EngineeringGraphic />
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Apply the stack</SectionLabel>
          <h2>Apply OPTN&apos;s product experience to your build.</h2>
          <div className="technical-grid control-grid">
            {areas.map(([icon, title, body]) => <div className="column-item" key={title}><span className="icon-circle"><Icon name={icon} /></span><h3>{title}</h3><p>{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container process-grid">
          <div><SectionLabel>From product idea to launch</SectionLabel><FlowSteps steps={process} /></div>
          <div><SectionLabel>Built from working products</SectionLabel><div className="product-list proof-products">
            <div className="product-row"><span className="icon-circle"><Icon name="wallet" /></span><div><h3>OPTN Wallet <span className="status-inline">Shipped</span></h3><p>BCH and CashTokens wallet</p><ArrowLink href="/wallet">Explore Wallet</ArrowLink></div></div>
            <div className="product-row"><span className="icon-circle"><Icon name="stack" /></span><div><h3>FundMe.cash <span className="status-inline">Shipped</span></h3><p>Live covenant-based campaign flows for contributions, claims, and refunds</p></div></div>
            <div className="product-row"><span className="icon-circle"><Icon name="route" /></span><div><h3>Programmable payments <span className="status-inline">In development</span></h3><p>Agent payments, transaction composition, and covenant-based workflows</p></div></div>
          </div></div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container resource-strip">
          <div><SectionLabel>Go deeper</SectionLabel><div className="resource-links"><ArrowLink href="/developers">Developers</ArrowLink><ArrowLink href="/cashtokens">CashTokens</ArrowLink><ArrowLink href="/covenants-on-bitcoin-cash">Covenants</ArrowLink><ArrowLink href="/bcmr-token-metadata">BCMR</ArrowLink><ArrowLink href="/blog">Blog</ArrowLink><ArrowLink href="https://github.com/OPTNLabs/OPTNWallet">GitHub</ArrowLink></div></div>
          <div className="boundary-note"><SectionLabel>Current platform scope</SectionLabel><p>Covenant-based enforcement is in development for BCH and CashToken funds placed under covenant control.</p><ArrowLink href="/platform">Explore programmable payments</ArrowLink></div>
        </div>
      </section>

      <FinalCTA title="Build with the team behind OPTN Wallet." body="Tell us what you are building, where the technical work gets difficult, and the outcome you need." />
    </div>
  );
}
