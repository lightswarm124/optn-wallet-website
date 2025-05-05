import Image from "next/image";
import Link from "next/link";
import heroImage from "../../public/images/OPTNWelcome1.png";

export default function Hero() {
  return (
    <section id="hero" className="section text-center">
      <div className="relative w-full max-w-md h-32 mx-auto">
        <Image
          src={heroImage}
          alt="Welcome to OPTN"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <p className="hero-description text-lg mb-8 max-w-xl mx-auto mt-4">
        OPTN is a revolutionary crypto wallet focused on covenant transactions on Bitcoin Cash (BCH). The wallet is currently in beta development and testing phase, with plans to support Bitcoin Core (BTC) covenants.
      </p>
      <div className="flex space-x-4 justify-center">
        <Link
          href="https://github.com/BitcoinBay/OPTNWallet/releases/tag/v0.3-alpha"
          legacyBehavior
        >
          <a target="_blank" rel="noopener noreferrer">
            <button className="hero-button">Download for Android</button>
          </a>
        </Link>
        <Link href="https://t.me/+KLBMsVW0xHY1YWI5" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <button className="hero-button bg-accent-primary text-background-dark">
              Join Telegram
            </button>
          </a>
        </Link>
      </div>
    </section>
  );
}
