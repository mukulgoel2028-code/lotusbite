"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Flavors", href: "/flavors" },
    { name: "Our Story", href: "/story" },
    { name: "Why Makhana?", href: "/why-makhana" },
    { name: "Combos & Bundles", href: "/combos" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  src="/lotus_logo_black.png"
                  alt="LotusBite Logo"
                  className="h-10 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary font-medium transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right-side Actions */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                aria-label="Search"
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                aria-label="Shopping Cart"
                className="relative text-foreground hover:text-primary transition-colors duration-200"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1.5 -right-2 bg-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  2
                </span>
              </button>

              <Link
                href="/shop"
                className="bg-secondary hover:bg-secondary-hover text-foreground font-semibold rounded-full px-5 py-2 transition-colors duration-200"
              >
                Shop Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                aria-label="Shopping Cart"
                className="relative text-foreground"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1.5 -right-2 bg-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  2
                </span>
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground hover:text-primary focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-background shadow-xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-end">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-foreground hover:text-primary"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1 px-4 pt-2 pb-6 space-y-1 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-4 text-lg font-medium text-foreground hover:bg-muted hover:text-primary rounded-md transition-colors duration-200 border-b border-border"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6 px-3">
            <Link
              href="/shop"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-secondary hover:bg-secondary-hover text-foreground font-semibold rounded-full px-5 py-3 transition-colors duration-200"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
