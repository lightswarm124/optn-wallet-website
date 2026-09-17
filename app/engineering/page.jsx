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
  title: "Bitcoin Cash Engineering | OPTN Labs",
  description:
    "Work with OPTN on Bitcoin Cash products, integrations, CashTokens, transaction workflows, and controlled-payment pilot projects.",
  path: "/engineering",
});

const areas = [
  ["wallet", "Wallet and app integration", "Connect BCH products, wallets, applications, and user-facing payment flows."],
  ["cube", "CashTokens and metadata", "Build token-aware experiences with useful asset context and reliable data paths."],
  ["code", "Transaction and covenant design", "Shape BCH transaction patterns and CashScript workflows around real product requirements."],
  ["gear", "Testing and release preparation", "Exercise failure paths, review integration points, and prepare the product for release."],
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
            <h1>Build on Bitcoin Cash with OPTN.</h1>
            <p className="page-hero-copy">Shape, implement, test, and ship BCH products and transaction workflows with a team that has built them firsthand.</p>
            <div className="hero-actions"><ButtonLink href="/#contact">Contact us</ButtonLink><ArrowLink href="/ecosystem">Explore the ecosystem</ArrowLink></div>
          </div>
          <EngineeringGraphic />
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Capabilities</SectionLabel>
          <h2>Bitcoin Cash product engineering</h2>
          <div className="technical-grid control-grid">
            {areas.map(([icon, title, body]) => <div className="column-item" key={title}><span className="icon-circle"><Icon name={icon} /></span><h3>{title}</h3><p>{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container process-grid">
          <div><SectionLabel>Delivery process</SectionLabel><FlowSteps steps={process} /></div>
          <div><SectionLabel>Experience</SectionLabel><div className="product-list proof-products">
            <div className="product-row"><span className="icon-circle"><Icon name="wallet" /></span><div><h3>OPTN Wallet</h3><p>Released self-custody wallet for BCH, CashTokens, and connected apps</p><ArrowLink href="/wallet">Explore Wallet</ArrowLink></div></div>
            <div className="product-row"><span className="icon-circle"><Icon name="stack" /></span><div><h3>Covenant workflows</h3><p>Experience from FundMe.cash contribution, claim, and refund flows</p></div></div>
            <div className="product-row"><span className="icon-circle"><Icon name="route" /></span><div><h3>Controlled-payment pilots</h3><p>WIP pilot exploration for software and AI payment workflows</p><ArrowLink href="/platform">Explore pilot projects</ArrowLink></div></div>
          </div></div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container resource-strip">
          <div><SectionLabel>Go deeper</SectionLabel><div className="resource-links"><ArrowLink href="/ecosystem">Ecosystem</ArrowLink><ArrowLink href="/cashtokens">CashTokens</ArrowLink><ArrowLink href="/covenants-on-bitcoin-cash">Covenants</ArrowLink><ArrowLink href="/bcmr-token-metadata">BCMR</ArrowLink><ArrowLink href="/blog">Blog</ArrowLink><ArrowLink href="https://github.com/OPTNLabs/OPTNWallet">GitHub</ArrowLink></div></div>
          <div className="boundary-note"><SectionLabel>Pilot projects</SectionLabel><p>Explore bounded payment workflows for software and AI agents using BCH and CashTokens.</p><ArrowLink href="/platform">Explore pilot projects</ArrowLink></div>
        </div>
      </section>

      <FinalCTA title="Build your next BCH product with OPTN." body="Tell us what you are creating, where the hard integration points are, and what a successful release should deliver." />
    </div>
  );
}
