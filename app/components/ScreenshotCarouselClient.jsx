"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function ScreenshotCarouselClient({ screenshots }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  const activeScreenshot = screenshots[activeIndex];
  const showPrevious = () => setActiveIndex((index) => (index - 1 + screenshots.length) % screenshots.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % screenshots.length);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (deltaX < -45) showNext();
    if (deltaX > 45) showPrevious();
  };

  return (
    <div
      className="wallet-screenshot-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="OPTN Wallet screenshots"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="wallet-screenshot-stage">
        <button className="wallet-screenshot-arrow" type="button" onClick={showPrevious} aria-label="Previous screenshot">
          <span aria-hidden="true">←</span>
        </button>
        <figure
          className="wallet-screenshot-figure"
          aria-roledescription="slide"
          aria-label={`${activeScreenshot.title}, ${activeIndex + 1} of ${screenshots.length}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            src={activeScreenshot.src}
            alt={activeScreenshot.alt}
            width={361}
            height={749}
            className="wallet-screenshot-image"
            priority={activeIndex === 0}
            sizes="(max-width: 820px) 70vw, 280px"
          />
          <figcaption className="wallet-screenshot-caption" aria-live="polite">
            <strong>{activeScreenshot.title}</strong>
            <span>{activeScreenshot.description}</span>
          </figcaption>
        </figure>
        <button className="wallet-screenshot-arrow" type="button" onClick={showNext} aria-label="Next screenshot">
          <span aria-hidden="true">→</span>
        </button>
      </div>
      <div className="wallet-screenshot-pagination">
        <span className="wallet-screenshot-count" aria-live="polite">
          {String(activeIndex + 1).padStart(2, "0")} / {String(screenshots.length).padStart(2, "0")}
        </span>
        <div className="wallet-screenshot-dots" role="group" aria-label="Choose a wallet screenshot">
          {screenshots.map((screenshot, index) => (
            <button
              key={screenshot.src}
              className="wallet-screenshot-dot"
              type="button"
              aria-label={`Show ${screenshot.title} screenshot`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
