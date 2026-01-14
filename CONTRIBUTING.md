# GridPower Development Guidelines

This document outlines the development practices and conventions for the GridPower website project.

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion)
- **UI Primitives**: Radix UI
- **Icons**: Lucide React
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint 9 + Prettier

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles + Tailwind theme
├── components/
│   ├── ui/                 # Reusable UI components (Button, etc.)
│   ├── grid/               # Grid system components
│   └── layout/             # Layout components (Header, Footer)
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities and data
├── fonts/                  # Local font files
└── test/                   # Test utilities and setup
```

## Development Commands

```bash
# Development
npm run dev          # Start dev server with Turbopack

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
npm run format       # Format code with Prettier
npm run format:check # Check formatting without writing
npm run typecheck    # Run TypeScript type checking

# Testing
npm run test         # Run tests in watch mode
npm run test:run     # Run tests once
npm run test:coverage # Run tests with coverage report

# Validation (run before committing)
npm run validate     # typecheck + lint + test

# Production
npm run build        # Create production build
npm run start        # Start production server
```

## Code Quality Standards

### TypeScript

- Use strict TypeScript settings
- Define explicit types for props, function parameters, and return values
- Avoid `any` type - use `unknown` if type is truly unknown
- Use type inference where the type is obvious

### Component Guidelines

1. **File naming**: PascalCase for components (`Button.tsx`)
2. **One component per file** for main components
3. **Use functional components** with hooks
4. **Props interface**: Define props interface above component

```tsx
interface ButtonProps {
  variant?: "default" | "secondary" | "ghost";
  children: React.ReactNode;
}

export function Button({ variant = "default", children }: ButtonProps) {
  // ...
}
```

### Styling with Tailwind CSS

- Use the `cn()` utility from `@/lib/utils` for conditional classes
- Keep class strings readable - split long class lists across lines if needed
- Use CSS variables defined in `globals.css` for theme values
- Avoid inline styles unless dynamically calculated

```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-classes", isActive && "active-classes")} />;
```

### Radix UI Components

- Wrap Radix primitives in custom components for consistent styling
- Use the `asChild` pattern for polymorphic components
- Always include proper accessibility attributes

### Animations with Motion

- Keep animations subtle and purposeful
- Use the `useTilt` hook for 3D effects (max 3 degrees rotation)
- Prefer CSS transitions for simple hover effects
- Use Motion for complex orchestrated animations

## Testing Standards

### Test File Location

- Place test files next to the code they test
- Name test files with `.test.tsx` or `.test.ts` suffix

### Test Structure

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@/test/test-utils";
import { Component } from "./Component";

describe("Component", () => {
  it("renders correctly", () => {
    render(<Component />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
```

### Testing Best Practices

1. Use `@/test/test-utils` instead of direct `@testing-library/react` imports
2. Query by role, label, or test ID - avoid querying by class or tag
3. Test behavior, not implementation details
4. Write tests for:
   - Component rendering with different props
   - User interactions
   - Edge cases and error states

## Git Workflow

### Pre-commit Hooks

Husky runs lint-staged on commit which:

- Runs ESLint with auto-fix on JS/TS files
- Runs Prettier on all staged files

### Commit Messages

Follow conventional commit format:

```
type(scope): description

[optional body]
```

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Formatting, no code change
- `refactor`: Code restructuring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Branch Naming

```
feature/description
fix/description
refactor/description
```

## Adding New Features

1. Create a new branch from `main`
2. Write tests for new functionality
3. Implement the feature
4. Run `npm run validate` to ensure everything passes
5. Commit with descriptive message
6. Create pull request

## Troubleshooting

### Common Issues

**Font warnings in console**

- Ensure fonts are loaded via `next/font/local` in `layout.tsx`
- Variable fonts should have proper weight ranges defined

**Tests failing with "ResizeObserver not defined"**

- Check that `src/test/setup.tsx` has the ResizeObserver mock

**ESLint conflicts with Prettier**

- The `eslint-config-prettier` package disables conflicting rules
- Run `npm run format` before `npm run lint` if you see style errors

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Motion Documentation](https://motion.dev/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs)
- [Vitest Documentation](https://vitest.dev/guide/)
