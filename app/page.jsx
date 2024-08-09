import Head from "next/head";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Roadmap from "./components/Roadmap";
import UseCases from "./components/UseCases";
import Contact from "./components/Contact";
import Resources from "./components/Resources";

export default function Home() {
  return (
    <div>
      <Head>
        <title>OPTN</title>
        <meta name="description" content="OPTN Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <div className="gradient-section">
          <Features />
        </div>
        <div className="gradient-section">
          <Roadmap />
        </div>
        <div className="gradient-section">
          <UseCases />
        </div>
        <div>
          <Resources />
        </div>
        <div className="gradient-section">
          <Contact />
        </div>
      </main>
    </div>
  );
}
