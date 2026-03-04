# GridPower Full Site Scaffold Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the existing partial GridPower website into a complete, production-ready full site scaffold with correct design system, all routes, swr-site-inspired component patterns, and Sanity CMS schemas.

**Architecture:** Next.js 16 + Tailwind v4 + Geist font + Radix Mauve color system. Static export to Cloudflare Pages. Sanity CMS (external hosted) for product/segment content. swr-site patterns used for navbar, footer, layout shell. All 30 routes scaffolded with real copy from the design handbook.

**Tech Stack:** Next.js 16, Tailwind v4, Geist Sans/Mono (next/font/local), Radix Mauve palette, Motion, Embla Carousel, Sanity v3, Lucide React, clsx, tailwind-merge

**Working directory:** `~/Developer/gridpower-website/`

**Key reference docs (already read):**
- Strategy v2: problem-first narrative, 8 homepage sections, GridEnergy leads
- Design handbook: all copy, section layouts, product names, CTA text
- swr-site components: navbar, footer, home-layout, ui/ primitives patterns

---

## Task 1: Fix Design System (Colors + Font)

**Problem:** Current globals.css uses wrong colors (cyan) and wrong font (Plus Jakarta Sans). Strategy locked: `#FA0016` red primary, Radix Mauve grays, Geist Sans/Mono.

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

**Step 1: Update globals.css with correct token system**

Replace entire `@theme` block and base styles:

```css
@import "tailwindcss";

@source "../components";

@theme {
  /* GridPower Brand */
  --color-gp-red: #FA0016;
  --color-gp-red-hover: #d90013;

  /* Radix Mauve Gray Scale */
  --color-mauve-1: #fdfcfd;
  --color-mauve-2: #faf9fb;
  --color-mauve-3: #f2eff3;
  --color-mauve-4: #eae7ec;
  --color-mauve-5: #e3dfe6;
  --color-mauve-6: #dbd8e0;
  --color-mauve-7: #d0cdd7;
  --color-mauve-8: #bcbac7;
  --color-mauve-9: #8e8c99;
  --color-mauve-10: #84828e;
  --color-mauve-11: #65636d;
  --color-mauve-12: #211f26;

  /* Dark Mauve Scale */
  --color-mauve-dark-1: #121113;
  --color-mauve-dark-2: #1a191b;
  --color-mauve-dark-3: #232225;
  --color-mauve-dark-4: #2b292d;
  --color-mauve-dark-5: #323035;
  --color-mauve-dark-6: #3c393f;
  --color-mauve-dark-7: #49474e;
  --color-mauve-dark-8: #625f69;
  --color-mauve-dark-9: #6f6d78;
  --color-mauve-dark-10: #7c7a85;
  --color-mauve-dark-11: #b5b2bc;
  --color-mauve-dark-12: #eeeef0;

  /* Semantic aliases */
  --color-bg: var(--color-mauve-1);
  --color-bg-subtle: var(--color-mauve-2);
  --color-bg-tint: var(--color-mauve-3);
  --color-border: var(--color-mauve-6);
  --color-border-strong: var(--color-mauve-7);
  --color-fg: var(--color-mauve-12);
  --color-fg-muted: var(--color-mauve-11);
  --color-fg-subtle: var(--color-mauve-9);

  /* Dark surface (hero, dark sections) */
  --color-dark: var(--color-mauve-dark-1);
  --color-dark-2: var(--color-mauve-dark-2);
  --color-dark-3: var(--color-mauve-dark-3);
  --color-dark-fg: var(--color-mauve-dark-12);
  --color-dark-fg-muted: var(--color-mauve-dark-11);

  /* Geist font family tokens */
  --font-sans: "Geist", system-ui, -apple-system, sans-serif;
  --font-mono: "Geist Mono", "Fira Code", monospace;
}

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background: var(--color-bg);
    color: var(--color-fg);
    font-family: var(--font-sans);
  }

  *:focus-visible {
    outline: 2px solid var(--color-gp-red);
    outline-offset: 2px;
  }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Step 2: Update layout.tsx to use Geist font**

```tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "GridPower | The Open Energy Platform",
  description:
    "India generates power. We make sure it's never wasted. EV charging, energy storage, and powertrain — one open ecosystem.",
  openGraph: {
    title: "GridPower | The Open Energy Platform",
    description: "India generates power. We make sure it's never wasted.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

**Step 3: Install geist package**

```bash
cd ~/Developer/gridpower-website && bun add geist
```

**Step 4: Verify dev server starts without errors**

```bash
bun dev
```
Expected: Server running at localhost:3000, no TypeScript errors

**Step 5: Commit**

```bash
git add src/app/globals.css src/app/layout.tsx
git commit -m "fix: replace design system with Geist font + Radix Mauve + gp-red primary"
```

---

## Task 2: Update Header to swr-site Pattern + Mega Menu Prep

**Problem:** Current header has no mega menu, no Platform link, no sub-nav structure. Strategy requires GridEnergy > GridCharge > GridDrive hierarchy with sub-pages.

**Files:**
- Modify: `src/components/ui/Header.tsx`

**Step 1: Rewrite Header with correct nav structure**

```tsx
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
        <Link href="/" className="flex items-center gap-0 text-xl font-bold tracking-tight">
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
                    scrolled ? "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]" : "text-white/70 hover:text-white"
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
                        className="block rounded-lg px-3 py-2.5 hover:bg-[var(--color-bg-tint)] transition-colors"
                      >
                        <div className="text-sm font-medium text-[var(--color-fg)]">{child.label}</div>
                        <div className="text-xs text-[var(--color-fg-muted)] mt-0.5">{child.desc}</div>
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
                  scrolled ? "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]" : "text-white/70 hover:text-white"
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
          className={cn("flex h-10 w-10 items-center justify-center rounded-md md:hidden", scrolled ? "text-[var(--color-fg)]" : "text-white")}
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
              className="mt-4 rounded-md bg-[var(--color-gp-red)] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Talk to Sales
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
```

**Step 2: Verify build**

```bash
bun run typecheck
```
Expected: No errors

**Step 3: Commit**

```bash
git add src/components/ui/Header.tsx
git commit -m "feat: rebuild header with dropdown nav, correct routes, gp-red CTA"
```

---

## Task 3: Rewrite Homepage (v2 Strategy — Problem-First, 8 Sections)

**Problem:** Current homepage uses v1 strategy (product carousel + generic). Strategy v2 (20 Feb) is: problem narrative → solution → GridEnergy segments → GridCharge/Drive → Platform → Open Ecosystem → CTA.

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/components/sections/Hero.tsx`
- Modify: `src/components/sections/GridEnergySolutions.tsx`
- Modify: `src/components/sections/GridChargeSolutions.tsx`
- Modify: `src/components/sections/PlatformSection.tsx`
- Modify: `src/components/sections/OpenEcosystem.tsx`
- Modify: `src/components/sections/NumbersSection.tsx`
- Modify: `src/components/sections/ContactCTA.tsx`
- Create: `src/components/sections/ProblemSection.tsx`
- Create: `src/components/sections/EnergyFlowSection.tsx`
- Delete: `src/components/sections/CompanyBrief.tsx` (merged into Hero/CTA)

**Step 1: Update page.tsx with v2 section order**

```tsx
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { EnergyFlowSection } from "@/components/sections/EnergyFlowSection";
import { GridEnergySolutions } from "@/components/sections/GridEnergySolutions";
import { GridChargeSolutions } from "@/components/sections/GridChargeSolutions";
import { GridDriveSection } from "@/components/sections/GridDriveSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { OpenEcosystem } from "@/components/sections/OpenEcosystem";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <EnergyFlowSection />
      <GridEnergySolutions />
      <GridChargeSolutions />
      <GridDriveSection />
      <PlatformSection />
      <OpenEcosystem />
      <ContactCTA />
    </main>
  );
}
```

**Step 2: Rewrite Hero with v2 copy**

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--color-dark)]">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/50">
          The Open Energy Platform
        </p>
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl">
          India generates power.
          <br />
          <span className="text-[var(--color-gp-red)]">We make sure</span>
          <br />
          it&apos;s never wasted.
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/50">
          Energy storage, EV charging, and powertrain solutions — built on open
          standards. No vendor lock-in. No black boxes.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/energy"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--color-gp-red)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gp-red-hover)]"
          >
            Explore GridEnergy <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md border border-white/15 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
          >
            Talk to Sales
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
    </section>
  );
}
```

**Step 3: Create ProblemSection**

```tsx
const stats = [
  { value: "280 GW", label: "Solar installed capacity target by 2030" },
  { value: "< 5%", label: "Of generation currently paired with storage" },
  { value: "₹1.2L Cr", label: "Electricity wasted annually due to grid inefficiency" },
  { value: "4–8 hrs", label: "Peak demand mismatch every day" },
];

export function ProblemSection() {
  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">
              The Problem
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-fg)] md:text-5xl">
              India&apos;s generation is solved.
              <br />
              <span className="text-[var(--color-fg-muted)]">Storage isn&apos;t.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-fg-muted)]">
              Solar and wind capacity is scaling fast. But what happens when the
              sun doesn&apos;t shine? The grid struggles with peak demand,
              intermittent generation, and zero intelligent management. Energy
              is generated, then wasted.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[var(--color-fg-muted)]">
              The hard part is not generating power. It&apos;s effectively
              storing and utilizing it.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)] p-6"
              >
                <div className="text-3xl font-bold text-[var(--color-fg)]">{stat.value}</div>
                <div className="mt-2 text-sm leading-snug text-[var(--color-fg-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Step 4: Create EnergyFlowSection (static diagram — interactive deferred)**

```tsx
const steps = [
  { label: "Generation", sub: "Solar · Wind · Grid", icon: "☀" },
  { label: "Storage", sub: "GridVault · GridTitan", icon: "⚡" },
  { label: "Management", sub: "GridPower Platform", icon: "◈" },
  { label: "Application", sub: "Home · Office · EV · Fleet", icon: "→" },
];

export function EnergyFlowSection() {
  return (
    <section className="bg-[var(--color-dark)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">
            The Solution
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            The new grid starts here.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/50">
            A distributed micro-grid where every home, office, and factory has
            storage — and GridPower&apos;s software manages all of it
            intelligently.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 md:flex-row md:items-stretch md:gap-0">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center md:flex-1">
              <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-6 text-center md:mx-2">
                <div className="mb-3 text-3xl">{step.icon}</div>
                <div className="text-base font-bold text-white">{step.label}</div>
                <div className="mt-1 text-xs text-white/40">{step.sub}</div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden text-white/20 md:block md:text-2xl">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 5: Update GridEnergySolutions with links to sub-pages**

Add `href` to each card and link them to `/energy/home`, `/energy/office`, etc. Update copy to match v2 strategy (4 segments: Home, Office, Industry, Power Park — drop "Commercial" as standalone).

**Step 6: Update OpenEcosystem with exact handbook copy**

Three pillars with exact text:
- "Use what you have." — open ecosystem
- "Know what you're buying." — full transparency
- "Your data stays yours." — no lock-in

**Step 7: Update ContactCTA with v2 copy**

```tsx
// Headline: "Tell us about your property."
// Sub: "We'll design your energy system."
// Form: email + dropdown (Home Energy / Office Energy / Industrial / EV Charging / Fleet / Other)
```

**Step 8: Run typecheck**

```bash
bun run typecheck
```

**Step 9: Commit**

```bash
git add src/app/page.tsx src/components/sections/
git commit -m "feat: implement v2 homepage strategy — problem-first narrative, 8 sections"
```

---

## Task 4: Scaffold All Missing Routes

**Problem:** Missing routes: `/platform`, `/open-ecosystem`, `/projects`, `/signup`, `/brand`, all segment sub-pages, `/terms`, `/privacy`.

**Files to create:**
```
src/app/platform/page.tsx
src/app/open-ecosystem/page.tsx
src/app/projects/page.tsx
src/app/signup/page.tsx
src/app/brand/page.tsx
src/app/terms/page.tsx
src/app/privacy/page.tsx

src/app/energy/home/page.tsx
src/app/energy/office/page.tsx
src/app/energy/industry/page.tsx
src/app/energy/power-park/page.tsx

src/app/charge/home/page.tsx
src/app/charge/destination/page.tsx
src/app/charge/enterprise/page.tsx

src/app/drive/two-wheeler/page.tsx
src/app/drive/three-wheeler/page.tsx
src/app/drive/four-wheeler/page.tsx
```

**Step 1: Create shared segment page template component**

Create `src/components/templates/SegmentPageTemplate.tsx`:

```tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Product {
  name: string;
  spec: string;
}

interface PainPoint {
  pain: string;
  solution: string;
}

interface SegmentPageProps {
  vertical: string;           // "GridEnergy" | "GridCharge" | "GridDrive"
  verticalColor?: string;     // defaults to gp-red
  headline: string;
  subline: string;
  painPoints: PainPoint[];
  products: Product[];
  howItWorks: string[];
  platformNote?: string;
  ctaLabel: string;
  ctaHref: string;
}

export function SegmentPageTemplate({
  vertical,
  headline,
  subline,
  painPoints,
  products,
  howItWorks,
  platformNote,
  ctaLabel,
  ctaHref,
}: SegmentPageProps) {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[var(--color-dark)] pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-gp-red)]">
            {vertical}
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            {headline}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/50">
            {subline}
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-[var(--color-bg)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {painPoints.map((item, i) => (
              <div key={i} className="rounded-xl border border-[var(--color-border)] p-6">
                <p className="text-sm text-[var(--color-fg-muted)] line-through">{item.pain}</p>
                <p className="mt-2 text-base font-semibold text-[var(--color-fg)]">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-[var(--color-bg-subtle)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-2xl font-bold text-[var(--color-fg)]">Products in this solution</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <div key={p.name} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5">
                <div className="text-base font-bold text-[var(--color-fg)]">{p.name}</div>
                <div className="mt-1 text-sm text-[var(--color-fg-muted)]">{p.spec}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[var(--color-bg)] py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-10 text-2xl font-bold text-[var(--color-fg)]">How it works</h2>
          <div className="flex flex-col gap-4 md:flex-row">
            {howItWorks.map((step, i) => (
              <div key={i} className="flex-1 rounded-xl border border-[var(--color-border)] p-6">
                <div className="mb-3 text-3xl font-bold text-[var(--color-gp-red)] opacity-30">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-sm leading-relaxed text-[var(--color-fg)]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform tie-in */}
      {platformNote && (
        <section className="bg-[var(--color-dark)] py-16">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-base text-white/60">{platformNote}</p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[var(--color-bg)] py-20 text-center">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="mb-6 text-2xl font-bold text-[var(--color-fg)]">{ctaLabel}</h2>
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-md bg-[var(--color-gp-red)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gp-red-hover)]"
          >
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
```

**Step 2: Create all 10 segment pages using the template**

Each page imports `SegmentPageTemplate` and passes data from the design handbook. Example for `/energy/home`:

```tsx
// src/app/energy/home/page.tsx
import type { Metadata } from "next";
import { SegmentPageTemplate } from "@/components/templates/SegmentPageTemplate";

export const metadata: Metadata = {
  title: "Home Energy Storage | GridPower",
  description: "Store solar energy. Reduce bills by up to 80%. Never worry about outages.",
};

export default function EnergyHomePage() {
  return (
    <SegmentPageTemplate
      vertical="GridEnergy"
      headline="Store your sun. Power your home."
      subline="Residential solar storage from 5 kWh to 21 kWh. Works with any solar setup."
      painPoints={[
        { pain: "Electricity bills keep rising", solution: "Offset up to 80% with stored solar energy" },
        { pain: "Power cuts disrupt your day", solution: "Seamless backup, automatic switchover" },
        { pain: "Locked into one vendor", solution: "Open system. Any panel. Any inverter. Your choice." },
      ]}
      products={[
        { name: "GridVault Home", spec: "5–10 kWh LiFePO4 wall battery" },
        { name: "GridSync G1 Inverter", spec: "3–6 kW hybrid inverter" },
        { name: "GridCharge Home AC", spec: "7.4 kW EV wallbox" },
      ]}
      howItWorks={[
        "Site survey — we assess your solar setup and consumption",
        "Install & connect — certified team, one-day installation",
        "Monitor via app — real-time data, savings, alerts",
      ]}
      platformNote="Track your solar generation, battery level, and savings in real time with the GridCharge app."
      ctaLabel="Ready to take control of your energy?"
      ctaHref="/contact"
    />
  );
}
```

Create all 10 segment pages with appropriate data from the handbook.

**Step 3: Create platform page**

```tsx
// src/app/platform/page.tsx
// Sections: Hero ("One platform. Every asset."), GridCharge App info,
// GridPower Console info, Architecture diagram (static), Open ecosystem tie-in, Sign-up CTA
```

**Step 4: Create remaining utility pages**

- `/open-ecosystem` — three pillars with full Brand Brain copy
- `/projects` — GIDC Verna/Pilerne card + placeholder for more
- `/signup` — email only form, "Get early access to GridOS"
- `/about` — company story + team placeholder + timeline
- `/contact` — lead form with dropdown
- `/terms` + `/privacy` — legal boilerplate mentioning DeltaEV Mobility Pvt Ltd
- `/brand` — color swatches, typography, logo download (deferred content)

**Step 5: Verify all routes compile**

```bash
bun run build
```
Expected: Build succeeds, all routes listed in output

**Step 6: Commit**

```bash
git add src/app/ src/components/templates/
git commit -m "feat: scaffold all 30 routes with segment template + utility pages"
```

---

## Task 5: Update Vertical Landing Pages (Energy, Charge, Drive)

**Problem:** Existing `/energy`, `/charge`, `/drive` pages don't link to sub-pages and don't follow v2 structure.

**Files:**
- Modify: `src/app/energy/page.tsx`
- Modify: `src/app/charge/page.tsx`
- Modify: `src/app/drive/page.tsx`

**Step 1: Rewrite `/energy/page.tsx`**

Structure: GridEnergy logo/tagline → 4 segment cards (linking to sub-pages) → product categories → platform tie-in → CTA

```tsx
// Hero: "Energy that works for you, not against you."
// Sub: "Solar storage, hybrid inverters, commercial ESS, and grid-scale solutions — all on an open platform."
// 4 segment cards: Home, Office, Industry, Power Park (each links to sub-page)
// CTA: "Request a Quote"
```

**Step 2: Rewrite `/charge/page.tsx`**

```tsx
// Hero: "Charging infrastructure that pays for itself."
// 3 segment cards: Home, Destination, Enterprise & Fleet
```

**Step 3: Rewrite `/drive/page.tsx`**

```tsx
// Hero: "Electrify any vehicle."
// 3 cards: 2W, 3W, 4W
// Note: "Coming soon" framing where appropriate
```

**Step 4: Commit**

```bash
git add src/app/energy/page.tsx src/app/charge/page.tsx src/app/drive/page.tsx
git commit -m "feat: rebuild vertical landing pages with correct v2 structure and sub-page links"
```

---

## Task 6: Footer Rebuild (swr-site Pattern)

**Problem:** Current footer content unknown — needs full link tree, legal, social, GridPower brand hierarchy.

**Files:**
- Modify: `src/components/ui/Footer.tsx`

**Step 1: Rewrite footer**

```tsx
import Link from "next/link";

const columns = [
  {
    label: "GridEnergy",
    links: [
      { label: "Home Energy", href: "/energy/home" },
      { label: "Office Energy", href: "/energy/office" },
      { label: "Industry", href: "/energy/industry" },
      { label: "Power Park", href: "/energy/power-park" },
    ],
  },
  {
    label: "GridCharge",
    links: [
      { label: "Home Charging", href: "/charge/home" },
      { label: "Destination", href: "/charge/destination" },
      { label: "Enterprise & Fleet", href: "/charge/enterprise" },
    ],
  },
  {
    label: "GridDrive",
    links: [
      { label: "Two-Wheeler", href: "/drive/two-wheeler" },
      { label: "Three-Wheeler", href: "/drive/three-wheeler" },
      { label: "Four-Wheeler", href: "/drive/four-wheeler" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "Platform", href: "/platform" },
      { label: "Open Ecosystem", href: "/open-ecosystem" },
      { label: "Projects", href: "/projects" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-subtle)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-xl font-bold tracking-tight">
              <span className="text-[var(--color-gp-red)]">Grid</span>
              <span className="text-[var(--color-fg)]">Power</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-muted)]">
              The Open Energy Platform
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-md bg-[var(--color-gp-red)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-gp-red-hover)]"
            >
              Talk to Sales
            </Link>
          </div>

          {/* Nav columns */}
          {columns.map((col) => (
            <div key={col.label}>
              <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-fg-subtle)]">
                {col.label}
              </div>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-border)] pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-[var(--color-fg-subtle)]">
            © {new Date().getFullYear()} DeltaEV Mobility Private Limited. GridPower is a brand of DeltaEV Mobility Pvt Ltd.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-xs text-[var(--color-fg-subtle)] hover:text-[var(--color-fg-muted)]">Terms</Link>
            <Link href="/privacy" className="text-xs text-[var(--color-fg-subtle)] hover:text-[var(--color-fg-muted)]">Privacy</Link>
            <Link href="/brand" className="text-xs text-[var(--color-fg-subtle)] hover:text-[var(--color-fg-muted)]">Brand</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/ui/Footer.tsx
git commit -m "feat: rebuild footer with full link tree and legal"
```

---

## Task 7: Sanity CMS Schemas (Product + Segment Content)

**Problem:** Sanity is configured but no schemas exist. Need schemas for: Product, Segment, Project. Studio currently disabled — re-enable it on `/studio` route.

**Files:**
- Create: `src/sanity/schemaTypes/product.ts`
- Create: `src/sanity/schemaTypes/segment.ts`
- Create: `src/sanity/schemaTypes/project.ts`
- Modify: `src/sanity/schemaTypes/index.ts`
- Rename/move: `src/app/_studio-disabled/` → `src/app/studio/`

**Step 1: Create product schema**

```ts
// src/sanity/schemaTypes/product.ts
import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Product Name", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "vertical", title: "Vertical", type: "string",
      options: { list: ["GridEnergy", "GridCharge", "GridDrive"] } }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "keySpec", title: "Key Spec (headline)", type: "string" }),
    defineField({ name: "specTable", title: "Full Spec Table", type: "array",
      of: [{ type: "object", fields: [
        { name: "key", type: "string", title: "Spec Name" },
        { name: "value", type: "string", title: "Value" },
      ]}]
    }),
    defineField({ name: "image", title: "Product Image", type: "image",
      options: { hotspot: true } }),
    defineField({ name: "certifications", title: "Certifications", type: "array",
      of: [{ type: "string" }] }),
    defineField({ name: "featured", title: "Featured", type: "boolean" }),
    defineField({ name: "order", title: "Sort Order", type: "number" }),
  ],
  preview: {
    select: { title: "name", subtitle: "vertical", media: "image" },
  },
});
```

**Step 2: Create segment schema**

```ts
// src/sanity/schemaTypes/segment.ts
import { defineField, defineType } from "sanity";

export const segment = defineType({
  name: "segment",
  title: "Segment Page",
  type: "document",
  fields: [
    defineField({ name: "vertical", title: "Vertical", type: "string",
      options: { list: ["GridEnergy", "GridCharge", "GridDrive"] } }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({ name: "subline", title: "Subline", type: "text" }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image",
      options: { hotspot: true } }),
    defineField({ name: "products", title: "Products in this segment", type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }] }),
  ],
});
```

**Step 3: Create project schema**

```ts
// src/sanity/schemaTypes/project.ts
import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project / Case Study",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Project Title", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "status", title: "Status", type: "string",
      options: { list: ["Upcoming", "In Progress", "Completed"] } }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "scope", title: "Scope", type: "string" }),
    defineField({ name: "investment", title: "Investment", type: "string" }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
  ],
});
```

**Step 4: Register schemas**

```ts
// src/sanity/schemaTypes/index.ts
import { product } from "./product";
import { segment } from "./segment";
import { project } from "./project";

export const schemaTypes = [product, segment, project];
```

**Step 5: Re-enable studio route**

```bash
mv ~/Developer/gridpower-website/src/app/_studio-disabled ~/Developer/gridpower-website/src/app/studio
```

**Step 6: Verify Sanity config**

```bash
bun run typecheck
```

**Step 7: Commit**

```bash
git add src/sanity/ src/app/studio/
git commit -m "feat: Sanity schemas for product, segment, project + re-enable studio"
```

---

## Task 8: SEO + Sitemap + Robots

**Files:**
- Modify: `src/app/robots.ts`
- Modify: `src/app/sitemap.ts`

**Step 1: Update robots.ts**

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://gridpower.co.in/sitemap.xml",
  };
}
```

**Step 2: Update sitemap.ts with all routes**

```ts
import type { MetadataRoute } from "next";

const routes = [
  "/", "/energy", "/energy/home", "/energy/office", "/energy/industry", "/energy/power-park",
  "/charge", "/charge/home", "/charge/destination", "/charge/enterprise",
  "/drive", "/drive/two-wheeler", "/drive/three-wheeler", "/drive/four-wheeler",
  "/platform", "/open-ecosystem", "/projects", "/about", "/contact", "/signup",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://gridpower.co.in${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
```

**Step 3: Final build check**

```bash
bun run build
```
Expected: Clean build, all routes in output, no TypeScript errors

**Step 4: Final commit**

```bash
git add src/app/robots.ts src/app/sitemap.ts
git commit -m "feat: sitemap + robots.txt covering all 22 routes"
```

---

## Task 9: swr-site Reference — Pull Specific Patterns

**Goal:** Clone swr-site locally as read-only reference. Do NOT merge it. Use specific patterns for refinement.

**Step 1: Clone as reference**

```bash
git clone --depth=1 https://github.com/vercel/swr-site.git ~/Developer/swr-site-reference
```

**Step 2: Patterns to study and adapt into GridPower:**

| swr-site pattern | Apply to GridPower |
|---|---|
| `components/geistdocs/navbar.tsx` | Further refine our Header hover states |
| `components/geistdocs/footer.tsx` | Compare link density with ours |
| `components/ui/button.tsx` | Ensure our button variants match Radix style |
| `components/ui/card.tsx` | Use for product/segment cards |
| `app/[lang]/global.css` | Check Tailwind v4 @theme setup vs ours |

**Step 3: For each pattern adopted, commit individually with message referencing source:**

```bash
git commit -m "refine: improve card hover states (adapted from vercel/swr-site)"
```

---

## Completion Checklist

- [ ] Task 1: Colors + font corrected (Geist + Radix Mauve + gp-red)
- [ ] Task 2: Header with dropdown nav + correct routes
- [ ] Task 3: Homepage v2 (8 sections, problem-first)
- [ ] Task 4: All 30 routes scaffolded
- [ ] Task 5: Vertical landing pages updated
- [ ] Task 6: Footer with full link tree
- [ ] Task 7: Sanity schemas + studio re-enabled
- [ ] Task 8: Sitemap + robots
- [ ] Task 9: swr-site patterns adopted where useful
- [ ] Final: `bun run build` clean, no TS errors
- [ ] Final: Push to Cloudflare Pages deploys successfully

---

## What's Explicitly Out of Scope (This Plan)

- Product images (placeholder divs only — real images come from supplier renders + AI generation)
- Platform mock-up screens (Figma work — not yet designed)
- Sanity content entry (schemas only — data entry is separate)
- Animation polish (Motion library is installed, add after scaffold is confirmed)
- `/brand` page content (post-launch)
- Contact form backend (email notification via Cloudflare function — separate task)
