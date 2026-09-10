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
  ["stack", "CashTokens", "Make tokens useful in wallets and apps.", "/cashtokens"],
  ["shield", "Covenants", "Design transaction paths with clear guardrails.", "/covenants-on-bitcoin-cash"],
  ["route", "BCMR", "Give tokens names and context users can understand.", "/bcmr-token-metadata"],
  ["wallet", "Wallet integration", "Use a shipped wallet as a practical product reference.", "/wallet"],
];

export default function DevelopersPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="site-container page-hero-grid">
          <div><SectionLabel>Developers</SectionLabel><h1>Build your BCH product on a stronger foundation.</h1><p className="page-hero-copy">Find the guides, examples, open tools, and working wallet you need to move from an idea to a working Bitcoin Cash product.</p><div className="hero-actions"><ButtonLink href="/engineering">Talk to engineering</ButtonLink><ButtonLink href="https://github.com/OPTNLabs/OPTNWallet" variant="secondary">View GitHub</ButtonLink></div></div>
          <div className="architecture-graphic"><div className="architecture-node"><Icon name="code" size={25} /><div><strong>Your product question</strong><small>Find the BCH capability you need</small></div></div><div className="architecture-arrow">↓</div><div className="architecture-node architecture-node-middle"><Icon name="route" size={25} /><div><strong>The right resource</strong><small>Read, test, and integrate</small></div></div><div className="architecture-arrow">↓</div><div className="architecture-node architecture-node-dark"><Icon name="cube" size={25} /><div><strong>A working integration</strong><small>Turn ideas into product behavior</small></div></div></div>
        </div>
      </section>
      <section className="site-section"><div className="site-container"><SectionLabel>Start building</SectionLabel><h2>Choose the piece you need first.</h2><div className="four-columns control-grid">{resources.map(([icon, title, body, href]) => <div className="column-item" key={title}><span className="icon-circle"><Icon name={icon} /></span><h3>{title}</h3><p>{body}</p><ArrowLink href={href}>Explore</ArrowLink></div>)}</div></div></section>
      <section className="site-section"><div className="site-container boundary"><div><SectionLabel>Need help getting to launch?</SectionLabel><h2>From first integration to production readiness.</h2><p className="section-intro">OPTN can help turn a technical question into a working plan, a tested integration, and a clearer path to release.</p></div><div className="simple-list"><div><strong>Architecture and implementation</strong><p>Shape the right wallet, app, and transaction design.</p></div><div><strong>Testing and review</strong><p>Catch integration issues before they reach users.</p></div><div><strong>Hosted services</strong><p>Use BCH infrastructure without running every backend component yourself.</p></div></div></div></section>
      <FinalCTA title="Building something on BCH?" body="Tell us what you’re making and where the path gets difficult." label="Talk to OPTN" />
    </div>
  );
}
