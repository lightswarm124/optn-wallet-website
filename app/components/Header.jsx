"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/images/OPTNUIkeyline2.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link as ScrollLink } from "react-scroll";

function NavItem({ label, to, isHome, onClick }) {
  // On home page: smooth scroll. Else: link back to home with hash.
  if (isHome) {
    return (
      <ScrollLink
        to={to}
        smooth={true}
        offset={-70}
        duration={500}
        className="hover:text-accent-primary cursor-pointer"
        onClick={onClick}
      >
        {label}
      </ScrollLink>
    );
  }

  return (
    <Link
      href={`/#${to}`}
      className="hover:text-accent-primary"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const toggleSidebar = () => setSidebarOpen((v) => !v);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <header className="header w-full">
      <div className="container">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} alt="OPTN Logo" width={50} height={50} priority />
        </Link>

        <div className="flex items-center space-x-4">
          <div className="menu-button z-50">
            <button onClick={toggleSidebar} aria-label="Toggle menu">
              {sidebarOpen ? (
                <XMarkIcon className="h-6 w-6 text-accent-primary" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-accent-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center space-x-5">
          <NavItem label="Features" to="features" isHome={isHome} />
          <NavItem label="Roadmap" to="roadmap" isHome={isHome} />
          <NavItem label="Use Cases" to="use-cases" isHome={isHome} />
          <NavItem label="Contact" to="contact" isHome={isHome} />

          {/* NEW: Blog */}
          <Link href="/blog" className="hover:text-accent-primary">
            Blog
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`mobile-menu ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <NavItem
          label="Features"
          to="features"
          isHome={isHome}
          onClick={closeSidebar}
        />
        <NavItem
          label="Roadmap"
          to="roadmap"
          isHome={isHome}
          onClick={closeSidebar}
        />
        <NavItem
          label="Use Cases"
          to="use-cases"
          isHome={isHome}
          onClick={closeSidebar}
        />
        <NavItem
          label="Contact"
          to="contact"
          isHome={isHome}
          onClick={closeSidebar}
        />

        {/* NEW: Blog */}
        <Link
          href="/blog"
          className="hover:text-accent-primary text-xl"
          onClick={closeSidebar}
        >
          Blog
        </Link>
      </div>
    </header>
  );
}
