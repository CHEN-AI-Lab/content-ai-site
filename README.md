# {APP_NAME}

> Generative content tool — AI-powered social media content generator supporting Xiaohongshu, Douyin, Twitter, Instagram, and WeChat.

## Quick Start

```bash
pnpm install
cd apps/web && pnpm dev
```

## Project Structure

```
├── shared/             # Cross-platform shared code
│   ├── types/          # TypeScript type definitions
│   ├── constants/      # Shared constants and configs (BRAND, platforms, etc.)
│   ├── validators/     # Zod validation schemas
│   ├── utils/          # Pure utility functions + i18n
│   ├── api/            # API client
│   └── hooks/          # Shared React hooks
├── packages/ui/        # UI component library
├── apps/web/           # Next.js web application
├── docs/               # Architecture & decisions
├── scripts/            # Automation scripts
├── tests/              # Unit & E2E tests
└── .github/            # CI/CD workflows
```

## Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start all dev servers |
| `pnpm build` | Build all packages |
| `pnpm test` | Run all tests |
| `pnpm lint` | Lint all packages |
| `pnpm typecheck` | TypeScript check |

## Rebranding

Edit `shared/constants/index.ts` — change the `BRAND` object:

```ts
export const BRAND = {
  name: 'YourBrand',
  emoji: '🚀',
  description: 'Your meta description',
  // ...
}
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **i18n**: Custom cookie-based (zh-CN + en)
- **Monorepo**: pnpm + Turborepo
- **Testing**: Vitest + Playwright

## Environment Variables

Copy `.env.example` to `.env` and fill in your values.
