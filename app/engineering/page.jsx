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
  ["wallet", "Wallet and application integration", "Connect your product to BCH apps, wallets, and transaction flows."],
  ["stack", "CashTokens and BCMR", "Make token balances, metadata, and user experiences work together."],
  ["code", "CashScript and covenant patterns", "Design transaction rules for workflows with real constraints."],
  ["gear", "Backend and testing", "Build the services, test harnesses, and release checks that keep things moving."],
];

const process = [
  { title: "Plan", body: "Define the product, constraints, and outcome you want to reach." },
  { title: "Build or review", body: "Work through architecture, implementation, or transaction design." },
  { title: "Test and prepare", body: "Check behavior, review integration points, and get ready for release." },
];

export default function EngineeringPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="site-container page-hero-grid">
          <div>
            <SectionLabel>Engineering</SectionLabel>
            <h1>Turn a BCH product idea into something people can use.</h1>
            <p className="page-hero-copy">We built OPTN Wallet and the supporting BCH stack ourselves. Now we help teams apply those lessons to wallets, CashToken apps, and controlled transaction workflows of their own.</p>
            <div className="hero-actions"><ButtonLink href="/#contact">Talk to engineering</ButtonLink><ArrowLink href="/developers">Explore developer resources</ArrowLink></div>
          </div>
          <EngineeringGraphic />
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Apply the stack</SectionLabel>
          <h2>The same expertise, applied to your product.</h2>
          <div className="technical-grid control-grid">
            {areas.map(([icon, title, body]) => <div className="column-item" key={title}><span className="icon-circle"><Icon name={icon} /></span><h3>{title}</h3><p>{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container process-grid">
          <div><SectionLabel>From product idea to launch</SectionLabel><FlowSteps steps={process} /></div>
          <div><SectionLabel>Proof behind the work</SectionLabel><div className="product-list proof-products">
            <div className="product-row"><span className="icon-circle"><Icon name="wallet" /></span><div><h3>OPTN Wallet <span className="status-inline">Shipped</span></h3><p>BCH and CashTokens wallet</p><ArrowLink href="/wallet">Explore Wallet</ArrowLink></div></div>
            <div className="product-row"><span className="icon-circle"><Icon name="stack" /></span><div><h3>FundMe.cash <span className="status-inline">Shipped</span></h3><p>Covenant-based crowdfunding</p></div></div>
            <div className="product-row"><span className="icon-circle"><Icon name="route" /></span><div><h3>Covenant coordination <span className="status-inline">Built and tested locally · In development</span></h3><p>Working research for controlled payment workflows</p></div></div>
          </div></div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container resource-strip">
          <div><SectionLabel>Go deeper</SectionLabel><div className="resource-links"><ArrowLink href="/developers">Developers</ArrowLink><ArrowLink href="/cashtokens">CashTokens</ArrowLink><ArrowLink href="/covenants-on-bitcoin-cash">Covenants</ArrowLink><ArrowLink href="/bcmr-token-metadata">BCMR</ArrowLink><ArrowLink href="/blog">Blog</ArrowLink><ArrowLink href="https://github.com/OPTNLabs/OPTNWallet">GitHub</ArrowLink></div></div>
          <div className="boundary-note"><SectionLabel>What we currently support</SectionLabel><p>Current fund-level enforcement work is scoped to BCH and CashToken funds deliberately placed under BCH covenant control.</p><ArrowLink href="/platform">See the current platform scope</ArrowLink></div>
        </div>
      </section>

      <FinalCTA title="Let’s make the next step clearer." body="Tell us what you’re building, what’s blocking progress, and when you want to ship." />
    </div>
  );
}
