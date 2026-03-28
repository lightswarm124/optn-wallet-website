// app/layout.jsx
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// SEO + social
export const metadata = {
  metadataBase: new URL("https://www.optnlabs.com"),
  title: {
    default: "OPTN Labs — Build on Bitcoin Cash, made easier",
    template: "%s | OPTN Labs",
  },
  description:
    "OPTN Labs supports teams building on Bitcoin Cash with a production wallet, hosted infrastructure access, and hands-on engineering for CashTokens and covenant-style transaction flows.",
  keywords: [
    "OPTN Labs",
    "Bitcoin Cash",
    "CashTokens",
    "covenants",
    "wallet infrastructure",
    "BCH engineering",
  ],
  alternates: {
    canonical: "https://www.optnlabs.com/",
  },
  openGraph: {
    type: "website",
    url: "https://www.optnlabs.com/",
    title: "OPTN Labs — Build on Bitcoin Cash, made easier",
    description:
      "Production wallet + hosted infrastructure access + engineering support for teams building on Bitcoin Cash.",
    siteName: "OPTN Labs",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "OPTN Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OPTN Labs — Build on Bitcoin Cash, made easier",
    description:
      "Wallet, hosted endpoints, and engineering support for teams building on Bitcoin Cash.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${inter.className}`}>
      <body className="min-h-screen bg-black text-white">
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "OPTN Labs",
                  url: "https://www.optnlabs.com",
                  logo: "https://www.optnlabs.com/images/OPTNUIkeyline2.png",
                  sameAs: [
                    "https://x.com/OPTNLabs",
                    "https://www.linkedin.com/company/optnlabs/",
                    "https://github.com/OPTNLabs/OPTNWallet",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "OPTN Labs",
                  url: "https://www.optnlabs.com",
                  description:
                    "BCH infrastructure, wallet UX, and engineering support for teams building with CashTokens and covenant-ready transaction flows.",
                },
              ],
            }),
          }}
        />

        <div className="fixed top-0 left-0 right-0 z-50">
          <Header />
        </div>

        {/* Content is padded down so it never sits under the header */}
        <main className="pt-[88px]">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
