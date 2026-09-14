import Image from "next/image";

function Picture({
  theme,
  desktopSrc,
  mobileSrc,
  alt,
  width,
  height,
  mobileWidth,
  mobileHeight,
  sizes,
}) {
  return (
    <picture className={`themed-responsive-svg themed-responsive-svg-${theme}`}>
      <source
        media="(max-width: 1100px)"
        srcSet={mobileSrc}
        type="image/svg+xml"
        width={mobileWidth}
        height={mobileHeight}
      />
      <Image
        src={desktopSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        unoptimized
      />
    </picture>
  );
}

export default function ThemedResponsiveSvg({
  lightDesktop,
  lightMobile,
  darkDesktop,
  darkMobile,
  alt,
  width,
  height,
  mobileWidth,
  mobileHeight,
  sizes,
}) {
  const shared = { alt, width, height, mobileWidth, mobileHeight, sizes };

  return (
    <>
      <Picture
        {...shared}
        theme="light"
        desktopSrc={lightDesktop}
        mobileSrc={lightMobile}
      />
      <Picture
        {...shared}
        theme="dark"
        desktopSrc={darkDesktop}
        mobileSrc={darkMobile}
      />
    </>
  );
}
