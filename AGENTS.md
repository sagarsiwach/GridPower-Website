# GridPower - Agent Instructions

## Build & Run

- Dev server: `npm run dev`
- Production build: `npm run build`
- Start production: `npm start`

## Validation (Run After Every Change)

These commands must pass before committing:

```bash
npm run typecheck     # TypeScript check
npm run lint          # ESLint check
npm run build         # Build check
```

Or run all at once:
```bash
npm run validate
```

## Tech Stack

| Layer | Choice | Version |
|-------|--------|---------|
| Framework | Next.js | 16.1.1 |
| Styling | Tailwind CSS | v4 |
| Language | TypeScript | 5.x |
| Components | ShadCN + Radix UI | Latest |
| Animation | Motion.dev | 12.x |
| CMS | Sanity | TBD |

## Code Patterns

### Component Structure
- Use `cn()` for conditional classes (from `@/lib/utils`)
- Use `next/image` for all images
- Use Radix UI for interactive primitives (Dialog, Dropdown, etc.)
- Mobile-first responsive design

### File Organization
```
src/
├── app/                 # Next.js App Router
├── components/
│   ├── ui/              # Base UI components (Button, Card, etc.)
│   ├── sections/        # Page sections (Hero, Features, etc.)
│   └── layout/          # Header, Footer, Nav
└── lib/
    └── utils.ts         # cn() utility
```

### Naming Conventions
- Components: PascalCase (`HeroSection.tsx`)
- Utilities: camelCase (`formatDate.ts`)
- CSS: Tailwind classes only, no custom CSS unless necessary

## Design Constraints

Follow these resources (in `docs/` folder):
1. **ui-skills.md** - MUST/SHOULD/NEVER constraints for building UI
2. **ui-ux-guidelines.md** - Comprehensive accessibility and UX rules

### Key Rules
- MUST use Tailwind defaults unless custom tokens defined
- MUST use accessible component primitives (Radix)
- MUST add aria-label to icon-only buttons
- NEVER animate layout properties (width, height, top, left)
- NEVER use h-screen, use h-dvh
- MUST respect prefers-reduced-motion

## Figma Reference

- Design file: https://www.figma.com/design/dhopz4k1sXaRpUu2jLIBGl/DEV---2026
- Homepage: node-id=10869-3597

## Git Workflow

- Commit after each completed task
- Commit message format: `feat: description` or `fix: description`
- Push after each commit

## Testing

```bash
npm run test        # Watch mode
npm run test:run    # Single run
npm run test:coverage
```
