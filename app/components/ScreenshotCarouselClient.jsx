"use client";

import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const defaultResponsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

export default function ScreenshotCarouselClient({ images }) {
  if (!images || images.length === 0) {
    return <div className="text-sm">No product artwork is available.</div>;
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
      containerClass="carousel-container w-full min-w-0"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-spacing"
      shouldResetAutoplay
    >
      {images.map((src, idx) => (
        <div key={src} className="flex min-w-0 items-center justify-center px-3">
          <div className="w-full min-w-0 md:w-[95%] lg:w-[92%] xl:w-[88%]">
            <Image
              src={src}
              alt={`OPTN Labs product artwork ${idx + 1}`}
              width={2156}
              height={1080}
              className="h-auto w-full rounded-xl border border-white/10 object-contain"
              priority={idx === 0}
              sizes="100vw"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
}
