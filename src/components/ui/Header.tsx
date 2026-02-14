"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "GridEnergy", href: "/energy" },
  { label: "GridCharge", href: "/charge" },
  { label: "GridDrive", href: "/drive" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border-light"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-0.5 text-xl font-bold tracking-tight cursor-pointer"
        >
          <span className="text-gp-red">Grid</span>
          <span className={cn(scrolled ? "text-fg" : "text-white")}>
            Power
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors duration-200 cursor-pointer",
                scrolled
                  ? "text-fg-muted hover:text-fg"
                  : "text-white/70 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md bg-gp-cta px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gp-cta-hover cursor-pointer"
          >
            Talk to Sales
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-md md:hidden cursor-pointer",
            scrolled ? "text-fg" : "text-white"
          )}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border-light bg-white px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-fg transition-colors duration-200 hover:text-gp-primary cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-md bg-gp-cta px-5 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-gp-cta-hover cursor-pointer"
            >
              Talk to Sales
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
