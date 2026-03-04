"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  {
    label: "GridEnergy",
    href: "/energy",
    children: [
      { label: "Home Energy", href: "/energy/home", desc: "Store your sun. Power your home." },
      { label: "Office Energy", href: "/energy/office", desc: "Cut peak demand. Cut your bills." },
      { label: "Industry", href: "/energy/industry", desc: "Reliable power. Zero downtime." },
      { label: "Power Park", href: "/energy/power-park", desc: "Grid-scale storage. Your terms." },
    ],
  },
  {
    label: "GridCharge",
    href: "/charge",
    children: [
      { label: "Home Charging", href: "/charge/home", desc: "Charge at home. Wake up full." },
      { label: "Destination", href: "/charge/destination", desc: "Turn parking into revenue." },
      { label: "Enterprise & Fleet", href: "/charge/enterprise", desc: "Manage your fleet's energy." },
    ],
  },
  {
    label: "GridDrive",
    href: "/drive",
    children: [
      { label: "Two-Wheeler", href: "/drive/two-wheeler", desc: "Electrify two-wheelers." },
      { label: "Three-Wheeler", href: "/drive/three-wheeler", desc: "Power the last mile." },
      { label: "Four-Wheeler", href: "/drive/four-wheeler", desc: "Full EV powertrain." },
    ],
  },
  { label: "Platform", href: "/platform" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
          ? "bg-[var(--color-bg)]/95 backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center text-xl font-bold tracking-tight">
          <span className="text-[var(--color-gp-red)]">Grid</span>
          <span className={cn(scrolled ? "text-[var(--color-fg)]" : "text-white")}>Power</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    scrolled
                      ? "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                </Link>
                {activeDropdown === item.href && (
                  <div className="absolute top-full left-0 mt-1 w-64 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-[var(--color-bg-tint)]"
                      >
                        <div className="text-sm font-medium text-[var(--color-fg)]">{child.label}</div>
                        <div className="mt-0.5 text-xs text-[var(--color-fg-muted)]">{child.desc}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  scrolled
                    ? "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
                    : "text-white/70 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="ml-2 rounded-md bg-[var(--color-gp-red)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gp-red-hover)]"
          >
            Talk to Sales
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-md md:hidden",
            scrolled ? "text-[var(--color-fg)]" : "text-white"
          )}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-[var(--color-fg)] hover:bg-[var(--color-bg-tint)]"
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-6 py-2 text-sm text-[var(--color-fg-muted)] hover:bg-[var(--color-bg-tint)]"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-md bg-[var(--color-gp-red)] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[var(--color-gp-red-hover)]"
            >
              Talk to Sales
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
