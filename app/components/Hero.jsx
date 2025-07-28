import Image from "next/image";
import Link from "next/link";
import heroImage from "../../public/images/OPTNWelcome1.png";
import playStoreImage from "../../public/images/play-store-icon.png";
import { FaTwitter, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

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
        OPTN is a revolutionary crypto wallet focused on covenant transactions
        on Bitcoin Cash (BCH). The wallet is currently in beta development and
        testing phase, with plans to support Bitcoin Core (BTC) covenants.
      </p>
      <div className="flex space-x-4 justify-center">
        {/* Google Play Button */}
        <a
          href="https://play.google.com/store/apps/details?id=optn.wallet.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-button relative w-48 h-12 flex items-center justify-center"
        >
          <Image
            src={playStoreImage}
            alt="Google Play"
            fill
            style={{ objectFit: "contain" }}
          />
        </a>
        {/* Telegram Button */}
        <Link href="https://t.me/+KLBMsVW0xHY1YWI5" legacyBehavior>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button bg-white rounded-3xl text-background-dark w-40 h-12 flex items-center justify-center relative"
          >
            <FaTelegramPlane size={24} />
            <span className="ml-2">Join Telegram</span>
          </a>
        </Link>
      </div>
    </section>
  );
}
