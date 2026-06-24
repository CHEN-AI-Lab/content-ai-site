#!/usr/bin/env bash
# Code placement check — runs all 6 Hard Rule 4 checks
set -euo pipefail

echo "=== Check 1: Misplaced hooks/lib/ directories ==="
find apps -path '*/node_modules' -prune -o -path '*/.next' -prune -o -type f -print | grep -E '(hooks|lib)/' || echo "✓ Clean"

echo ""
echo "=== Check 2: Inline constants in page files ==="
grep -rn "const .* = \[" apps/*/src/**/page.tsx 2>/dev/null || echo "✓ Clean"

echo ""
echo "=== Check 3: Pure functions in API route handlers ==="
grep -rn "^function \|^const .* = (" apps/*/src/app/api/*/route.ts 2>/dev/null || echo "✓ Clean (or no API routes)"

echo ""
echo "=== Check 4: Locale config in apps/ root ==="
ls apps/*/next-intl.config.ts 2>/dev/null && echo "⚠ Found" || echo "✓ Clean (no next-intl.config.ts — good)"

echo ""
echo "=== Check 5: console.log in API routes ==="
grep -rn "console\.log" apps/*/src/app/api/ 2>/dev/null || echo "✓ Clean"

echo ""
echo "=== Check 6: Imports from shared/ ==="
grep -rn "from 'shared'" apps/*/src/**/page.tsx apps/*/src/**/route.ts 2>/dev/null || echo "ℹ Using @content-ai/shared workspace alias"

echo ""
echo "=== Checks complete ==="
