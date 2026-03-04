---
id: P-010
title: "GridPower Website"
created: 2026-01-20
status: In Progress
org: DeltaEV
priority: High
due:
tags: [website, nextjs, ralph, autonomous]
---

# P-010 - GridPower Website

## Overview

Build the GridPower website using Next.js with Ralph autonomous coding methodology.


## Stack (Final)

| Layer | Choice | Version | Notes |
|-------|--------|---------|-------|
| Framework | Next.js | 16.1.1 | App Router, Turbopack |
| Styling | Tailwind CSS | v4.1 | @tailwindcss/postcss |
| Language | TypeScript | Latest | Strict mode |
| Components | ShadCN | 3.5.0 | + Radix UI primitives |
| Animation | Motion.dev | Latest | Not Framer Motion |
| CMS | Sanity | Latest | Headless content management |
| Context/Docs | Context7 MCP | - | For documentation lookups |

**Methodology:** Ralph (autonomous AI coding loops)
**Pages:** Homepage + Product Page (Phase 1)

### Installation Commands (From Context7)

```bash
# 1. Create Next.js 16 project
pnpm create next-app@latest gridpower --yes
cd gridpower

# 2. Install Tailwind CSS v4
npm install tailwindcss @tailwindcss/postcss postcss

# 3. Create postcss.config.mjs
# (see setup guide)

# 4. Initialize ShadCN
npx shadcn init --defaults

# 5. Install ShadCN dependencies
npm install class-variance-authority clsx tailwind-merge lucide-react tw-animate-css

# 6. Install Motion.dev
npm install motion

# 7. Install Sanity
npm install next-sanity @sanity/image-url
```

---

## Resources

| Resource        | Location                                        |
| --------------- | ----------------------------------------------- |
| Figma Design    | [ADD LINK]                                      |
| GitHub Repo     | [ADD LINK]                                      |
| Ralph Blueprint | [[03 - Resources/Claude/Ralph Setup Blueprint]] |
| Live Site       | [TBD after deploy]                              |

---

## Milestones

### Phase 1: Setup & Foundation
- [ ] Install skills (Agent Skills, UI Skills, RAMS)
- [ ] Create GitHub repo
- [ ] Initialize Next.js project
- [ ] Configure Tailwind + TypeScript
- [ ] Extract design tokens from Figma
- [ ] Set up Ralph structure (specs, AGENTS.md, PROMPTs, loop.sh)

### Phase 2: Content & Specs
- [ ] Fill homepage content
- [ ] Fill product page content
- [ ] Write homepage.md spec
- [ ] Write product-page.md spec
- [ ] Write global-components.md spec

### Phase 3: Ralph Execution
- [ ] Run planning loops (./loop.sh plan)
- [ ] Review IMPLEMENTATION_PLAN.md
- [ ] Run build loops (./loop.sh)
- [ ] Monitor and adjust

### Phase 4: Review & Polish
- [ ] Run /rams on all components
- [ ] Run /ui-skills review
- [ ] Fix accessibility issues
- [ ] Performance audit
- [ ] Deploy to Vercel

---

## Tasks

| Task ID | Description | Status |
|---------|-------------|--------|
| [[T-145]] | GridPower Website Build | In Progress |

---

## Technical Decisions

### Component Library
**Decision:** ShadCN + Radix
**Why:** Pre-built accessible components, Tailwind-native, huge ecosystem

### Animation
**Decision:** Motion.dev
**Why:** Cleaner API than Framer Motion, compositor-friendly

### CMS
**Decision:** Sanity
**Why:** Headless, great editor experience, works well with Next.js

### Deployment
**Decision:** Vercel
**Why:** Next.js native, easy preview deploys

---

## Task Breakdown (Section-Wise)

### Phase 0: Foundation (Do First - Before Ralph)
| # | Task | Description |
|---|------|-------------|
| 0.1 | Initialize Next.js 15 | App Router, TypeScript, src/ directory |
| 0.2 | Configure Tailwind v4 | From scratch, design tokens ready |
| 0.3 | Install ShadCN | Base components (Button, Card, etc.) |
| 0.4 | Set up Sanity project | Project only, no schemas yet |
| 0.5 | Install Motion.dev | Animation library |
| 0.6 | Create utilities | cn(), fonts, base layout |
| 0.7 | Set up Ralph structure | specs/, AGENTS.md, PROMPTs, loop.sh |
| 0.8 | Install skills | Agent Skills, UI Skills, RAMS |

### Phase 1: Global Components (Ralph)
| # | Task | Description |
|---|------|-------------|
| 1.1 | Header/Navigation | Logo, nav links, CTA button, mobile menu |
| 1.2 | Footer | Nav columns, social links, copyright |
| 1.3 | Button component | Primary, secondary, ghost variants |
| 1.4 | Section wrapper | Consistent padding, max-width container |

### Phase 2: Homepage Sections (Ralph)

Based on Figma (node 10869-3597), sections from top to bottom:

| # | Section | Description |
|---|---------|-------------|
| 2.1 | Hero | Full-height, headline, subheadline, CTA, background |
| 2.2 | Product Showcase 1 | 3 charger products in row, "The Core Energy Platform" |
| 2.3 | Inventory Section | Laptop mockup, "Charge Inventory" feature |
| 2.4 | Home Charging | Product images with "Charging Machines" header |
| 2.5 | App/Mobile Feature | Phone mockup, app integration showcase |
| 2.6 | Product Grid | Multiple charger products, specs |
| 2.7 | Home Charging 2 | "Meet Your Energy Guardian" section |
| 2.8 | Charging Platform | Product lineup with features |
| 2.9 | Dashboard Section | Large screen mockup, software/dashboard preview |
| 2.10 | Enterprise Section | Commercial/business solutions |
| 2.11 | CTA Banner | Final call-to-action before footer |

### Phase 3: Product Page (Ralph)
| # | Task | Description |
|---|------|-------------|
| 3.1 | Product page layout | Header, grid structure |
| 3.2 | Product card | Image, name, specs, CTA |
| 3.3 | Category filter | Filter by product type |
| 3.4 | Product grid | Responsive grid layout |

### Phase 4: Integration & Polish (Ralph)
| # | Task | Description |
|---|------|-------------|
| 4.1 | SEO meta tags | Title, description, OG images |
| 4.2 | Performance pass | Images, lazy loading, Core Web Vitals |
| 4.3 | Accessibility review | /rams on all components |
| 4.4 | Final QA | /ui-skills review, cross-browser |

---

## Session Plan

**Today (Foundation - Phase 0):**
- 0.1 → 0.8: Set up complete foundation
- No Ralph yet - just preparation

**Next Session (Ralph Execution):**
- Phase 1 → 4: Ralph builds autonomously

---

## Ralph Task Flow

```
Phase 0: Foundation (Manual/Today)
    ↓
Phase 1: Global Components (1.1 → 1.4)
    ↓
Phase 2: Homepage Sections (2.1 → 2.11)
    ↓
Phase 3: Product Page (3.1 → 3.4)
    ↓
Phase 4: Integration (4.1 → 4.4)
```

Total Ralph tasks: ~23 iterations

---

## Content

### Homepage

**Hero Section:**
- Headline: [TO FILL]
- Subheadline: [TO FILL]
- Primary CTA: [TO FILL]
- Image/Visual: [TO FILL]

**Features Section:**
- Feature 1: [Title] - [Description]
- Feature 2: [Title] - [Description]
- Feature 3: [Title] - [Description]

**Products Preview:**
- [Product cards - pull from product page]

**Testimonials:**
- Quote 1: [TO FILL]
- Quote 2: [TO FILL]

**CTA Banner:**
- Headline: [TO FILL]
- CTA: [TO FILL]

### Product Page

**Products:**
1. [Product Name] - [Description] - [Image]
2. [Product Name] - [Description] - [Image]
3. [...]

---

## Figma Links

| Page | Figma Frame |
|------|-------------|
| Homepage | [LINK] |
| Product Page | [LINK] |
| Components | [LINK] |

---

## Progress Log

**2026-01-20** - Project created, Ralph blueprint documented

---

## Notes

- Using Ralph methodology for autonomous building
- Start with 2 pages only (homepage + product)
- Skills to install: Agent Skills, UI Skills, RAMS
- Reference docs: UI-UX Guidelines (copy to project docs/)

---

## Related

- [[T-145 - GridPower Website Build]]
- [[03 - Resources/Claude/Ralph Setup Blueprint]]
- [[03 - Resources/Claude/Ralph Orchestrator - Hat-Based AI Agent Orchestration]]
