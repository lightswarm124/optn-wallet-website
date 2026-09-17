// app/layout.jsx
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteTitle = "OPTN Labs | OPTN Wallet & Bitcoin Cash Ecosystem";
const siteDescription =
  "OPTN Labs builds OPTN Wallet and supports the Bitcoin Cash ecosystem with open resources, infrastructure, engineering, and controlled-payment pilot projects.";

// SEO + social
export const metadata = {
  metadataBase: new URL("https://www.optnlabs.com"),
  title: {
    default: siteTitle,
    template: "%s | OPTN Labs",
  },
  description: siteDescription,
  alternates: {
    canonical: "https://www.optnlabs.com/",
  },
  openGraph: {
    type: "website",
    url: "https://www.optnlabs.com/",
    title: siteTitle,
    description: siteDescription,
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
    title: siteTitle,
    description: siteDescription,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${inter.className}`}>
      <body className="min-h-screen">
        <Script id="optn-theme-bootstrap" strategy="beforeInteractive">
          {`(function () {
            var theme = "light";
            try {
              var saved = window.localStorage.getItem("optn-theme");
              if (saved === "dark" || saved === "light") {
                theme = saved;
              } else {
                theme = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
              }
            } catch (error) {
              theme = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
            }
            document.documentElement.dataset.theme = theme;
            document.documentElement.style.colorScheme = theme;
          })();`}
        </Script>
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
                  description: siteDescription,
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
