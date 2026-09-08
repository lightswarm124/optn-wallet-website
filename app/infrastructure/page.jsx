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
  ["wallet", "Connectivity", "Electrum endpoints and transaction access for wallets and applications."],
  ["route", "Chain data", "Chaingraph access for blockchain queries and application data."],
  ["stack", "Token data", "BCMR metadata and TokenIndexer data for balances, holders, and portfolios."],
  ["cube", "Content", "IPFS gateway and API access for applications that need file and media delivery."],
];

export default function InfrastructurePage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="site-container page-hero-grid">
          <div>
            <SectionLabel>Infrastructure</SectionLabel>
            <h1>Bitcoin Cash infrastructure for wallets and applications.</h1>
            <p className="page-hero-copy">OPTN operates BCH network, indexing, token-data, and metadata services used by wallets and applications, including Electrum, Chaingraph, BCMR, and TokenIndexer infrastructure.</p>
            <div className="hero-actions"><ButtonLink href="/#contact">Request access</ButtonLink><ButtonLink href="#tokenindex" variant="secondary">View token data</ButtonLink></div>
          </div>
          <div className="architecture-graphic infrastructure-flow">
            <div className="architecture-node"><Icon name="wallet" size={25} /><div><strong>App / wallet</strong><small>Product requests and token views</small></div></div>
            <div className="architecture-arrow">↓</div>
              <div className="architecture-node architecture-node-middle"><Icon name="route" size={25} /><div><strong>OPTN service layer</strong><small>Public access and integration support</small></div></div>
            <div className="architecture-arrow">↓</div>
            <div className="architecture-node architecture-node-dark"><Icon name="stack" size={25} /><div><strong>Public BCH services</strong><small>Electrum · Chaingraph · BCMR · TokenIndexer</small></div></div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Public services</SectionLabel>
          <h2>Access the pieces your product needs.</h2>
          <div className="four-columns control-grid">
            {services.map(([icon, title, body]) => <div className="column-item" key={title}><span className="icon-circle"><Icon name={icon} /></span><h3>{title}</h3><p>{body}</p></div>)}
          </div>
        </div>
      </section>

      <section id="tokenindex" className="site-section">
        <div className="site-container boundary">
          <div><SectionLabel>TokenIndexer</SectionLabel><h2>CashTokens indexing and API.</h2><p className="section-intro">TokenIndexer associates CashTokens with addresses so apps can show balances, holder data, metadata, and portfolios.</p><div className="hero-actions"><ButtonLink href="/#contact">Ask about token data access</ButtonLink><ArrowLink href="/bcmr-token-metadata">Explore BCMR</ArrowLink></div></div>
          <div className="simple-list"><div><strong>Token data</strong><p>Address portfolios, holder data, summaries, and metadata.</p></div><div><strong>API-first</strong><p>A service surface for apps, mobile clients, and backend systems.</p></div><div><strong>Access options</strong><p>Run the stack yourself where supported, or ask about service access for a specific product.</p></div></div>
        </div>
      </section>

      <ServiceStatusBlock endpoint="/api/service-status?scope=public-infra" sectionId="public-service-status" title="Public service status" description="Status for public infrastructure endpoints currently exposed by OPTN Labs." />
      <FinalCTA title="Need BCH backend access?" body="Tell us what you are building and what services you need." label="Request access" />
    </div>
  );
}
