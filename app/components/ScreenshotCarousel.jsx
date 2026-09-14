import ScreenshotCarouselClient from "./ScreenshotCarouselClient";
import { SectionLabel } from "./SitePrimitives";

export default function ScreenshotCarousel() {
  const screenshots = [
    {
      src: "/screenshots/IMG_20250511_111312.png",
      title: "Wallet home",
      description: "Portfolio, quick actions, and recent activity in one view.",
      alt: "OPTN Wallet home screen with portfolio balance, quick actions, and recent activity",
    },
    {
      src: "/screenshots/IMG_20250511_111300.png",
      title: "Assets overview",
      description: "See BCH and CashToken holdings from the assets view.",
      alt: "OPTN Wallet assets screen showing BCH balance, CashToken holdings, and vault workspace",
    },
    {
      src: "/screenshots/IMG_20250511_111327.png",
      title: "CashTokens",
      description: "Browse fungible tokens and NFTs in the wallet.",
      alt: "OPTN Wallet CashTokens screen with a list of token and NFT holdings",
    },
    {
      src: "/screenshots/IMG_20250511_111248.png",
      title: "Wallet actions",
      description: "Open common actions, from sending and receiving to token tools.",
      alt: "OPTN Wallet actions screen listing send, receive, QR scan, new address, and mint token actions",
    },
    {
      src: "/screenshots/IMG_20250511_111358.png",
      title: "Send a payment",
      description: "Choose a transfer mode, enter a destination and amount, then review.",
      alt: "OPTN Wallet transfer screen with payment mode, destination, amount, and review controls",
    },
    {
      src: "/screenshots/IMG_20250511_111230.png",
      title: "Receive BCH",
      description: "Show a payment QR code and choose how to share an address.",
      alt: "OPTN Wallet receive screen with payment QR code, address, and sharing options",
    },
    {
      src: "/screenshots/IMG_20250511_111344.png",
      title: "Browse apps",
      description: "Explore connected BCH apps and wallet experiences.",
      alt: "OPTN Wallet app browser with category filters and app cards",
    },
    {
      src: "/screenshots/IMG_20250511_111157.png",
      title: "Airdrop setup",
      description: "Set up recipient addresses for a token or BCH distribution.",
      alt: "OPTN Wallet airdrop setup screen with manual and token-based recipient options",
    },
  ];

  return (
    <section id="screenshots" className="site-section wallet-screenshots-section">
      <div className="site-container wallet-screenshots-grid">
        <div className="wallet-screenshots-copy">
          <SectionLabel>Inside OPTN Wallet</SectionLabel>
          <h2>A closer look at the shipped wallet.</h2>
          <p className="section-intro">
            Explore the app’s wallet, assets, CashTokens, connected apps, and payment screens.
          </p>
        </div>
        <div className="wallet-screenshots-viewer">
          <ScreenshotCarouselClient screenshots={screenshots} />
        </div>
      </div>
    </section>
  );
}
