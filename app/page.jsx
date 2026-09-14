import Image from "next/image";
import { createPageMetadata } from "../lib/seo";
import {
  ArrowLink,
  ButtonLink,
  Icon,
  SectionLabel,
} from "./components/SitePrimitives";
import HomeStackStory from "./components/HomeStackStory";

export const metadata = createPageMetadata({
  title: "OPTN Labs | Bitcoin Cash Wallet, Infrastructure & Programmable Payments",
  description:
    "OPTN Labs builds Bitcoin Cash products and infrastructure, from the shipped self-custody OPTN Wallet and developer stack to programmable payment systems in development for applications and AI agents.",
  path: "/",
});

const capabilities = [
  "BCH & CashTokens",
  "WalletConnect",
  "Connect to apps",
  "Advanced transactions",
];

const contactHref = "mailto:info@optnlabs.com?subject=OPTN%20Labs%20inquiry";

function WalletArtwork({ compact = false }) {
  return (
    <div className={`home-wallet-art ${compact ? "home-wallet-art-compact" : ""}`}>
      <Image
        src="/assets/images/OPTNUIkeyline2.png"
        alt="OPTN Wallet app mark"
        width={80}
        height={80}
      />
      <div>
        <strong>OPTN Wallet</strong>
        <span>Self-custody · BCH · CashTokens</span>
      </div>
    </div>
  );
}

function HomeWalletPreview() {
  return (
    <div className="home-wallet-preview">
      <div className="home-wallet-preview-screens" aria-label="OPTN Wallet app screen previews">
        <Image
          className="home-wallet-preview-image home-wallet-preview-image-left"
          src="/screenshots/IMG_20250511_111157.png"
          alt="OPTN Wallet airdrop setup screen with recipient entry options"
          width={361}
          height={749}
          sizes="(max-width: 560px) 30vw, 140px"
        />
        <Image
          className="home-wallet-preview-image home-wallet-preview-image-main"
          src="/screenshots/IMG_20250511_111344.png"
          alt="OPTN Wallet app browser screen"
          width={361}
          height={749}
          priority
          sizes="(max-width: 560px) 42vw, 170px"
        />
        <Image
          className="home-wallet-preview-image home-wallet-preview-image-right"
          src="/screenshots/IMG_20250511_111248.png"
          alt="OPTN Wallet actions screen with send, receive, QR, and token tools"
          width={361}
          height={749}
          sizes="(max-width: 560px) 30vw, 140px"
        />
      </div>
      <div className="home-wallet-preview-brand">
        <Image src="/assets/images/OPTNUIkeyline2.png" alt="" width={40} height={40} />
        <div><strong>OPTN Wallet</strong><span>Shipped · Self-custody · BCH · CashTokens</span></div>
      </div>
    </div>
  );
}

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
      <p>Reference architecture · Platform in development</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="page-shell home-page">
      <section id="hero" className="hero home-hero">
        <div className="site-container home-hero-grid">
          <div className="home-hero-copy">
            <SectionLabel>OPTN Labs</SectionLabel>
            <h1>Bitcoin Cash products for people, applications, and AI agents.</h1>
            <p className="hero-copy">
              OPTN Labs builds a self-custody Bitcoin Cash wallet and the
              developer infrastructure around it. From OPTN Wallet, we are
              extending the stack toward programmable payments for software
              and AI agents.
            </p>
            <p className="home-hero-detail">
              Use the wallet. Build with the stack. Explore programmable payments.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/wallet">Explore OPTN Wallet</ButtonLink>
              <ArrowLink href="/developers">Explore developer resources</ArrowLink>
              <ArrowLink href={contactHref}>Talk to OPTN</ArrowLink>
            </div>
          </div>
          <div className="home-hero-visual home-hero-visual-screens">
            <HomeWalletPreview />
          </div>
        </div>
      </section>

      <section id="wallet-proof" className="site-section home-wallet-section">
        <div className="site-container home-wallet-grid">
          <div className="home-wallet-artwork-wrap">
            <WalletArtwork compact />
            <p className="home-art-caption">OPTN Wallet</p>
          </div>
          <div>
            <SectionLabel>Shipped product</SectionLabel>
            <h2>The product at the foundation of the OPTN stack.</h2>
            <p className="section-intro">
              OPTN Wallet brings BCH, CashTokens, connected applications, and
              advanced transaction flows into one self-custody product.
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
          <HomeStackStory />
        </div>
      </section>

      <section id="fund-control" className="site-section home-fund-section">
        <div className="site-container home-fund-grid">
          <div>
            <SectionLabel>Programmable payments · In development</SectionLabel>
            <h2>Payment infrastructure for autonomous software.</h2>
            <p className="section-intro">
              Software and AI agents are beginning to pay for APIs and
              services, receive funds, and take part in automated workflows.
              OPTN is developing BCH-native payment infrastructure to compose
              those transactions and add programmable financial rules.
            </p>
            <p className="home-fund-detail">
              Those rules can define amounts, destinations, transaction
              composition, continuation paths, and recovery.
            </p>
            <ArrowLink href="/platform">Explore programmable payments</ArrowLink>
          </div>
          <FundControlFlow />
        </div>
      </section>

      <section className="site-container home-final-cta" id="contact">
        <div>
          <h2>Ready to build on Bitcoin Cash?</h2>
          <p>Start with OPTN Wallet and our developer stack, or work with our team to build a specialized Bitcoin Cash product or payment workflow.</p>
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
