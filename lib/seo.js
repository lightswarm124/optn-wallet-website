const SITE_URL = "https://www.optnlabs.com";
const SOCIAL_IMAGE = "/og.png";

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
}) {
  const url = new URL(path, SITE_URL).toString();
  const image = {
    url: SOCIAL_IMAGE,
    width: 1200,
    height: 630,
    alt: "OPTN Labs — Bitcoin Cash wallets, tools, and infrastructure",
  };

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: "OPTN Labs",
      images: [image],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SOCIAL_IMAGE],
    },
  };
}

export { SITE_URL, SOCIAL_IMAGE };
