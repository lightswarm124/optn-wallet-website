import {
  ArrowLink,
  ButtonLink,
  FinalCTA,
  Icon,
  SectionLabel,
} from "../components/SitePrimitives";
import ScreenshotCarousel from "../components/ScreenshotCarousel";
import WalletFeatureCarouselClient from "../components/WalletFeatureCarouselClient";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "OPTN Wallet | Bitcoin Cash & CashTokens Wallet",
  description:
    "OPTN Wallet is a self-custody Bitcoin Cash wallet for BCH, CashTokens, connected applications, and advanced transaction workflows.",
  path: "/wallet",
});

const walletFeatures = [
  {
    eyebrow: "Everyday wallet",
    shortTitle: "Payments",
    title: "Send, receive, and keep track",
    body: "Use BCH and CashTokens from a clear wallet home with balances, quick actions, and recent activity.",
    details: ["Send and receive BCH", "Scan supported payment QR codes", "Review transaction activity"],
  },
  {
    eyebrow: "Digital assets",
    shortTitle: "CashTokens",
    title: "CashTokens alongside BCH",
    body: "View fungible tokens and NFTs in the same wallet and use token-aware payment flows.",
    details: ["Fungible token balances", "NFT holdings", "Token family tools"],
  },
  {
    eyebrow: "Connected experiences",
    shortTitle: "Apps",
    title: "Connect to compatible apps",
    body: "Pair with BCH applications through WalletConnect and review requests before approving them.",
    details: ["WalletConnect sessions", "Transaction approval", "Message approval"],
  },
  {
    eyebrow: "Self-custody",
    shortTitle: "Security",
    title: "Your keys, recovery, and access",
    body: "Create or restore a wallet with a recovery phrase and protect local access with wallet security controls.",
    details: ["Recovery phrase backup", "Password and app lock", "Wallet export and restore tools"],
  },
  {
    eyebrow: "Wallet utilities",
    shortTitle: "Utilities",
    title: "Useful tools when you need them",
    body: "Handle common wallet tasks without leaving the app or exposing implementation details.",
    details: ["Generate fresh receive addresses", "Sweep supported paper wallets", "Switch between Mainnet and Chipnet"],
  },
  {
    eyebrow: "Advanced workflows",
    shortTitle: "Advanced",
    title: "Go beyond a standard send",
    body: "Use deeper wallet tools for custom BCH transactions and contract-based workflows.",
    details: ["Custom transaction builder", "Contract instance management", "Advanced review flows"],
  },
];

export default function WalletPage() {
  return (
    <div className="page-shell wallet-page">
      <section className="page-hero wallet-hero">
        <div className="site-container page-hero-grid">
          <div className="wallet-hero-copy">
            <SectionLabel>OPTN Wallet</SectionLabel>
            <h1>Self-custody for BCH and CashTokens.</h1>
            <p className="page-hero-copy">Send BCH, manage CashTokens, and connect to compatible applications from one self-custody wallet. OPTN Wallet also supports advanced BCH transaction workflows.</p>
            <div className="hero-actions"><ButtonLink href="https://play.google.com/store/apps/details?id=optn.wallet.app">Get OPTN Wallet</ButtonLink><ButtonLink href="https://github.com/OPTNLabs/OPTNWallet" variant="secondary">View on GitHub</ButtonLink></div>
          </div>
        </div>
      </section>

      <ScreenshotCarousel />

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Features</SectionLabel>
          <h2>What you can do</h2>
          <p className="section-intro">From everyday payments to connected applications and advanced wallet workflows.</p>
          <WalletFeatureCarouselClient features={walletFeatures} />
        </div>
      </section>

      <section className="site-section wallet-stack-section">
        <div className="site-container wallet-stack-bridge">
          <div className="wallet-stack-copy">
            <SectionLabel>Ecosystem bridge</SectionLabel>
            <h2>Explore what surrounds the wallet</h2>
            <p className="section-intro">Building OPTN Wallet created practical resources and experience across tokens, app connections, infrastructure, and transaction construction. Follow those layers through the wider BCH ecosystem.</p>
          </div>
          <nav className="wallet-stack-links" aria-label="Explore the OPTN stack">
            <ArrowLink href="/ecosystem">BCH ecosystem</ArrowLink>
            <ArrowLink href="/ecosystem#infrastructure">BCH infrastructure</ArrowLink>
            <ArrowLink href="/engineering">OPTN Engineering</ArrowLink>
            <ArrowLink href="/blog/optn-wallet-update-2026">Latest Wallet update</ArrowLink>
          </nav>
        </div>
      </section>

      <FinalCTA title="Try OPTN Wallet." body="Download the wallet or review the open implementation." label="Get OPTN Wallet" href="https://play.google.com/store/apps/details?id=optn.wallet.app" />
    </div>
  );
}
