"use client";

import { useState, useEffect } from "react";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import Logo from "../icons/Logo";

interface NavLink {
  label: string;
  to: string;
}

const navLinks: NavLink[] = [
  { label: "talent", to: "/talent" },
  { label: "signup", to: "signup" },
  { label: "login", to: "login" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? " bg-transparent backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="app-container py-4">
        <div className="flex justify-between items-center">
          <Logo type="general" />
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-2">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <Link
                  href={to}
                  className={`capitalize cursor-pointer p-3 rounded-full hover:bg-blue-300/30 transition-colors ${
                    to === "login" && "text-white bg-primary hover:bg-primary"
                  }`}
                  title={`Go to ${label} page`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <div
            className="block md:hidden p-3 rounded-full hover:bg-primary cursor-pointer transition-opacity hover:text-white"
            onClick={toggleMenu}
          >
            <MenuIcon className="h-8 w-8" />
          </div>
        </div>
      </div>

        {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-primary backdrop-blur-lg z-40 flex flex-col items-center pt-32 space-y-6 text-white transition-all duration-300">
          {/* Close button */}
          <div
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-primary hover:text-white cursor-pointer"
            onClick={closeMenu}
            title="Close menu"
          >
            <X className="w-6 h-6" />
          </div>

          {/* Mobile nav links */}
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              href={to}
              className="capitalize text-lg font-medium cursor-pointer hover:underline transition-colors"
              onClick={closeMenu}
              title={`Go to ${label} page`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
