import Hero from "./components/Hero";
import ProofStrip from "./components/ProofStrip";
import ServiceStatusBlock from "./components/ServiceStatusBlock";
import Features from "./components/Features";
import UseCases from "./components/UseCases";
import Contact from "./components/Contact";
import Resources from "./components/Resources";
import ScreenshotCarousel from "./components/ScreenshotCarousel";

export const metadata = {
  title: "OPTN Labs | Wallet Software, Token Data, and BCH Infrastructure",
  description:
    "OPTN Labs builds wallet software, token data services, and hosted infrastructure for Bitcoin Cash. We also work directly with teams that need implementation help.",
  keywords: [
    "OPTN Labs",
    "Bitcoin Cash",
    "BCH infrastructure",
    "token data API",
    "CashTokens API",
    "CashTokens",
    "BCH wallet",
    "BCH developer tools",
  ],
  alternates: {
    canonical: "https://www.optnlabs.com/",
  },
  openGraph: {
    title: "OPTN Labs | Wallet Software, Token Data, and BCH Infrastructure",
    description:
      "Wallet software, token data services, and hosted infrastructure for Bitcoin Cash.",
    url: "https://www.optnlabs.com/",
  },
  twitter: {
    title: "OPTN Labs | Wallet Software, Token Data, and BCH Infrastructure",
    description:
      "Wallet software, token data services, and hosted infrastructure for Bitcoin Cash.",
  },
};

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="gradient-section">
        <ProofStrip />
      </div>

      <div className="gradient-section">
        <ServiceStatusBlock />
      </div>

      <div className="gradient-section">
        <Features />
      </div>

      <div className="gradient-section">
        <UseCases />
      </div>

      <div className="gradient-section">
        <ScreenshotCarousel />
      </div>

      <div className="gradient-section">
        <Resources />
      </div>

      <div id="contact" className="gradient-section">
        <Contact />
      </div>
    </div>
  );
}
