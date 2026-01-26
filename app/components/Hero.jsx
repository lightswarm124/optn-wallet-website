import Image from "next/image";
import heroImage from "../../public/images/OPTNWelcome1.png";
import playStoreImage from "../../public/images/play-store-icon.png";
import { FaTelegramPlane } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="section text-center">
      <div className="relative w-full max-w-2xl h-28 md:h-32 mx-auto">
        <Image
          src={heroImage}
          alt="OPTN"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-semibold mt-6">
        Build on Bitcoin Cash with Confidence
      </h1>

      <p className="hero-description text-lg mb-7 max-w-2xl mx-auto mt-4 text-white/80">
        We help teams ship covenant-ready apps—reliable infra, CashTokens
        support, and practical guidance
      </p>

      {/* Primary buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <a
          href="https://play.google.com/store/apps/details?id=optn.wallet.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-button relative w-56 h-12 flex items-center justify-center"
          aria-label="Download OPTN Wallet on Google Play"
        >
          <Image
            src={playStoreImage}
            alt="Google Play"
            fill
            style={{ objectFit: "contain" }}
          />
        </a>

        <a
          href="https://t.me/+KLBMsVW0xHY1YWI5"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-button bg-white/10 rounded-3xl text-white w-56 h-12 flex items-center justify-center hover:bg-white/15 transition-colors"
        >
          <FaTelegramPlane size={18} />
          <span className="ml-2">Join Telegram</span>
        </a>
      </div>
    </section>
  );
}
