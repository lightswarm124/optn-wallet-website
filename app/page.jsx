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
    stage: "Build",
    icon: "code",
    title: "The BCH stack",
    status: "Available now",
    body: "Developer resources and infrastructure built around the problems a working wallet has to solve.",
    href: "/developers",
    label: "Explore developer resources",
    secondaryHref: "/infrastructure",
    secondaryLabel: "View infrastructure",
  },
  {
    stage: "Control",
    icon: "shield",
    title: "Programmable fund control",
    status: "In development",
    body: "Explore transaction rules that limit what software-operated funds can do.",
    href: "/platform",
    label: "Explore Platform",
  },
];

const capabilities = [
  "BCH & CashTokens",
  "WalletConnect",
  "Connect to apps",
  "Advanced BCH workflows",
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
        <span>A product requests an action</span>
      </div>
      <span className="home-flow-arrow" aria-hidden="true">↓</span>
      <div className="home-flow-node home-flow-node-accent">
        <Icon name="shield" size={24} />
        <span>BCH transaction rules</span>
      </div>
      <span className="home-flow-arrow" aria-hidden="true">↓</span>
      <div className="home-flow-node home-flow-node-dark">
        <Icon name="check" size={24} />
        <span>Only permitted outcomes proceed</span>
      </div>
      <p>Illustrative architecture. Not a live deployment.</p>
    </div>
  );
}

function EcosystemPillar({ stage, icon, title, status, body, href, label, secondaryHref, secondaryLabel }) {
  return (
    <article className="column-item home-pillar">
      <span className="icon-circle"><Icon name={icon} /></span>
      <span className="home-pillar-stage">{stage}</span>
      <div className="home-pillar-heading">
        <h3>{title}</h3>
        <span className="status-pill">{status}</span>
      </div>
      <p>{body}</p>
      <div className="home-pillar-links">
        <ArrowLink href={href}>{label}</ArrowLink>
        {secondaryHref ? <ArrowLink href={secondaryHref}>{secondaryLabel}</ArrowLink> : null}
      </div>
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
              Bitcoin Cash can do more than simple payments. OPTN builds
              practical products and supporting layers that make advanced BCH
              capabilities usable—from a self-custody wallet to developing
              systems designed to set clear limits around software-operated
              funds.
            </p>
            <p className="home-hero-detail">
              Use the wallet. Build with the stack. Explore what comes next.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/wallet">Explore OPTN Wallet</ButtonLink>
              <ArrowLink href="/developers">Explore developer resources</ArrowLink>
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

      <section id="wallet-proof" className="site-section home-wallet-section">
        <div className="site-container home-wallet-grid">
          <div className="home-wallet-artwork-wrap">
            <WalletArtwork compact />
            <p className="home-art-caption">Canonical OPTN product artwork.</p>
          </div>
          <div>
            <SectionLabel>Proof in use</SectionLabel>
            <h2>The product that proves the stack.</h2>
            <p className="section-intro">
              We built OPTN Wallet to make BCH, CashTokens, app connections, and
              advanced transaction flows practical for real users.
            </p>
            <ul className="home-capabilities">
              {capabilities.map((capability) => <li key={capability}>{capability}</li>)}
            </ul>
            <div className="home-inline-actions">
              <ButtonLink href="/wallet">Explore OPTN Wallet</ButtonLink>
              <ArrowLink href="https://github.com/OPTNLabs/OPTNWallet">View on GitHub</ArrowLink>
              <ArrowLink href="/blog/optn-wallet-update-2026">Read the latest update</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section id="ecosystem" className="site-section home-ecosystem">
        <div className="site-container">
          <SectionLabel>From proof to control</SectionLabel>
          <h2>Build the stack. Control the outcome.</h2>
          <p className="section-intro">
            Once a real wallet works, the next layers become clear: give other
            builders the tools and infrastructure they need, then explore
            transaction rules that control what software-operated funds can do.
          </p>
          <div className="home-stack-grid">
            {ecosystem.map((item) => <EcosystemPillar key={item.title} {...item} />)}
          </div>
          <p className="home-stack-transition">
            As applications become more capable, the question shifts from who
            can request a transaction to what transactions should be possible
            at all.
          </p>
        </div>
      </section>

      <section id="fund-control" className="site-section home-fund-section">
        <div className="site-container home-fund-grid">
          <div>
            <SectionLabel>Financial coordination · In development</SectionLabel>
            <h2>Give software room to act—with clear limits.</h2>
            <p className="section-intro">
              When people, software, or AI need to move money, OPTN is exploring
              a financial coordination layer that maps requests to permitted
              transaction outcomes.
            </p>
            <p className="home-fund-detail">
              The design can cover recipients, amounts, next steps, and
              recovery—so a signed request is not the only line of defense.
            </p>
            <ArrowLink href="/platform">Explore programmable fund control</ArrowLink>
          </div>
          <FundControlFlow />
        </div>
      </section>

      <section className="site-container home-final-cta" id="contact">
        <div>
          <h2>Ready to build on Bitcoin Cash?</h2>
          <p>Use the open tools and shipped wallet, or bring OPTN a workflow you want to make real.</p>
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
