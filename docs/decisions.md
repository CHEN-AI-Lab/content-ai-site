# {APP_NAME} — Decision Log

## 2026-06-03: Monorepo Migration

**Context**: Migrated from flat Next.js app to pnpm monorepo with shared/ and packages/ui/
**Decision**: Follow Harness Engineering principles with shared/ as the cross-platform core
**Consequence**: All shared logic (types, constants, utils, hooks, API, i18n) isolated in shared/ package

## 2026-06-03: i18n Approach

**Context**: Need bilingual support (zh-CN + en)
**Decision**: Custom cookie-only scheme (no next-intl). Messages in `shared/utils/i18n.ts`, `{name}` placeholder for brand name interpolation
**Consequence**: Locale stored in cookie, page reloads on switch, brand name injected via BRAND.name constant

## 2026-06-03: Brand Theming

**Context**: Need configurable brand identity
**Decision**: All brand properties in BRAND constant (shared/constants/), emoji/name/description/css vars
**Consequence**: Rebrand by editing single file — shared/constants/index.ts
