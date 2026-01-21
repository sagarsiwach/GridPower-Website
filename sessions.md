# GridPower Website - Development Sessions

## Session 5 - January 21, 2026

### Objective

Implement responsive Header component for 1440px and 1920px breakpoints, and configure JetBrains Mono font using Next.js font system.

---

### Tasks

- [x] Configure JetBrains Mono font from Google Fonts
- [x] Add custom Tailwind breakpoints (3xl: 1440px, 4xl: 1920px)
- [x] Update Header component with responsive styles for larger screens
- [x] Scale logo, buttons, and navigation gaps for 1440px/1920px

---

### Font Configuration

**JetBrains Mono Added:**

| Property       | Value                                |
| -------------- | ------------------------------------ |
| Source         | `next/font/google`                   |
| CSS Variable   | `--font-jetbrains-mono`              |
| Tailwind Class | `font-mono`                          |
| Usage          | Navigation buttons, uppercase labels |

**Files Modified:**

- `src/app/layout.tsx` - Added JetBrains_Mono import and variable
- `src/app/globals.css` - Added `--font-mono` to theme

---

### Custom Breakpoints

Added to `src/app/globals.css`:

```css
@theme inline {
  --breakpoint-3xl: 1440px;
  --breakpoint-4xl: 1920px;
}
```

---

### Header Responsive Updates

| Element            | 1024px (lg) | 1440px (3xl) | 1920px (4xl) |
| ------------------ | ----------- | ------------ | ------------ |
| Header height      | h-14        | h-16         | h-[72px]     |
| Container padding  | px-2        | px-6         | px-8         |
| Nav item gap       | gap-0.5     | gap-7        | gap-9        |
| Button padding     | px-2 py-1   | px-3 py-1.5  | px-4 py-2    |
| Button text        | text-xs     | text-sm      | text-sm      |
| Logo icon          | size-8      | size-10      | size-12      |
| Logo text          | text-xl     | text-2xl     | text-3xl     |
| Logo gap           | gap-2       | gap-3        | gap-4        |
| Action buttons gap | gap-0.5     | gap-2        | gap-3        |

---

### Files Modified

| File                           | Changes                                           |
| ------------------------------ | ------------------------------------------------- |
| `src/app/layout.tsx`           | Added JetBrains Mono font import and CSS variable |
| `src/app/globals.css`          | Added `--font-mono` and custom breakpoints        |
| `src/components/ui/Header.tsx` | Responsive styles for 1440px/1920px               |

---

### Figma Reference

| Breakpoint | Node ID    | Width  |
| ---------- | ---------- | ------ |
| 1440px     | 10913:4528 | 1440px |
| 1920px     | 10913:4594 | 1920px |

---

## Session 4 - January 21, 2026

### Objective

Explore Figma Code Connect integration for mapping design components to code.

---

### Tasks

- [x] Attempt Figma Code Connect mapping via MCP tools
- [x] Verify Figma MCP connection and authentication
- [x] Get design context for Header component
- [ ] Create Code Connect mapping (blocked - requires main component, not instance)

---

### Figma Code Connect Investigation

**Goal:** Map Figma design nodes to code components using Code Connect.

**Figma URL:** `https://www.figma.com/design/dhopz4k1sXaRpUu2jLIBGl/DEV---2026?node-id=10913-4540`

**Findings:**

1. **MCP Tools Available:**
   - `plugin_figma_figma/add_code_connect_map` - Create mappings
   - `plugin_figma_figma/get_code_connect_map` - Get existing mappings
   - `plugin_figma_figma/get_design_context` - Get design code context
   - `plugin_figma_figma/get_metadata` - Get node structure

2. **Issue Encountered:**
   - The selected node (`10913:4540`) is a "Phone" frame containing component instances
   - The Header at node `10913:4541` is an **instance**, not the main component
   - Code Connect requires mapping to **main component definitions**, not instances
   - `add_code_connect_map` returns "Invalid tool call" for instances

3. **Authenticated User:** Sagar Siwach (sagar@classicgroup.asia)

4. **Design Context Retrieved:**
   - Header component has Login button, Register button, and logo
   - Mobile breakpoint layout (440px width)
   - Uses JetBrains Mono font, red gradient buttons

**Next Steps for Code Connect:**

- Find the main Header component in the Figma library
- Or create components as main components (not instances) before mapping
- Consider creating a `figma.config.json` manual mapping file

---

### Components Explored

| Component | Location                       | Figma Node            |
| --------- | ------------------------------ | --------------------- |
| Header    | `src/components/ui/Header.tsx` | 10913:4541 (instance) |

---

## Session 3 - January 20, 2026

### Objective

Complete development environment setup with Sanity CMS, skills installation, and Ralph autonomous coding structure.

---

### Tasks

- [x] Switch to v2 branch
- [x] Add Ralph structure (AGENTS.md, PROMPT_plan.md, PROMPT_build.md, loop.sh)
- [x] Copy documentation to docs/ folder
- [x] Switch from npm to Bun (package manager)
- [x] Install Sanity CMS (next-sanity, @sanity/image-url)
- [x] Configure Sanity + Next.js integration
- [x] Install Storybook 10.1.11 with Next.js Vite framework
- [x] Add Agent Skills documentation
- [x] Add Web Interface Guidelines documentation
- [x] Fix test setup (jest-dom matchers)
- [ ] Create specs/ files
- [ ] Add Figma screenshots for breakpoints

---

### Tech Stack (Final)

| Layer        | Choice       | Version | Notes                     |
| ------------ | ------------ | ------- | ------------------------- |
| Framework    | Next.js      | 16.1.1  | App Router, Turbopack     |
| Styling      | Tailwind CSS | v4.1    | @tailwindcss/postcss      |
| Language     | TypeScript   | 5.9.3   | Strict mode               |
| Components   | Radix UI     | Latest  | Accessible primitives     |
| Animation    | Motion.dev   | 12.27.2 | Not Framer Motion         |
| CMS          | Sanity       | 9.12.3  | next-sanity integration   |
| Testing      | Vitest       | 4.0.17  | + React Testing Library   |
| Storybook    | Storybook    | 10.1.11 | Component development     |
| Pkg Manager  | Bun          | 1.3.6   | Fast, replaces npm        |
| Context/Docs | Context7 MCP | -       | For documentation lookups |

---

### Skills Reference

| Skill        | Commands                                                                      | Purpose                                |
| ------------ | ----------------------------------------------------------------------------- | -------------------------------------- |
| Agent Skills | `/react-best-practices`, `/web-design-guidelines`, `/vercel-deploy-claimable` | Performance, accessibility, deployment |
| UI Skills    | `/ui-skills`, `/ui-skills <file>`                                             | Constraints and review                 |
| RAMS         | `/rams`, `/rams <file>`                                                       | Accessibility audit                    |

---

### Sanity + Next.js Integration Strategy

**Architecture:**

```
gridpower/
├── src/                    # Next.js app
│   ├── app/
│   ├── components/
│   └── sanity/             # Sanity client & queries
│       ├── client.ts       # Sanity client config
│       ├── queries.ts      # GROQ queries
│       └── types.ts        # Generated types
└── sanity/                 # Sanity Studio (optional: can be separate)
    ├── schemas/
    └── sanity.config.ts
```

**Integration Pattern:**

1. Use `next-sanity` for client-side fetching
2. Use Sanity's Content Lake API for server components
3. Enable draft mode for preview
4. Use `@sanity/image-url` for image optimization

---

### Files Added This Session

| File                               | Purpose                                  |
| ---------------------------------- | ---------------------------------------- |
| `AGENTS.md`                        | Agent instructions for autonomous coding |
| `PROMPT_plan.md`                   | Planning prompt for Ralph                |
| `PROMPT_build.md`                  | Build prompt for Ralph                   |
| `loop.sh`                          | Ralph execution script                   |
| `docs/ui-skills.md`                | UI constraints reference                 |
| `docs/ui-ux-guidelines.md`         | Design guidelines                        |
| `docs/agent-skills.md`             | Vercel agent skills                      |
| `docs/rams.md`                     | Accessibility review methodology         |
| `docs/ralph-playbook.md`           | Ralph orchestration guide                |
| `docs/project-overview.md`         | Project overview and milestones          |
| `docs/web-interface-guidelines.md` | Web interface rules                      |
| `src/sanity/`                      | Sanity CMS client + queries              |
| `src/stories/`                     | Storybook stories                        |
| `.storybook/`                      | Storybook configuration                  |
| `.env.example`                     | Environment variables template           |

---

### Commands Reference

```bash
# Development
bun run dev              # Start Next.js dev server
bun run storybook        # Start Storybook on port 6006

# Validation
bun run typecheck        # TypeScript check
bun run lint             # ESLint
bun run test             # Vitest watch mode
bun run test:run         # Vitest single run
bun run validate         # All checks

# Build
bun run build            # Production build
bun run build-storybook  # Build Storybook
```

---

### Git Commits

7. **feat: add Ralph autonomous coding structure**
   - Added AGENTS.md, PROMPT files, loop.sh
   - Copied documentation to docs/
   - Pushed to v2 branch

---

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

| Package                  | Version | Purpose                                     |
| ------------------------ | ------- | ------------------------------------------- |
| Next.js                  | 16.1.1  | React framework with App Router & Turbopack |
| React                    | 19.2.3  | UI library                                  |
| Tailwind CSS             | v4      | Utility-first CSS framework                 |
| Motion                   | 12.26.2 | Animation library (Framer Motion)           |
| Radix UI                 | latest  | Accessible UI primitives                    |
| lucide-react             | 0.562.0 | Icon library                                |
| clsx                     | 2.1.1   | Conditional className utility               |
| tailwind-merge           | 3.4.0   | Merge Tailwind classes without conflicts    |
| class-variance-authority | latest  | Component variant management                |

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

## Session 2 - January 14, 2026

### Overview

Set up a robust development protocol with testing, linting, formatting, and git hooks to ensure code quality and maintainability as the project scales.

---

## Development Protocol Setup

### Testing Framework

**Vitest + React Testing Library**

| Package                   | Purpose                               |
| ------------------------- | ------------------------------------- |
| vitest                    | Fast test runner compatible with Vite |
| @testing-library/react    | React component testing utilities     |
| @testing-library/jest-dom | Custom DOM matchers                   |
| @vitejs/plugin-react      | React plugin for Vite                 |
| jsdom                     | DOM environment for tests             |

**Configuration:** `vitest.config.ts`

- Environment: jsdom
- Setup file: `src/test/setup.tsx`
- Path alias: `@/` → `./src`

**Test Setup (`src/test/setup.tsx`):**

- Auto-cleanup after each test
- Mock for `next/navigation` (useRouter, usePathname, useSearchParams)
- Mock for `next/image`
- Mock for ResizeObserver
- Mock for matchMedia

**Test Utils (`src/test/test-utils.tsx`):**

- Custom render function with provider wrapper
- Re-exports all testing-library utilities

### Code Quality Tools

**Prettier**

- Config: `.prettierrc`
- Ignore: `.prettierignore`
- Plugin: `prettier-plugin-tailwindcss` for class sorting

**ESLint (Enhanced)**

- Config: `eslint.config.mjs`
- Extends: `eslint-config-next`, `eslint-config-prettier`
- Rules:
  - TypeScript: no-unused-vars (warn), no-explicit-any (warn)
  - React: hooks rules
  - General: no-console (warn), prefer-const, no-var

### Git Hooks

**Husky + lint-staged**

- Pre-commit hook: `.husky/pre-commit`
- Config: `.lintstagedrc`

**Pre-commit runs:**

1. ESLint with auto-fix on `*.{js,jsx,ts,tsx}`
2. Prettier on all staged files

---

## NPM Scripts Added

```bash
# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # ESLint with auto-fix
npm run format       # Format with Prettier
npm run format:check # Check formatting

# Testing
npm run test         # Watch mode
npm run test:run     # Single run
npm run test:coverage # With coverage report

# Type Checking
npm run typecheck    # tsc --noEmit

# Full Validation
npm run validate     # typecheck + lint + test:run
```

---

## Example Tests Created

### `src/lib/utils.test.ts`

Tests for the `cn()` utility function:

- Merges class names
- Handles conditional classes
- Handles false conditions
- Merges conflicting Tailwind classes correctly
- Handles arrays of classes

### `src/components/ui/Button.test.tsx`

Tests for the Button component:

- Renders with default variant
- Renders with secondary variant
- Renders as child element with asChild
- Disabled state works correctly

---

## Documentation

**CONTRIBUTING.md** created with:

- Tech stack overview
- Project structure
- Development commands
- Code quality standards (TypeScript, components, styling)
- Testing best practices
- Git workflow (commits, branches)
- Troubleshooting guide
- Resource links

---

## Files Created/Modified

### New Files

| File                                | Purpose                   |
| ----------------------------------- | ------------------------- |
| `vitest.config.ts`                  | Vitest configuration      |
| `src/test/setup.tsx`                | Test environment setup    |
| `src/test/test-utils.tsx`           | Custom render utilities   |
| `src/lib/utils.test.ts`             | Utility function tests    |
| `src/components/ui/Button.test.tsx` | Button component tests    |
| `.prettierrc`                       | Prettier configuration    |
| `.prettierignore`                   | Prettier ignore patterns  |
| `.lintstagedrc`                     | lint-staged configuration |
| `.husky/pre-commit`                 | Pre-commit hook           |
| `CONTRIBUTING.md`                   | Development guidelines    |

### Modified Files

| File                         | Changes                                 |
| ---------------------------- | --------------------------------------- |
| `package.json`               | Added scripts and dev dependencies      |
| `eslint.config.mjs`          | Enhanced rules and prettier integration |
| `src/hooks/useScrollZoom.ts` | Fixed impure function lint error        |

---

## Validation Results

All checks pass:

- ✅ TypeScript: No errors
- ✅ ESLint: No errors or warnings
- ✅ Tests: 9 tests passing (2 test files)
  - `utils.test.ts`: 5 tests
  - `Button.test.tsx`: 4 tests

---

## Git Commits

6. **Add grid navigation system and development protocol**
   - Nested grid navigation with 3D tilt effects
   - Vitest testing framework setup
   - Husky pre-commit hooks with lint-staged
   - Prettier and enhanced ESLint configuration
   - CONTRIBUTING.md documentation
   - useTilt and useScrollZoom custom hooks

---

## Notes

- Figma Design: https://www.figma.com/design/dhopz4k1sXaRpUu2jLIBGl/DEV---2026?node-id=10752-98
- Video assets stored in `public/videos/`
- Images downloaded from Figma stored in `public/images/`
