// app/layout.jsx
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
    default: "OPTN Labs | Bitcoin Cash Wallets, Tools & Infrastructure",
    template: "%s | OPTN Labs",
  },
  description:
    "OPTN Labs builds Bitcoin Cash wallets, developer tools, infrastructure, CashToken integrations, and programmable transaction systems.",
  alternates: {
    canonical: "https://www.optnlabs.com/",
  },
  openGraph: {
    type: "website",
    url: "https://www.optnlabs.com/",
    title: "OPTN Labs | Bitcoin Cash Wallets, Tools & Infrastructure",
    description:
      "Bitcoin Cash products for users and builders, from OPTN Wallet and developer tooling to infrastructure and programmable transaction systems.",
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
    title: "OPTN Labs | Bitcoin Cash Wallets, Tools & Infrastructure",
    description:
      "Bitcoin Cash products for users and builders, from OPTN Wallet and developer tooling to infrastructure and programmable transaction systems.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${inter.className}`}>
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "OPTN Labs",
                  url: "https://www.optnlabs.com",
                  logo: "https://www.optnlabs.com/assets/images/OPTNUIkeyline2.png",
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
                  description: "Bitcoin Cash products for users and builders, from OPTN Wallet and developer tooling to infrastructure and programmable transaction systems.",
                },
              ],
            }),
          }}
        />
        <Header />
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
