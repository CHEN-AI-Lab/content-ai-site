# {APP_NAME} — Agent Work Guide

## Project Structure

```
shared/             # Cross-platform: types, constants, validators, utils, hooks, API, i18n
packages/ui/        # UI components (Button, Input, Card, Badge, Spinner)
apps/web/           # Next.js web app
  src/app/          # App Router pages
  src/components/   # Web-specific components
  src/lib/          # Server-side i18n helpers
tests/              # Unit + E2E tests
docs/               # Architecture & decisions
```

## Rules

- Business logic → `shared/`
- UI components → `packages/ui/`
- Page files → `apps/web/src/app/`
- i18n messages → `shared/utils/i18n.ts` (inline)
- Brand config → `shared/constants/` (BRAND object)

## Brand Interpolation

Messages using `{name}` placeholder get `BRAND.name` injected at render site:

```tsx
{msgs['features.title']?.replace('{name}', BRAND.name)}
```

## Tech Stack

- Next.js 16 + Tailwind CSS v4 + custom i18n
- pnpm monorepo + Turborepo
- Vitest + Playwright

## Commands

```bash
cd apps/web && pnpm dev     # Start dev server
pnpm build                  # Build all
pnpm test                   # Run tests
pnpm typecheck              # TypeScript check
```
