import Image from "next/image";
import {
  ArrowLink,
  ButtonLink,
  FinalCTA,
  Icon,
  SectionLabel,
} from "../components/SitePrimitives";
import ScreenshotCarousel from "../components/ScreenshotCarousel";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "OPTN Wallet | Bitcoin Cash & CashTokens Wallet",
  description:
    "OPTN Wallet is a shipped self-custody Bitcoin Cash wallet for BCH, CashTokens, connected applications, and advanced transaction workflows.",
  path: "/wallet",
});

const capabilities = [
  ["CashTokens", "See fungible tokens and NFTs alongside BCH."],
  ["Advanced transactions", "Handle richer payments and advanced BCH workflows."],
  ["Connect to apps", "Connect to BCH apps and experiences when you need them."],
  ["Explore contracts", "Support richer BCH transaction and contract workflows."],
];

export default function WalletPage() {
  return (
    <div className="page-shell wallet-page">
      <section className="page-hero wallet-hero">
        <div className="site-container page-hero-grid">
          <div>
            <span className="wallet-status">Shipped</span>
            <SectionLabel>Shipped product</SectionLabel>
            <h1>A self-custody wallet for BCH, CashTokens, and connected apps.</h1>
            <p className="page-hero-copy">Send BCH, manage CashTokens, and connect to compatible applications from one self-custody wallet. OPTN Wallet also supports advanced BCH transaction workflows.</p>
            <div className="hero-actions"><ButtonLink href="https://play.google.com/store/apps/details?id=optn.wallet.app">Get OPTN Wallet</ButtonLink><ButtonLink href="https://github.com/OPTNLabs/OPTNWallet" variant="secondary">View on GitHub</ButtonLink></div>
          </div>
          <figure className="wallet-hero-image">
            <Image
              src="/screenshots/IMG_20250511_111344.png"
              alt="OPTN Wallet app browser showing BCH applications and category filters"
              width={361}
              height={749}
              priority
              sizes="(max-width: 900px) 180px, 178px"
            />
            <figcaption>Browse BCH-connected apps inside OPTN Wallet.</figcaption>
          </figure>
        </div>
      </section>

      <ScreenshotCarousel />

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Payments, assets, and apps</SectionLabel>
          <h2>Use BCH and CashTokens in connected experiences.</h2>
          <div className="wallet-capabilities">
            {capabilities.map(([title, body], index) => <div className="capability-row" key={title}><strong><span className="capability-marker">{index + 1}</span>{title}</strong><p>{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="site-section wallet-stack-section">
        <div className="site-container wallet-stack-bridge">
          <div className="wallet-stack-copy">
            <SectionLabel>OPTN Wallet → the OPTN stack</SectionLabel>
            <h2>The product that started the stack.</h2>
            <p className="section-intro">Building OPTN Wallet meant solving real product needs across tokens, app connections, infrastructure, and transactions. That experience shaped our developer stack and informs our work on programmable payments.</p>
          </div>
          <nav className="wallet-stack-links" aria-label="Explore the OPTN stack">
            <ArrowLink href="/developers">Developer resources</ArrowLink>
            <ArrowLink href="/infrastructure">BCH infrastructure</ArrowLink>
            <ArrowLink href="/engineering">OPTN Engineering</ArrowLink>
            <ArrowLink href="/blog/optn-wallet-update-2026">Latest Wallet update</ArrowLink>
          </nav>
        </div>
      </section>

      <FinalCTA title="Try OPTN Wallet." body="Download the shipped wallet or review the open implementation." label="Get OPTN Wallet" href="https://play.google.com/store/apps/details?id=optn.wallet.app" />
    </div>
  );
}
