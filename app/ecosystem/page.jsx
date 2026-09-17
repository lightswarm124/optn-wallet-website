import {
  ArrowLink,
  ButtonLink,
  FinalCTA,
  Icon,
  SectionLabel,
} from "../components/SitePrimitives";
import InfrastructureServiceMap from "../components/InfrastructureServiceMap";
import ServiceStatusBlock from "../components/ServiceStatusBlock";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Bitcoin Cash Ecosystem | OPTN Labs",
  description:
    "Explore OPTN Wallet, CashTokens, covenants, BCMR, open-source code, and Bitcoin Cash infrastructure in one ecosystem.",
  path: "/ecosystem",
});

const resources = [
  ["wallet", "Wallet and app connections", "Use OPTN Wallet and WalletConnect as the product and application layer.", "/wallet"],
  ["cube", "CashTokens and metadata", "Explore fungible tokens, NFTs, BCMR, and user-facing asset context.", "/cashtokens"],
  ["shield", "Covenants and contracts", "Learn how BCH transaction rules support richer financial workflows.", "/covenants-on-bitcoin-cash"],
  ["stack", "Infrastructure and data", "Use connectivity, indexing, metadata, and public BCH services.", "#infrastructure"],
];

export default function EcosystemPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="site-container page-hero-grid">
          <div>
            <SectionLabel>Ecosystem</SectionLabel>
            <h1>Explore the OPTN ecosystem.</h1>
            <p className="page-hero-copy">OPTN Wallet sits alongside open-source code, Bitcoin Cash standards, public infrastructure, and practical resources for tokens, contracts, and connected applications.</p>
            <div className="hero-actions"><ButtonLink href="/wallet">Explore OPTN Wallet</ButtonLink><ButtonLink href="https://github.com/OPTNLabs/OPTNWallet" variant="secondary">View GitHub</ButtonLink></div>
          </div>
          <div className="architecture-graphic">
            <div className="architecture-node"><Icon name="wallet" size={25} /><div><strong>Wallet and apps</strong><small>Products people can use</small></div></div>
            <div className="architecture-arrow">↓</div>
            <div className="architecture-node architecture-node-middle"><Icon name="cube" size={25} /><div><strong>Tokens and transaction rules</strong><small>CashTokens, BCMR, and covenants</small></div></div>
            <div className="architecture-arrow">↓</div>
            <div className="architecture-node architecture-node-dark"><Icon name="stack" size={25} /><div><strong>Infrastructure and open source</strong><small>Services, code, and integration resources</small></div></div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Ecosystem map</SectionLabel>
          <h2>Find the layer you need</h2>
          <div className="four-columns control-grid">
            {resources.map(([icon, title, body, href]) => <div className="column-item" key={title}><span className="icon-circle"><Icon name={icon} /></span><h3>{title}</h3><p>{body}</p><ArrowLink href={href}>Explore</ArrowLink></div>)}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container boundary">
          <div><SectionLabel>Open resources</SectionLabel><h2>Go from product to protocol</h2><p className="section-intro">Start with the wallet experience, then follow the standards, infrastructure, code, and technical notes behind it.</p></div>
          <div className="simple-list"><div><strong>Open-source wallet</strong><p>Review the product implementation and contribute on GitHub.</p></div><div><strong>Technical learning</strong><p>Explore CashTokens, covenants, BCMR, and builder notes.</p></div><div><strong>Public infrastructure</strong><p>Connect to BCH services and inspect current service status below.</p></div></div>
        </div>
      </section>

      <section id="infrastructure" className="site-section infrastructure-map-section">
        <div className="site-container">
          <div className="ecosystem-infrastructure-heading">
            <SectionLabel>Infrastructure and data</SectionLabel>
            <h2>BCH services that keep products moving</h2>
            <p className="section-intro">OPTN Wallet relies on chain data, token indexing, metadata, and connectivity. These supporting services are also available to teams building Bitcoin Cash products.</p>
            <div className="hero-actions"><ButtonLink href="/#contact">Request access</ButtonLink><ButtonLink href="#tokenindex" variant="secondary">View token data</ButtonLink></div>
          </div>
          <InfrastructureServiceMap />
        </div>
      </section>

      <section id="tokenindex" className="site-section">
        <div className="site-container boundary">
          <div><SectionLabel>TokenIndexer</SectionLabel><h2>Make CashTokens easier to show and use.</h2><p className="section-intro">TokenIndexer turns on-chain token activity into app-ready balances, holder data, metadata, and portfolio views.</p><div className="hero-actions"><ButtonLink href="/#contact">Ask about token data access</ButtonLink><ArrowLink href="/bcmr-token-metadata">Explore BCMR</ArrowLink></div></div>
          <div className="simple-list"><div><strong>App-ready token data</strong><p>Give users clearer balances, portfolios, and token details.</p></div><div><strong>Built for integration</strong><p>A service surface for apps, mobile clients, and backend systems.</p></div><div><strong>Choose your operating model</strong><p>Run the stack yourself where supported, or ask about service access for a specific product.</p></div></div>
        </div>
      </section>

      <ServiceStatusBlock endpoint="/api/service-status?scope=public-infra" sectionId="public-service-status" title="Public service status" description="Check the health of OPTN&apos;s publicly exposed Bitcoin Cash services." />
      <FinalCTA title="Building in the BCH ecosystem?" body="Tell us what you are making and which product, protocol, data, or infrastructure layer you need." label="Contact us" />
    </div>
  );
}
