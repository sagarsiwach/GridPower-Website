# Web Interface Guidelines

Review files for compliance with Web Interface Guidelines.

**Source:** https://github.com/vercel-labs/web-interface-guidelines

## Rules

### Accessibility
- Icon-only buttons need `aria-label`.
- Interactive elements need keyboard handlers.
- Use semantic HTML before ARIA.
- Headings hierarchical `<h1>`–`<h6>`.

### Focus States
- Interactive elements need visible focus: `focus-visible:ring-*`.
- Never `outline-none` without focus replacement.

### Forms
- Inputs need `autocomplete` and meaningful `name`.
- Use correct `type` and `inputmode`.
- Labels clickable (`htmlFor` or wrapping control).

### Animation
- Honor `prefers-reduced-motion`.
- Animate `transform`/`opacity` only.

### Typography
- `…` not `...`.
- Curly quotes `" "` not straight `"`.

### Content Handling
- Text containers handle long content.
- Handle empty states.

### Images
- `<img>` needs explicit `width` and `height`.
- Below-fold images: `loading="lazy"`.

### Performance
- Large lists (>50 items): virtualize.
- No layout reads in render.

### Navigation & State
- URL reflects state.
- Links use `<a>`/`<Link>`.

### Touch & Interaction
- `touch-action: manipulation`.
- `-webkit-tap-highlight-color` set intentionally.

### Safe Areas & Layout
- Full-bleed layouts need `env(safe-area-inset-*)`.
- Avoid unwanted scrollbars.

### Dark Mode & Theming
- `color-scheme: dark` on `<html>`.
- `<meta name="theme-color">` matches page background.

### Locale & i18n
- Dates/times: use `Intl.DateTimeFormat`.
- Numbers/currency: use `Intl.NumberFormat`.

### Hydration Safety
- Inputs with `value` need `onChange`.
- Guard against hydration mismatch.

### Hover & Interactive States
- Buttons/links need `hover:` state.
- Interactive states increase contrast.

### Content & Copy
- Active voice: "Install the CLI".
- Title Case for headings/buttons.

### Anti-patterns (flag these)
- `user-scalable=no`.
- `onPaste` with `preventDefault`.
- `transition: all`.

## Output Format

Group by file. Use `file:line` format. Terse findings.

Example:
```
## src/Button.tsx

src/Button.tsx:42 - icon button missing aria-label
src/Button.tsx:18 - input lacks label
src/Button.tsx:55 - animation missing prefers-reduced-motion
src/Button.tsx:67 - transition: all → list properties

## src/Modal.tsx

src/Modal.tsx:12 - missing overscroll-behavior: contain
src/Modal.tsx:34 - "..." → "…"

## src/Card.tsx

✓ pass
```
