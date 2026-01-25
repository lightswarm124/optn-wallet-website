"use client";

import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const defaultResponsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

export default function ScreenshotCarouselClient({ images }) {
  if (!images || images.length === 0) {
    return (
      <div className="text-white/60 text-sm">
        No screenshots found in{" "}
        <code className="text-white/80">/public/screenshots</code>.
      </div>
    );
  }

  return (
    <Carousel
      swipeable
      draggable
      showDots
      responsive={defaultResponsive}
      infinite
      autoPlay
      autoPlaySpeed={3500}
      keyBoardControl
      customTransition="transform 500ms ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-spacing"
      shouldResetAutoplay
    >
      {images.map((src, idx) => (
        <div key={src} className="flex justify-center items-center px-3">
          {/* Width control:
              - mobile: w-full
              - md: 90%
              - lg: 75%
              - xl: 55% (close to 50% you wanted, but still readable)
          */}
          <div className="w-full md:w-[90%] lg:w-[75%] xl:w-[55%]">
            <Image
              src={src}
              alt={`OPTN Wallet screenshot ${idx + 1}`}
              width={2156}
              height={1080}
              className="w-full h-auto object-contain rounded-xl border border-white/10"
              priority={idx === 0}
              sizes="(max-width: 464px) 100vw, (max-width: 1024px) 90vw, (max-width: 1280px) 75vw, 55vw"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
}
