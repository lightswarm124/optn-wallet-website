import fs from 'fs';
import path from 'path';
import dynamic from 'next/dynamic';

const ScreenshotCarouselClient = dynamic(
  () => import('./ScreenshotCarouselClient'),
  { ssr: false }
);

export default function ScreenshotCarousel() {
  const screenshotsDir = path.join(process.cwd(), 'public', 'screenshots');
  let files = [];
  try {
    files = fs.readdirSync(screenshotsDir).filter(f => f.endsWith('.jpg'));
  } catch (err) {
    console.warn('Could not read screenshots directory:', err);
  }
  const images = files.map(name => `/screenshots/${name}`);

  return (
    <section id="screenshots" className="section text-center">
      {/* <h2 className="text-3xl font-semibold mb-8">Screenshots</h2> */}
      <ScreenshotCarouselClient images={images} />
    </section>
  );
}