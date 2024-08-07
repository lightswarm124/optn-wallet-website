"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/OPTNUIkeyline2.png";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
    }
  }, [darkMode]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="header">
      <div className="container">
        <Link href="/" legacyBehavior>
          <a>
            <Image src={logo} alt="OPTN Logo" width={50} height={50} priority />
          </a>
        </Link>
        <div className="flex items-center space-x-4">
          {/* <div className="toggle-container" onClick={toggleDarkMode}>
            <div
              className={`toggle-circle ${
                darkMode ? "" : "transform translate-x-6"
              }`}
            ></div>
          </div> */}
          <div className="menu-button z-50">
            <button onClick={toggleSidebar} aria-label="Toggle menu">
              <Bars3Icon className="h-6 w-6 text-accent-primary" />
            </button>
          </div>
        </div>
        <nav className="hidden lg:flex space-x-4">
          <ScrollLink
            to="features"
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-accent-primary cursor-pointer"
          >
            Features
          </ScrollLink>
          <ScrollLink
            to="roadmap"
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-accent-primary cursor-pointer"
          >
            Roadmap
          </ScrollLink>
          <ScrollLink
            to="use-cases"
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-accent-primary cursor-pointer"
          >
            Use Cases
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-accent-primary cursor-pointer"
          >
            Contact
          </ScrollLink>
        </nav>
      </div>
      <div
        className={`mobile-menu ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ScrollLink
          to="features"
          smooth={true}
          offset={-70}
          duration={500}
          className="hover:text-accent-primary text-xl cursor-pointer"
          onClick={toggleSidebar}
        >
          Features
        </ScrollLink>
        <ScrollLink
          to="roadmap"
          smooth={true}
          offset={-70}
          duration={500}
          className="hover:text-accent-primary text-xl cursor-pointer"
          onClick={toggleSidebar}
        >
          Roadmap
        </ScrollLink>
        <ScrollLink
          to="use-cases"
          smooth={true}
          offset={-70}
          duration={500}
          className="hover:text-accent-primary text-xl cursor-pointer"
          onClick={toggleSidebar}
        >
          Use Cases
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          offset={-70}
          duration={500}
          className="hover:text-accent-primary text-xl cursor-pointer"
          onClick={toggleSidebar}
        >
          Contact
        </ScrollLink>
      </div>
    </header>
  );
}
