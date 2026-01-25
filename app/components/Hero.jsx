import Image from "next/image";
import heroImage from "../../public/images/OPTNWelcome1.png";
import playStoreImage from "../../public/images/play-store-icon.png";
import { FaTelegramPlane } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="section text-center">
      <div className="relative w-full max-w-md h-32 mx-auto">
        <Image
          src={heroImage}
          alt="OPTN Labs"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-semibold mt-6">
        Infrastructure & tooling for Bitcoin Cash apps.
      </h1>

      <p className="hero-description text-lg mb-8 max-w-2xl mx-auto mt-4 text-white/80">
        OPTN Labs helps teams ship production-grade applications on Bitcoin Cash
        with reliable indexing, token metadata, and developer
        primitives—battle-tested in the OPTN Wallet.
      </p>

      {/* Primary CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <a
          href="#docs"
          className="hero-button bg-white rounded-3xl text-background-dark w-56 h-12 flex items-center justify-center"
        >
          Read the Docs
        </a>

        <a
          href="#products"
          className="hero-button border border-white/30 rounded-3xl text-white w-56 h-12 flex items-center justify-center hover:border-accent-primary hover:text-accent-primary transition-colors"
        >
          View Products
        </a>
      </div>

      {/* Secondary actions */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-5">
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
          <FaTelegramPlane size={20} />
          <span className="ml-2">Join Telegram</span>
        </a>
      </div>

      <p className="mt-6 text-sm text-white/60 max-w-2xl mx-auto">
        OPTN Wallet showcases covenant-focused flows and token support on
        Bitcoin Cash. OPTN Labs provides the infrastructure layer that makes
        these experiences reliable.
      </p>
    </section>
  );
}
