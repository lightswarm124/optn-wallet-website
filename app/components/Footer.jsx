import Link from "next/link";
import {
  FaTwitter,
  FaLinkedin,
  FaTelegramPlane,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 bg-background-dark text-white text-center">
      <div className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
        <Link href="/wallet" className="hover:text-accent-primary transition-colors">
          Wallet
        </Link>
        <Link
          href="/tokenindex"
          className="hover:text-accent-primary transition-colors"
        >
          TokenIndex
        </Link>
        <Link
          href="/infrastructure"
          className="hover:text-accent-primary transition-colors"
        >
          Infrastructure
        </Link>
        <Link
          href="/engineering"
          className="hover:text-accent-primary transition-colors"
        >
          Engineering
        </Link>
        <Link href="/blog" className="hover:text-accent-primary transition-colors">
          Blog
        </Link>
        <Link href="/#contact" className="hover:text-accent-primary transition-colors">
          Contact
        </Link>
        <Link href="/policy" className="hover:text-accent-primary transition-colors">
          Privacy
        </Link>
        <a
          href="mailto:info@optnlabs.com"
          className="hover:text-accent-primary transition-colors"
        >
          info@optnlabs.com
        </a>
      </div>
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://x.com/OPTNLabs"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent-primary transition-colors"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.linkedin.com/company/optnlabs/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent-primary transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://t.me/+KLBMsVW0xHY1YWI5"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent-primary transition-colors"
        >
          <FaTelegramPlane size={24} />
        </a>
        <a
          href="https://github.com/OPTNLabs/OPTNWallet"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent-primary transition-colors"
        >
          <FaGithub size={24} />
        </a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} OPTN Labs Inc. All rights reserved.
      </p>
    </footer>
  );
}
