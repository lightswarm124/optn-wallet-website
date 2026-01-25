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
    files = fs.readdirSync(screenshotsDir).filter((f) => f.endsWith(".jpg"));
  } catch (err) {
    console.warn("Could not read screenshots directory:", err);
  }

  // Keep ordering stable (optional): alphabetical
  files.sort((a, b) => a.localeCompare(b));

  const images = files.map((name) => `/screenshots/${name}`);

  return (
    <section id="screenshots" className="section text-center">
      <h2 className="text-3xl font-semibold mb-3">
        Battle-tested in OPTN Wallet
      </h2>
      <p className="text-white/70 max-w-2xl mx-auto mb-10">
        OPTN Wallet is our proving ground—where advanced BCH transactions, token
        flows, and covenant-ready UX get hardened before they become reusable
        primitives for teams.
      </p>

      <ScreenshotCarouselClient images={images} />
    </section>
  );
}
