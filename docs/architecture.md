# {APP_NAME} — Architecture

## Overview

{APP_NAME} is a monorepo AI SaaS application following **Harness Engineering** principles:

```
├── shared/          # Cross-platform shared logic (types, constants, utils, hooks, API, i18n)
├── packages/ui/     # Shared UI component library
├── apps/web/        # Next.js web application
├── docs/            # Architecture documentation
├── scripts/         # Automation scripts
├── tests/           # Shared tests
└── .github/         # CI/CD workflows
```

## Data Flow

```
User → Next.js App Router (apps/web)
         │
         ├── Server Component → API Route → AI Provider
         │
         ├── Client Component → shared/api/ → API Route
         │
         └── i18n → shared/utils/i18n.ts (cookie-based)
```

## Key Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Monorepo | pnpm + Turborepo | Shared code across platforms |
| i18n | Custom cookie-only (no next-intl) | Simple locale detection, no middleware |
| Shared types | @content-ai/shared | Single source of truth for types, constants, validators |
| Styling | Tailwind CSS v4 + CSS variables | Theming via CSS custom properties |

## Rebranding

To rebrand, edit `shared/constants/index.ts` — change the `BRAND` object:

```ts
export const BRAND = {
  name: 'YourBrand',
  description: 'Your meta description',
  emoji: '🚀',
  // ...
}
```
