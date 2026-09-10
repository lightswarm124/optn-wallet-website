"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { href: "/wallet", label: "Wallet" },
  { href: "/developers", label: "Build" },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/engineering", label: "Engineering" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const pathname = usePathname();

  useEffect(() => {
    const saved = window.localStorage.getItem("optn-theme");
    const initial = saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
    document.documentElement.style.colorScheme = initial;
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    window.localStorage.setItem("optn-theme", next);
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
  };

  const toggleSidebar = () => setSidebarOpen((v) => !v);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <header className="site-header">
      <div className="site-container site-header-inner">
        <Link href="/" className="brand" aria-label="OPTN Labs home">
          <Image
            className="brand-logo"
            src="/assets/images/OPTNWelcome1.png"
            alt="OPTN Labs"
            width={500}
            height={153}
            priority
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "is-active" : ""}>
              {item.label}
            </Link>
          ))}
          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={`Use ${theme === "dark" ? "light" : "dark"} theme`} title={`Use ${theme === "dark" ? "light" : "dark"} theme`}>
            <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
          </button>
          <Link href="/#contact" className="button button-small">Talk to OPTN</Link>
        </nav>

        <button
          className="menu-button"
          onClick={toggleSidebar}
          aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          aria-expanded={sidebarOpen}
        >
          {sidebarOpen ? <XMarkIcon aria-hidden="true" /> : <Bars3Icon aria-hidden="true" />}
        </button>
      </div>

      <div className={`mobile-menu ${sidebarOpen ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeSidebar}>
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="button" onClick={closeSidebar}>
            Talk to OPTN
          </Link>
          <button type="button" className="theme-toggle mobile-theme" onClick={toggleTheme}>
            {theme === "dark" ? "Use light theme" : "Use dark theme"}
          </button>
        </nav>
      </div>
    </header>
  );
}
