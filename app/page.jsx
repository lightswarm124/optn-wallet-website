import Image from "next/image";
import { createPageMetadata } from "../lib/seo";
import {
  ArrowLink,
  ButtonLink,
  Icon,
  SectionLabel,
} from "./components/SitePrimitives";

export const metadata = createPageMetadata({
  title: "OPTN Labs | Bitcoin Cash Wallets, Tools & Infrastructure",
  description:
    "OPTN Labs builds Bitcoin Cash products for users and developers, including OPTN Wallet, public developer tooling, BCH infrastructure, and programmable transaction systems.",
  path: "/",
});

const ecosystem = [
  {
    icon: "wallet",
    title: "OPTN Wallet",
    status: "Available now",
    body: "Use BCH, CashTokens, and connected Bitcoin Cash applications from a self-custody wallet.",
    href: "/wallet",
    label: "Explore Wallet",
  },
  {
    icon: "code",
    title: "Developer Tools",
    status: "Available now",
    body: "Public developer tooling, documentation, examples, and integration resources for building on Bitcoin Cash.",
    href: "/developers",
    label: "Explore Developers",
  },
  {
    icon: "building",
    title: "Infrastructure",
    status: "Available now",
    body: "Public BCH network, indexing, and metadata infrastructure for applications and developers.",
    href: "/infrastructure",
    label: "Explore Infrastructure",
  },
  {
    icon: "shield",
    title: "Fund Control",
    status: "In development",
    body: "Covenant-based transaction systems for defining how software-operated funds are permitted to move.",
    href: "/platform",
    label: "Explore Platform",
  },
];

const capabilities = [
  "BCH & CashTokens",
  "WalletConnect",
  "Application integrations",
  "Advanced transaction tools",
];

const contactHref = "mailto:info@optnlabs.com?subject=OPTN%20Labs%20inquiry";

function WalletArtwork({ compact = false }) {
  return (
    <div className={`home-wallet-art ${compact ? "home-wallet-art-compact" : ""}`}>
      <Image
        src="/assets/images/OPTNUIkeyline2.png"
        alt="OPTN product mark"
        width={80}
        height={80}
      />
      <div>
        <strong>OPTN Wallet</strong>
        <span>Product artwork · Available now</span>
      </div>
    </div>
  );
}

function FundControlFlow() {
  return (
    <div className="home-fund-flow" aria-label="Illustrative fund-control flow">
      <div className="home-flow-node">
        <Icon name="code" size={24} />
        <span>Software requests an action</span>
      </div>
      <span className="home-flow-arrow" aria-hidden="true">↓</span>
      <div className="home-flow-node home-flow-node-accent">
        <Icon name="shield" size={24} />
        <span>BCH covenant rules</span>
      </div>
      <span className="home-flow-arrow" aria-hidden="true">↓</span>
      <div className="home-flow-node home-flow-node-dark">
        <Icon name="check" size={24} />
        <span>Permitted transaction outcome</span>
      </div>
      <p>Illustrative architecture. Not a live deployment.</p>
    </div>
  );
}

function EcosystemPillar({ icon, title, status, body, href, label }) {
  return (
    <article className="column-item home-pillar">
      <span className="icon-circle"><Icon name={icon} /></span>
      <div className="home-pillar-heading">
        <h3>{title}</h3>
        <span className="status-pill">{status}</span>
      </div>
      <p>{body}</p>
      <ArrowLink href={href}>{label}</ArrowLink>
    </article>
  );
}

export default function Home() {
  return (
    <div className="page-shell home-page">
      <section id="hero" className="hero home-hero">
        <div className="site-container home-hero-grid">
          <div className="home-hero-copy">
            <SectionLabel>OPTN Labs</SectionLabel>
            <h1>Bitcoin Cash wallets, tools, and infrastructure.</h1>
            <p className="hero-copy">
              OPTN Labs builds products for using BCH, developing applications,
              and defining how software-operated funds can move.
            </p>
            <p className="home-hero-detail">
              From a self-custody wallet and developer tooling to infrastructure
              and programmable transaction systems.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/wallet">Explore OPTN Wallet</ButtonLink>
              <ArrowLink href="/platform">Explore the Platform</ArrowLink>
              <ArrowLink href={contactHref}>Talk to OPTN</ArrowLink>
            </div>
          </div>
          <div className="home-hero-visual">
            <WalletArtwork />
            <div className="home-visual-rule" />
            <p>Self-custody · BCH · CashTokens</p>
          </div>
        </div>
      </section>

      <section id="ecosystem" className="site-section home-ecosystem">
        <div className="site-container">
          <SectionLabel>What OPTN builds</SectionLabel>
          <h2>One ecosystem. Several ways to build with it.</h2>
          <div className="four-columns home-pillar-grid">
            {ecosystem.map((item) => <EcosystemPillar key={item.title} {...item} />)}
          </div>
        </div>
      </section>

      <section id="wallet-proof" className="site-section home-wallet-section">
        <div className="site-container home-wallet-grid">
          <div className="home-wallet-artwork-wrap">
            <WalletArtwork compact />
            <p className="home-art-caption">Canonical OPTN product artwork.</p>
          </div>
          <div>
            <SectionLabel>Available now</SectionLabel>
            <h2>Start with OPTN Wallet.</h2>
            <p className="section-intro">
              A self-custody Bitcoin Cash wallet for BCH, CashTokens,
              application connections, and advanced transaction workflows.
            </p>
            <ul className="home-capabilities">
              {capabilities.map((capability) => <li key={capability}>{capability}</li>)}
            </ul>
            <div className="home-inline-actions">
              <ButtonLink href="/wallet">Explore OPTN Wallet</ButtonLink>
              <ArrowLink href="https://github.com/OPTNLabs/OPTNWallet">View on GitHub</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section id="fund-control" className="site-section home-fund-section">
        <div className="site-container home-fund-grid">
          <div>
            <SectionLabel>In development</SectionLabel>
            <h2>Control how funds move—not only who can sign.</h2>
            <p className="section-intro">
              BCH covenant rules can restrict what transactions are valid for
              funds deliberately placed under covenant control.
            </p>
            <p className="home-fund-detail">
              Rules can constrain recipients, amounts, permitted next states,
              and recovery paths—even when a transaction has otherwise been
              authorized.
            </p>
            <ArrowLink href="/platform">Explore programmable fund control</ArrowLink>
          </div>
          <FundControlFlow />
        </div>
      </section>

      <section id="engage" className="site-section home-build-section">
        <div className="site-container">
          <SectionLabel>How to engage</SectionLabel>
          <h2>Use the tools, or bring us a workflow.</h2>
          <div className="three-columns home-engagement-grid">
            <article className="column-item home-build-item home-engagement-item">
              <span className="icon-circle"><Icon name="code" /></span>
              <h3>Use public tools</h3>
              <p>Read the documentation, explore examples, and build with the public Bitcoin Cash developer resources.</p>
              <ArrowLink href="/developers">Explore Developers</ArrowLink>
            </article>
            <article className="column-item home-build-item home-engagement-item">
              <span className="icon-circle"><Icon name="building" /></span>
              <h3>Use infrastructure</h3>
              <p>Explore public network, indexing, and metadata services for BCH applications.</p>
              <ArrowLink href="/infrastructure">Explore Infrastructure</ArrowLink>
            </article>
            <article className="column-item home-build-item home-engagement-item">
              <span className="icon-circle"><Icon name="gear" /></span>
              <h3>Bring a workflow</h3>
              <p>Talk to OPTN about custom wallet, CashToken, covenant, agent-payment, or integration work.</p>
              <ArrowLink href={contactHref}>Talk to OPTN</ArrowLink>
            </article>
          </div>
        </div>
      </section>

      <section className="site-container home-final-cta" id="contact">
        <div>
          <h2>Use the tools. Build something new.</h2>
          <p>Start with OPTN Wallet and the public developer ecosystem, or talk to us about a more specialized workflow.</p>
        </div>
        <div className="home-final-actions">
          <ButtonLink href="/wallet">Explore OPTN Wallet</ButtonLink>
          <ButtonLink href={contactHref} variant="secondary">Talk to OPTN</ButtonLink>
          <ArrowLink href="/developers">Developer resources</ArrowLink>
        </div>
      </section>
    </div>
  );
}
