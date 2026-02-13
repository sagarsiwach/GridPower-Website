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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 text-xl font-semibold tracking-tight">
          <span className="text-[var(--gp-red)]">Grid</span>
          <span className={cn(scrolled ? "text-[var(--foreground)]" : "text-white")}>Power</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[var(--gp-red)]",
                scrolled ? "text-[var(--muted-foreground)]" : "text-white/80 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-lg bg-[var(--gp-red)] px-5 py-2 text-sm font-medium text-white transition-all hover:bg-[var(--gp-red-dark)]"
          >
            Request Quote
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg md:hidden",
            scrolled ? "text-[var(--foreground)]" : "text-white"
          )}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-[var(--border)] bg-white px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-[var(--foreground)] transition-colors hover:text-[var(--gp-red)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg bg-[var(--gp-red)] px-5 py-3 text-center text-sm font-medium text-white transition-all hover:bg-[var(--gp-red-dark)]"
            >
              Request Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
