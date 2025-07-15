"use client";

import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const defaultResponsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

export default function ScreenshotCarouselClient({ images }) {
  return (
    <Carousel
      swipeable
      draggable
      showDots
      responsive={defaultResponsive}
      infinite
      autoPlay
      autoPlaySpeed={3000}
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
        <div key={idx} className="flex justify-center items-center">
          <Image
            src={src}
            alt={`Screenshot ${idx + 1}`}
            width={2156}
            height={1080}
            className="w-1/2 h-auto object-contain"
          />
        </div>
      ))}
    </Carousel>
  );
}
