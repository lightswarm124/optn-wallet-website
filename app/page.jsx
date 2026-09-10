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
    body: "A self-custody wallet for everyday BCH, CashTokens, and connected apps.",
    href: "/wallet",
    label: "Explore Wallet",
  },
  {
    icon: "code",
    title: "Developer Tools",
    status: "Available now",
    body: "Open resources that help you move from a product idea to a working Bitcoin Cash integration.",
    href: "/developers",
    label: "Explore Developers",
  },
  {
    icon: "building",
    title: "Infrastructure",
    status: "Available now",
    body: "Hosted network, indexing, and metadata services that keep your app connected to BCH.",
    href: "/infrastructure",
    label: "Explore Infrastructure",
  },
  {
    icon: "shield",
    title: "Fund Control",
    status: "In development",
    body: "A developing way to put clear spending rules around software-operated funds.",
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
            <h1>Bitcoin Cash tools for people and products that move value.</h1>
            <p className="hero-copy">
              OPTN Labs gives people and product teams a practical way to use
              BCH—from a self-custody wallet to the infrastructure and
              engineering behind better applications.
            </p>
            <p className="home-hero-detail">
              Start with a wallet. Build with open tools. Bring us the workflow
              that needs more.
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
          <h2>Everything you need to use, build, and scale on Bitcoin Cash.</h2>
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
            <h2>A better way to use BCH.</h2>
            <p className="section-intro">
              Keep BCH, CashTokens, app connections, and advanced transactions
              in one practical self-custody experience.
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

      <section id="fund-control" className="site-section home-fund-section">
        <div className="site-container home-fund-grid">
          <div>
            <SectionLabel>In development</SectionLabel>
            <h2>Give software room to act—with clear limits.</h2>
            <p className="section-intro">
              When software needs to move money, OPTN is exploring ways to make
              the permitted path explicit in the transaction itself.
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
