import fs from "fs";
import path from "path";
import dynamic from "next/dynamic";

const ScreenshotCarouselClient = dynamic(
  () => import("./ScreenshotCarouselClient"),
  { ssr: false },
);

export default function ScreenshotCarousel() {
  const screenshotsDir = path.join(process.cwd(), "public", "screenshots");
  let files = [];
  try {
    files = fs.readdirSync(screenshotsDir).filter((f) => f.endsWith(".png"));
  } catch (err) {
    console.warn("Could not read screenshots directory:", err);
  }

  // Keep ordering stable (optional): alphabetical
  files.sort((a, b) => a.localeCompare(b));

  const images = files.map((name) => `/screenshots/${name}`);

  return (
    <section id="screenshots" className="section text-center">
      <h2 className="text-3xl font-semibold mb-3">
        Product proof from OPTN Wallet
      </h2>
      <p className="text-white/70 max-w-2xl mx-auto mb-10">
        The wallet is not separate from the Labs story. It is where advanced
        BCH transaction flows, token UX, and covenant-oriented patterns get
        tested before they become guidance, product decisions, or reusable
        implementation patterns for teams.
      </p>

      <ScreenshotCarouselClient images={images} />
    </section>
  );
}
