import {
  ArrowLink,
  ButtonLink,
  FinalCTA,
  Icon,
  SectionLabel,
} from "../components/SitePrimitives";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Bitcoin Cash Developer Resources | OPTN Labs",
  description:
    "Developer resources for building Bitcoin Cash applications with CashTokens, covenants, BCMR, wallet integrations, and OPTN infrastructure.",
  path: "/developers",
});

const resources = [
  ["stack", "CashTokens", "Token primitives, wallet display, and application integration.", "/cashtokens"],
  ["shield", "Covenants", "Constrained transaction paths and covenant-oriented workflows on BCH.", "/covenants-on-bitcoin-cash"],
  ["route", "BCMR", "Token metadata and discovery for wallets and applications.", "/bcmr-token-metadata"],
  ["wallet", "Wallet integration", "Use the shipped OPTN Wallet as a product and integration reference.", "/wallet"],
];

export default function DevelopersPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="site-container page-hero-grid">
          <div><SectionLabel>Developers</SectionLabel><h1>Build Bitcoin Cash products with working foundations.</h1><p className="page-hero-copy">Explore the technical surfaces behind OPTN Wallet, CashTokens, covenants, token metadata, and Bitcoin Cash infrastructure.</p><div className="hero-actions"><ButtonLink href="/engineering">Talk to engineering</ButtonLink><ButtonLink href="https://github.com/OPTNLabs/OPTNWallet" variant="secondary">View GitHub</ButtonLink></div></div>
          <div className="architecture-graphic"><div className="architecture-node"><Icon name="code" size={25} /><div><strong>Product question</strong><small>Choose the BCH capability you need</small></div></div><div className="architecture-arrow">↓</div><div className="architecture-node architecture-node-middle"><Icon name="route" size={25} /><div><strong>Technical resource</strong><small>Read, test, and integrate</small></div></div><div className="architecture-arrow">↓</div><div className="architecture-node architecture-node-dark"><Icon name="cube" size={25} /><div><strong>Working product</strong><small>Wallet and application proof</small></div></div></div>
        </div>
      </section>
      <section className="site-section"><div className="site-container"><SectionLabel>Technical resources</SectionLabel><h2>Start with the layer you need.</h2><div className="four-columns control-grid">{resources.map(([icon, title, body, href]) => <div className="column-item" key={title}><span className="icon-circle"><Icon name={icon} /></span><h3>{title}</h3><p>{body}</p><ArrowLink href={href}>Explore</ArrowLink></div>)}</div></div></section>
      <section className="site-section"><div className="site-container boundary"><div><SectionLabel>Need a deeper technical path?</SectionLabel><h2>From architecture to tested implementation.</h2><p className="section-intro">OPTN can help scope the product, work through transaction design, and validate the integration points that matter before release.</p></div><div className="simple-list"><div><strong>Architecture and implementation</strong><p>Work through wallet, application, and transaction design.</p></div><div><strong>Testing and review</strong><p>Validate behavior and integration points against the intended product.</p></div><div><strong>Infrastructure access</strong><p>Use Bitcoin Cash services where running the full stack is not the right first step.</p></div></div></div></section>
      <FinalCTA title="Have a technical question?" body="Tell us what you are building and where you need help." label="Talk to OPTN" />
    </div>
  );
}
