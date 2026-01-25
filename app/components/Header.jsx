"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/images/OPTNUIkeyline2.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link as ScrollLink } from "react-scroll";

function NavItem({ label, to, isHome, onClick, className = "" }) {
  // On home page: smooth scroll. Else: link back to home with hash.
  if (isHome) {
    return (
      <ScrollLink
        to={to}
        smooth={true}
        offset={-90}
        duration={500}
        className={`hover:text-accent-primary cursor-pointer ${className}`}
        onClick={onClick}
      >
        {label}
      </ScrollLink>
    );
  }

  return (
    <Link
      href={`/#${to}`}
      className={`hover:text-accent-primary ${className}`}
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

  // Close mobile menu on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  // TODO: update this when you have a real status page URL
  const STATUS_URL = "https://status.optnlabs.com";

  return (
    <header className="header w-full">
      <div className="container">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} alt="OPTN Labs" width={50} height={50} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          <NavItem label="Products" to="products" isHome={isHome} />
          <NavItem label="Docs" to="docs" isHome={isHome} />
          <NavItem label="Pricing" to="pricing" isHome={isHome} />

          <a
            href={STATUS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-primary"
          >
            Status
          </a>

          <Link href="/blog" className="hover:text-accent-primary">
            Blog
          </Link>

          <NavItem label="Contact" to="contact" isHome={isHome} />

          {/* Desktop CTA */}
          <NavItem
            label="Get Access"
            to="contact"
            isHome={isHome}
            className="ml-2 px-4 py-2 rounded-full bg-white text-background-dark hover:bg-white/90 hover:text-background-dark transition-colors"
          />
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-4 lg:hidden">
          <div className="menu-button z-50">
            <button
              onClick={toggleSidebar}
              aria-label="Toggle menu"
              aria-expanded={sidebarOpen}
            >
              {sidebarOpen ? (
                <XMarkIcon className="h-6 w-6 text-accent-primary" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-accent-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`mobile-menu ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <NavItem
          label="Products"
          to="products"
          isHome={isHome}
          onClick={closeSidebar}
          className="text-xl"
        />
        <NavItem
          label="Docs"
          to="docs"
          isHome={isHome}
          onClick={closeSidebar}
          className="text-xl"
        />
        <NavItem
          label="Pricing"
          to="pricing"
          isHome={isHome}
          onClick={closeSidebar}
          className="text-xl"
        />

        <a
          href={STATUS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent-primary text-xl"
          onClick={closeSidebar}
        >
          Status
        </a>

        <Link
          href="/blog"
          className="hover:text-accent-primary text-xl"
          onClick={closeSidebar}
        >
          Blog
        </Link>

        <NavItem
          label="Contact"
          to="contact"
          isHome={isHome}
          onClick={closeSidebar}
          className="text-xl"
        />

        {/* Mobile CTA */}
        <NavItem
          label="Get Access"
          to="contact"
          isHome={isHome}
          onClick={closeSidebar}
          className="mt-4 px-6 py-3 rounded-full bg-white text-background-dark hover:bg-white/90"
        />
      </div>
    </header>
  );
}
