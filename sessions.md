# GridPower Website - Development Sessions

## Session 1 - January 14, 2026

### Overview
Initial setup and implementation of the GridPower website with Next.js, featuring a sophisticated nested grid navigation system with smooth animations.

---

## Project Setup

### Repository
- **GitHub:** https://github.com/sagarsiwach/GridPower-Website
- **Framework:** Next.js 16.1.1 with App Router
- **Language:** TypeScript

### Tech Stack Installed
| Package | Version | Purpose |
|---------|---------|---------|
| Next.js | 16.1.1 | React framework with App Router & Turbopack |
| React | 19.2.3 | UI library |
| Tailwind CSS | v4 | Utility-first CSS framework |
| Motion | 12.26.2 | Animation library (Framer Motion) |
| Radix UI | latest | Accessible UI primitives |
| lucide-react | 0.562.0 | Icon library |
| clsx | 2.1.1 | Conditional className utility |
| tailwind-merge | 3.4.0 | Merge Tailwind classes without conflicts |
| class-variance-authority | latest | Component variant management |

### Font Configuration
- **Font:** Google Sans Flex (Variable)
- **Method:** Local font via `next/font/local`
- **File:** `src/fonts/GoogleSansFlex-Variable.ttf`
- **Weights:** 100-900 (variable)

---

## Project Structure

```
gridpower/
├── public/
│   ├── images/
│   │   ├── house-solar.jpg
│   │   └── solar-farm.jpg
│   └── videos/
│       └── Cinematic_slow_drone_1080p_202601141625.mp4
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── grid/
│   │   │   ├── GridCard.tsx
│   │   │   ├── GridContainer.tsx
│   │   │   └── index.ts
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── DropdownMenu.tsx
│   │       ├── Header.tsx
│   │       ├── HeroSection.tsx
│   │       └── index.ts
│   ├── hooks/
│   │   ├── index.ts
│   │   ├── useScrollZoom.ts (disabled)
│   │   └── useTilt.ts
│   ├── lib/
│   │   ├── grid-data.ts
│   │   └── utils.ts
│   └── fonts/
│       └── GoogleSansFlex-Variable.ttf
```

---

## Components Developed

### 1. Header (`src/components/ui/Header.tsx`)
Navigation bar with:
- GridPower logo (red square with grid pattern)
- Navigation menu with Radix UI dropdowns
  - Residential, Workplace, Industrial, GridScale, Resources
- Action buttons (Login, Contact Us) using custom Button component
- Motion animations on hover

### 2. Button (`src/components/ui/Button.tsx`)
Radix UI powered button with variants:
- `default` - Red gradient (primary CTA)
- `secondary` - Gray gradient
- `ghost` - Transparent with hover
- `link` - Text link style

Uses `class-variance-authority` for variant management.

### 3. DropdownMenu (`src/components/ui/DropdownMenu.tsx`)
Full Radix UI dropdown implementation with:
- Trigger, Content, Item components
- Checkbox and Radio items
- Sub-menus support
- Keyboard navigation
- Accessible by default

### 4. GridCard (`src/components/grid/GridCard.tsx`)
Individual grid card with:
- Video or image background (auto-detected)
- Gradient overlay for text readability
- Title and description
- Plus icon indicator for cards with children
- **3D tilt effect** on mouse hover (subtle, 3° max)

### 5. GridContainer (`src/components/grid/GridContainer.tsx`)
Grid navigation system with:
- **Nested navigation** - 3 levels deep
- **Smooth page transitions** with zoom + blur effects
- **Breadcrumb navigation** with back button
- Dynamic grid layout:
  - Level 0: 3 columns
  - Level 1+: 2×2 grid (4 items)

---

## Custom Hooks

### useTilt (`src/hooks/useTilt.ts`)
3D perspective tilt effect based on mouse position.

**Options:**
- `maxRotation`: Maximum rotation in degrees (default: 3°)
- `perspective`: CSS perspective value (default: 1200px)

**Returns:**
- `ref`: Attach to the element
- `style`: Apply to the element
- `onMouseMove`, `onMouseEnter`, `onMouseLeave`: Event handlers

### useScrollZoom (`src/hooks/useScrollZoom.ts`)
Scroll-based zoom navigation (currently disabled).

**Options:**
- `threshold`: Scroll amount to trigger transition (default: 200)
- `onZoomComplete`: Callback when zoom completes

---

## Grid Data Structure

Located in `src/lib/grid-data.ts`:

```typescript
interface GridItem {
  id: string;
  title: string;
  description?: string;
  media?: {
    type: "image" | "video";
    src: string;
    poster?: string;
  };
  children?: GridItem[]; // Sub-grid items
}
```

### Current Data Hierarchy
```
Level 0 (3 items):
├── Residential
│   ├── Solar Panels → [Mono, Poly, Thin Film, Bifacial]
│   ├── Battery Storage → [Wall, Floor, Outdoor, Modular]
│   ├── EV Charging → [Level 1, Level 2, Smart, Solar]
│   └── Monitoring → [App, Dashboard, Alerts, Reports]
├── Commercial
│   ├── Rooftop Solar → [Flat, Pitched, Carport, Canopy]
│   ├── Energy Storage → [Container, Indoor, Outdoor, Hybrid]
│   ├── Fleet Charging → [Depot, Public, Fast, Smart Grid]
│   └── Energy Management → [BMS, EMS, SCADA, Analytics]
└── Industrial
    ├── Utility Scale → [Ground, Floating, Tracking, Agri]
    ├── Grid Storage → [BESS, Pumped, Hydrogen, Thermal]
    ├── Microgrids → [Island, Connected, Hybrid, Mobile]
    └── Grid Services → [Frequency, Voltage, Peak, Arbitrage]
```

---

## Animation System

### 3D Tilt (Active)
- Subtle perspective rotation on mouse hover
- Max 3° rotation for natural feel
- Smooth 0.15s transition while moving
- Slower 0.4s transition when leaving

### Page Transitions (Active)
When navigating forward (clicking a card):
1. Current grid scales to 1.1x + blurs (8px) + fades out
2. After 300ms, content changes
3. New grid starts at 0.9x scale
4. Scales to 1x + unblurs + fades in over 400ms

When navigating back:
1. Animation reverses (zoom in first, then zoom out)

### Scroll-to-Zoom (Disabled)
- Prepared but not active
- Would allow scroll-based navigation
- To be implemented later with more refinement

---

## Styling

### globals.css
```css
@import "tailwindcss";

@theme inline {
  --font-sans: var(--font-google-sans-flex), ui-sans-serif, system-ui, sans-serif;
  --color-background: #e5e7eb;
  --color-foreground: #171717;
}

body {
  background: var(--color-background);
  color: var(--color-foreground);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### Color Palette
- Background: `#e5e7eb` (gray-200)
- Primary Red: `#fa0016`
- Text: `#171717` (stone-900)

---

## Commands

```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm run start

# Lint
npm run lint
```

---

## Git Commits

1. **Initial setup: Next.js 16 with Tailwind CSS v4 and Motion**
   - Base project setup with all dependencies

2. **Implement Figma design: Header and Hero section**
   - Header component with navigation
   - Hero section with image cards
   - Downloaded Figma assets

3. **Add Google Sans Flex font and Radix UI components**
   - Radix UI integration
   - Button and DropdownMenu components
   - Google Fonts configuration (initial)

4. **Switch to local Google Sans Flex font and add video support**
   - Local variable font
   - Video playback in hero section

5. **Grid system with 3D tilt and smooth transitions**
   - Nested grid navigation
   - useTilt hook
   - Page transition animations
   - Lucide icons integration

---

## Next Steps (Planned)

1. **Scroll-based navigation** - Re-enable with refined UX
2. **Individual card animations** - Staggered entry animations
3. **Mobile responsiveness** - Adapt grid for smaller screens
4. **Content pages** - Detail pages for leaf nodes
5. **More videos** - Different videos for each section

---

## Notes

- Figma Design: https://www.figma.com/design/dhopz4k1sXaRpUu2jLIBGl/DEV---2026?node-id=10752-98
- Video assets stored in `public/videos/`
- Images downloaded from Figma stored in `public/images/`
