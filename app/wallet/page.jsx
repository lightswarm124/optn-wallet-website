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
            <SectionLabel>The product that proves the stack</SectionLabel>
            <h1>A self-custody BCH wallet that connects to what&apos;s next.</h1>
            <p className="page-hero-copy">We built OPTN Wallet to make more of BCH practical for real users: send BCH, manage CashTokens, connect to apps, and explore more capable transaction flows from one self-custody wallet.</p>
            <div className="hero-actions"><ButtonLink href="https://play.google.com/store/apps/details?id=optn.wallet.app">Get OPTN Wallet</ButtonLink><ButtonLink href="https://github.com/OPTNLabs/OPTNWallet" variant="secondary">View on GitHub</ButtonLink></div>
          </div>
          <div className="wallet-hero-image"><Image src="/assets/images/OPTNWelcome3.png" alt="OPTN Wallet app artwork" width={442} height={434} priority sizes="(max-width: 900px) 55vw, 300px" /></div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <SectionLabel>Built for how BCH is used today</SectionLabel>
          <h2>Use BCH with more confidence.</h2>
          <div className="wallet-capabilities">
            {capabilities.map(([title, body], index) => <div className="capability-row" key={title}><strong><span className="capability-marker">{index + 1}</span>{title}</strong><p>{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container proof-grid">
          <div>
            <SectionLabel>Where the story starts</SectionLabel>
            <h2>The working product behind the wider OPTN stack.</h2>
            <p className="section-intro">We did not start with abstract infrastructure. We built a wallet, learned what users and applications need, and use those lessons to shape the tools, services, and transaction controls around it.</p>
            <div className="hero-actions"><ArrowLink href="/engineering">Engineering</ArrowLink><ArrowLink href="/developers">Developers</ArrowLink><ArrowLink href="/blog/optn-wallet-update-2026">Latest Wallet update</ArrowLink></div>
          </div>
          <div className="wallet-gallery" aria-label="OPTN Wallet product artwork">
            <Image src="/assets/images/OPTNWelcome3.png" alt="OPTN Wallet app artwork" width={442} height={434} sizes="180px" />
            <Image src="/assets/images/OPTNWelcome2.png" alt="OPTN Wallet brand artwork" width={452} height={490} sizes="180px" />
          </div>
        </div>
      </section>

      <FinalCTA title="Try OPTN Wallet." body="Download the shipped wallet or review the open implementation." label="Get OPTN Wallet" href="https://play.google.com/store/apps/details?id=optn.wallet.app" />
    </div>
  );
}
