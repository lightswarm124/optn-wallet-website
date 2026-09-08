import Image from "next/image";
import {
  ArrowLink,
  ButtonLink,
  FinalCTA,
  Icon,
  SectionLabel,
} from "../components/SitePrimitives";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "OPTN Wallet | Bitcoin Cash & CashTokens Wallet",
  description:
    "OPTN Wallet is a shipped Bitcoin Cash and CashTokens wallet built to interact with applications and advanced transaction flows from a self-custody wallet.",
  path: "/wallet",
});

const capabilities = [
  ["CashTokens", "View and manage fungible tokens and NFTs alongside BCH."],
  ["Transaction construction", "Support richer BCH transactions and advanced wallet workflows."],
  ["Wallet connections", "Connect the wallet to BCH applications and external experiences."],
  ["Contract interaction", "Use BCH covenant and CashScript tooling through a wallet product surface."],
];

export default function WalletPage() {
  return (
    <div className="page-shell wallet-page">
      <section className="page-hero wallet-hero">
        <div className="site-container page-hero-grid">
          <div>
            <span className="wallet-status">Shipped</span>
            <SectionLabel>OPTN Wallet</SectionLabel>
            <h1>The BCH wallet built to interact.</h1>
            <p className="page-hero-copy">Send, receive, manage CashTokens, connect to applications, and work with advanced transaction flows from a self-custody wallet.</p>
            <div className="hero-actions"><ButtonLink href="https://play.google.com/store/apps/details?id=optn.wallet.app">Get OPTN Wallet</ButtonLink><ButtonLink href="https://github.com/OPTNLabs/OPTNWallet" variant="secondary">View on GitHub</ButtonLink></div>
          </div>
          <div className="wallet-hero-image"><Image src="/assets/images/OPTNWelcome3.png" alt="OPTN Wallet app artwork" width={442} height={434} priority sizes="(max-width: 900px) 55vw, 300px" /></div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Built for the BCH application layer</SectionLabel>
          <h2>More than storage and sending.</h2>
          <div className="wallet-capabilities">
            {capabilities.map(([title, body], index) => <div className="capability-row" key={title}><strong><span className="capability-marker">{index + 1}</span>{title}</strong><p>{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container proof-grid">
          <div>
            <SectionLabel>Part of OPTN Labs</SectionLabel>
            <h2>Shipped proof for a broader control platform.</h2>
            <p className="section-intro">OPTN Wallet is the product surface where OPTN builds and validates BCH transaction construction, CashTokens, application connections, and covenant-oriented workflows.</p>
            <div className="hero-actions"><ArrowLink href="/engineering">Engineering</ArrowLink><ArrowLink href="/developers">Developers</ArrowLink></div>
          </div>
          <div className="wallet-gallery" aria-label="OPTN Wallet product artwork">
            <Image src="/assets/images/OPTNWelcome3.png" alt="OPTN Wallet app artwork" width={442} height={434} sizes="180px" />
            <Image src="/assets/images/OPTNWelcome2.png" alt="OPTN Wallet brand artwork" width={452} height={490} sizes="180px" />
          </div>
        </div>
      </section>

      <FinalCTA title="Explore the shipped product." body="Use OPTN Wallet or review the implementation." label="Get OPTN Wallet" href="https://play.google.com/store/apps/details?id=optn.wallet.app" />
    </div>
  );
}
