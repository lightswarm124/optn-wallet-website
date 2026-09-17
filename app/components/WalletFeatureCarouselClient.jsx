"use client";

import { useRef, useState } from "react";

export default function WalletFeatureCarouselClient({ features }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  if (!features || features.length === 0) return null;

  const activeFeature = features[activeIndex];
  const showPrevious = () => setActiveIndex((index) => (index - 1 + features.length) % features.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % features.length);

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
      className="wallet-feature-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="OPTN Wallet features"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="wallet-feature-controls">
        <span>{String(activeIndex + 1).padStart(2, "0")} / {String(features.length).padStart(2, "0")}</span>
        <div>
          <button type="button" onClick={showPrevious} aria-label="Previous wallet feature">←</button>
          <button type="button" onClick={showNext} aria-label="Next wallet feature">→</button>
        </div>
      </div>

      <article
        className="wallet-feature-slide"
        aria-roledescription="slide"
        aria-label={`${activeFeature.title}, ${activeIndex + 1} of ${features.length}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <span>{activeFeature.eyebrow}</span>
        <h3>{activeFeature.title}</h3>
        <p>{activeFeature.body}</p>
        <ul>
          {activeFeature.details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
      </article>

      <div className="wallet-feature-tabs" role="group" aria-label="Choose a wallet feature">
        {features.map((feature, index) => (
          <button
            key={feature.title}
            type="button"
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => setActiveIndex(index)}
          >
            {feature.shortTitle}
          </button>
        ))}
      </div>
    </div>
  );
}
