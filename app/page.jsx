import Head from "next/head";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Roadmap from "./components/Roadmap";
import UseCases from "./components/UseCases";
import Contact from "./components/Contact";
import Resources from "./components/Resources";
import ScreenshotCarousel from "./components/ScreenshotCarousel";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <div>
      <Head>
        <title>OPTN</title>
        <meta name="description" content="OPTN Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <div className="gradient-section">
        <Features />
      </div>

      <div className="gradient-section">
        <ScreenshotCarousel />
      </div>

      <div className="gradient-section">
        <Pricing />
      </div>

      <div className="gradient-section">
        <Roadmap />
      </div>

      <div className="gradient-section">
        <UseCases />
      </div>

      <div id="contact" className="gradient-section">
        <Contact />
      </div>
    </div>
  );
}
