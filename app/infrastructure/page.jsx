import {
  ArrowLink,
  ButtonLink,
  FinalCTA,
  SectionLabel,
} from "../components/SitePrimitives";
import ServiceStatusBlock from "../components/ServiceStatusBlock";
import InfrastructureServiceMap from "../components/InfrastructureServiceMap";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Bitcoin Cash Infrastructure | Electrum, Indexing & Metadata",
  description:
    "OPTN operates BCH network, indexing, token-data, and metadata services used by wallets and applications, including Electrum, Chaingraph, BCMR, and TokenIndexer infrastructure.",
  path: "/infrastructure",
});

export default function InfrastructurePage() {
  return (
    <div className="page-shell">
      <section className="page-hero infrastructure-hero">
        <div className="site-container">
          <div className="infrastructure-hero-copy">
            <SectionLabel>Infrastructure</SectionLabel>
            <h1>The BCH services your product needs to keep moving.</h1>
            <p className="page-hero-copy">OPTN Wallet needed reliable chain data, token indexing, metadata, and connectivity to deliver a reliable product experience. We make those supporting Bitcoin Cash services available to teams building their own products.</p>
            <div className="hero-actions"><ButtonLink href="/#contact">Request access</ButtonLink><ButtonLink href="#tokenindex" variant="secondary">View token data</ButtonLink></div>
          </div>
        </div>
      </section>

      <section className="site-section infrastructure-map-section">
        <div className="site-container">
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
      <FinalCTA title="Need the BCH backend without all the overhead?" body="Tell us what your product needs and we’ll point you to the right services." label="Request access" />
    </div>
  );
}
