import {
  ArrowLink,
  ButtonLink,
  FinalCTA,
  Icon,
  SectionLabel,
} from "../components/SitePrimitives";
import ServiceStatusBlock from "../components/ServiceStatusBlock";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Bitcoin Cash Infrastructure | Electrum, Indexing & Metadata",
  description:
    "OPTN operates BCH network, indexing, token-data, and metadata services used by wallets and applications, including Electrum, Chaingraph, BCMR, and TokenIndexer infrastructure.",
  path: "/infrastructure",
});

const services = [
  ["wallet", "Connectivity", "Wallet connectivity and transaction access through Electrum endpoints."],
  ["route", "Chain data", "Query BCH chain data for product features and operational workflows."],
  ["stack", "Token data", "Give users balances, holders, portfolios, and metadata through BCMR and TokenIndexer."],
  ["cube", "Content", "Deliver token media and application files through IPFS gateway and API access."],
];

export default function InfrastructurePage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="site-container page-hero-grid">
          <div>
            <SectionLabel>Infrastructure</SectionLabel>
            <h1>The BCH services your product needs to keep moving.</h1>
            <p className="page-hero-copy">Connect wallets and applications to hosted Bitcoin Cash network, indexing, token, and metadata services—without building every backend component yourself.</p>
            <div className="hero-actions"><ButtonLink href="/#contact">Request access</ButtonLink><ButtonLink href="#tokenindex" variant="secondary">View token data</ButtonLink></div>
          </div>
          <div className="architecture-graphic infrastructure-flow">
            <div className="architecture-node"><Icon name="wallet" size={25} /><div><strong>Your app / wallet</strong><small>Product requests and token views</small></div></div>
            <div className="architecture-arrow">↓</div>
              <div className="architecture-node architecture-node-middle"><Icon name="route" size={25} /><div><strong>OPTN service layer</strong><small>Access and integration support</small></div></div>
            <div className="architecture-arrow">↓</div>
            <div className="architecture-node architecture-node-dark"><Icon name="stack" size={25} /><div><strong>BCH services you can use</strong><small>Electrum · Chaingraph · BCMR · TokenIndexer</small></div></div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Public services</SectionLabel>
          <h2>Spend your time on the product—not the plumbing.</h2>
          <div className="four-columns control-grid">
            {services.map(([icon, title, body]) => <div className="column-item" key={title}><span className="icon-circle"><Icon name={icon} /></span><h3>{title}</h3><p>{body}</p></div>)}
          </div>
        </div>
      </section>

      <section id="tokenindex" className="site-section">
        <div className="site-container boundary">
          <div><SectionLabel>TokenIndexer</SectionLabel><h2>Make CashTokens easier to show and use.</h2><p className="section-intro">TokenIndexer turns on-chain token activity into app-ready balances, holder data, metadata, and portfolio views.</p><div className="hero-actions"><ButtonLink href="/#contact">Ask about token data access</ButtonLink><ArrowLink href="/bcmr-token-metadata">Explore BCMR</ArrowLink></div></div>
          <div className="simple-list"><div><strong>App-ready token data</strong><p>Give users clearer balances, portfolios, and token details.</p></div><div><strong>Built for integration</strong><p>A service surface for apps, mobile clients, and backend systems.</p></div><div><strong>Choose your operating model</strong><p>Run the stack yourself where supported, or ask about service access for a specific product.</p></div></div>
        </div>
      </section>

      <ServiceStatusBlock endpoint="/api/service-status?scope=public-infra" sectionId="public-service-status" title="Public service status" description="Check the health of OPTN&apos;s publicly exposed Bitcoin Cash services." />
      <FinalCTA title="Need the BCH backend without all the overhead?" body="Tell us what your product needs and we’ll point you to the right services." label="Request access" />
    </div>
  );
}
