import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const footerGroups = [
  {
    title: "Explore",
    links: [
      ["Wallet", "/wallet"],
      ["Platform", "/platform"],
      ["Solutions", "/solutions"],
      ["Pricing", "/pricing"],
    ],
  },
  {
    title: "Build",
    links: [
      ["Developers", "/developers"],
      ["Engineering", "/engineering"],
      ["Infrastructure", "/infrastructure"],
    ],
  },
  {
    title: "Learn",
    links: [
      ["About", "/about"],
      ["Blog", "/blog"],
      ["CashTokens", "/cashtokens"],
      ["Covenants", "/covenants-on-bitcoin-cash"],
      ["BCMR", "/bcmr-token-metadata"],
      ["FAQ", "/faq"],
    ],
  },
];

function LinkGroup({ title, links }) {
  return (
    <div className="footer-link-group">
      <h2>{title}</h2>
      {links.map(([label, href]) => (
        <Link key={href} href={href}>{label}</Link>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand" aria-label="OPTN Labs home">
            <Image
              className="brand-logo"
              src="/assets/images/OPTNWelcome1.png"
              alt="OPTN Labs"
              width={500}
              height={153}
            />
          </Link>
          <p>Bitcoin Cash wallets, tools, infrastructure, and engineering.</p>
        </div>
        <div className="footer-links">
          {footerGroups.map((group) => <LinkGroup key={group.title} {...group} />)}
        </div>
        <div className="footer-contact">
          <h2>Contact</h2>
          <a className="footer-contact-link" href="mailto:info@optnlabs.com?subject=OPTN%20Labs%20inquiry">Talk to OPTN →</a>
          <a className="footer-email" href="mailto:info@optnlabs.com">info@optnlabs.com</a>
          <div className="footer-social" aria-label="Social links">
            <a href="https://x.com/OPTNLabs" target="_blank" rel="noopener noreferrer" aria-label="OPTN Labs on X"><FaTwitter aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/company/optnlabs/" target="_blank" rel="noopener noreferrer" aria-label="OPTN Labs on LinkedIn"><FaLinkedin aria-hidden="true" /></a>
            <a href="https://github.com/OPTNLabs/OPTNWallet" target="_blank" rel="noopener noreferrer" aria-label="OPTN Labs on GitHub"><FaGithub aria-hidden="true" /></a>
          </div>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <span>&copy; {new Date().getFullYear()} OPTN Labs Inc.</span>
        <div>
          <Link href="/policy">Privacy</Link>
          <a href="mailto:info@optnlabs.com">info@optnlabs.com</a>
        </div>
      </div>
    </footer>
  );
}
