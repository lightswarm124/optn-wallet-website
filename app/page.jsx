import Image from "next/image";
import { FaGithub, FaGooglePlay } from "react-icons/fa";
import { createPageMetadata } from "../lib/seo";
import {
  ArrowLink,
  ButtonLink,
  Icon,
  SectionLabel,
} from "./components/SitePrimitives";
import ContactForm from "./components/ContactForm";

export const metadata = createPageMetadata({
  title: "OPTN Labs | OPTN Wallet & Bitcoin Cash Ecosystem",
  description:
    "Start with OPTN Wallet, explore the Bitcoin Cash ecosystem around it, or contact OPTN about controlled-payment pilot projects.",
  path: "/",
});

const walletHighlights = [
  ["wallet", "Everyday payments", "Send and receive BCH, scan payment QR codes, and follow recent activity."],
  ["cube", "CashTokens", "Keep fungible tokens and NFTs alongside BCH in one self-custody wallet."],
  ["route", "Connected apps", "Pair with compatible applications through WalletConnect and approve requests in the wallet."],
  ["gear", "Advanced tools", "Use fresh addresses, paper-wallet sweeping, custom transactions, and contract workflows."],
];

const ecosystemLinks = [
  ["wallet", "OPTN Wallet", "The self-custody product at the center of the ecosystem.", "/wallet"],
  ["cube", "Tokens and metadata", "CashTokens and BCMR resources for assets people can understand and use.", "/cashtokens"],
  ["shield", "Covenants and contracts", "Patterns for transaction rules, contract workflows, and controlled fund paths.", "/covenants-on-bitcoin-cash"],
  ["stack", "Infrastructure and data", "Connectivity, indexing, metadata, and public services for BCH applications.", "/ecosystem#infrastructure"],
];

const contactHref = "/#contact";

function FundControlFlow() {
  return (
    <div className="home-fund-flow" aria-label="Reference payment and transaction flow">
      <div className="home-flow-node">
        <Icon name="code" size={24} />
        <span>Software requests a financial action</span>
      </div>
      <span className="home-flow-arrow" aria-hidden="true">↓</span>
      <div className="home-flow-node home-flow-node-accent">
        <Icon name="shield" size={24} />
        <span>OPTN composes the transaction</span>
      </div>
      <span className="home-flow-arrow" aria-hidden="true">↓</span>
      <div className="home-flow-node home-flow-node-dark">
        <Icon name="check" size={24} />
        <span>BCH validates transaction rules</span>
      </div>
      <p>Policy-aware payment flow</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="page-shell home-page">
      <section id="hero" className="hero home-hero">
        <div className="site-container home-hero-grid">
          <div className="home-hero-copy">
            <SectionLabel>OPTN Wallet</SectionLabel>
            <h1>Bitcoin Cash, tokens, and apps—in one wallet.</h1>
            <p className="hero-copy">
              Send and receive BCH, manage CashTokens, connect to compatible
              applications, and access advanced wallet tools while keeping
              control of your keys.
            </p>
            <p className="home-hero-detail">
              OPTN Wallet is the released product at the center of the OPTN
              ecosystem.
            </p>
            <div className="hero-actions">
              <ButtonLink href="https://play.google.com/store/apps/details?id=optn.wallet.app">Get OPTN Wallet</ButtonLink>
              <ArrowLink href="/wallet">Explore the wallet</ArrowLink>
              <ArrowLink href={contactHref}>Contact us</ArrowLink>
            </div>
          </div>
          <div className="home-hero-visual">
            <div className="home-hero-brand">
              <Image
                className="home-hero-brand-logo"
                src="/assets/images/OPTNWelcome1.png"
                alt="OPTN Labs"
                width={500}
                height={153}
                priority
              />
            </div>
            <div className="home-visual-rule" aria-hidden="true" />
            <div className="home-download-actions" aria-label="Download or review OPTN Wallet">
              <a
                className="home-download-link home-download-link-google"
                href="https://play.google.com/store/apps/details?id=optn.wallet.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGooglePlay aria-hidden="true" />
                <span><small>Get it on</small><strong>Google Play</strong></span>
              </a>
              <a
                className="home-download-link home-download-link-github"
                href="https://github.com/OPTNLabs/OPTNWallet/releases"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub aria-hidden="true" />
                <span><small>View releases on</small><strong>GitHub</strong></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section home-wallet-section">
        <div className="site-container">
          <SectionLabel>Wallet capabilities</SectionLabel>
          <h2>More than send and receive</h2>
          <div className="four-columns control-grid">
            {walletHighlights.map(([icon, title, body]) => <div className="column-item" key={title}><span className="icon-circle"><Icon name={icon} /></span><h3>{title}</h3><p>{body}</p></div>)}
          </div>
          <div className="home-inline-actions"><ArrowLink href="/wallet">See all wallet features</ArrowLink></div>
        </div>
      </section>

      <section id="ecosystem" className="site-section">
        <div className="site-container">
          <SectionLabel>Ecosystem</SectionLabel>
          <h2>Build around the wallet</h2>
          <div className="four-columns control-grid">
            {ecosystemLinks.map(([icon, title, body, href]) => <div className="column-item" key={title}><span className="icon-circle"><Icon name={icon} /></span><h3>{title}</h3><p>{body}</p><ArrowLink href={href}>Explore</ArrowLink></div>)}
          </div>
          <div className="home-inline-actions"><ButtonLink href="/ecosystem" variant="secondary">Explore the ecosystem</ButtonLink></div>
        </div>
      </section>

      <section id="fund-control" className="site-section home-fund-section">
        <div className="site-container home-fund-grid">
          <div>
            <SectionLabel>Pilot exploration · WIP</SectionLabel>
            <h2>Controlled payments for software</h2>
            <p className="section-intro">
              We are exploring pilot projects for software and AI agents that
              need bounded payment authority, including recipient, amount,
              transaction-path, and recovery rules.
            </p>
            <p className="home-fund-detail">This work is separate from the released Wallet product and is open for scoped pilot exploration.</p>
            <div className="home-inline-actions"><ButtonLink href="/platform">Explore pilot projects</ButtonLink><ArrowLink href={contactHref}>Contact us</ArrowLink></div>
          </div>
          <FundControlFlow />
        </div>
      </section>

      <section className="site-container home-contact-section" id="contact">
        <div className="home-contact-intro">
          <SectionLabel>Contact us</SectionLabel>
          <h2>What are you working on?</h2>
          <p>Ask about OPTN Wallet, the BCH ecosystem, engineering support, partnerships, or a controlled-payment pilot.</p>
          <p className="home-contact-fallback">Prefer email? Write to <a href="mailto:info@optnlabs.com">info@optnlabs.com</a>.</p>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
