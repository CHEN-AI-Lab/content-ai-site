#!/usr/bin/env bash
set -euo pipefail

# Make scripts executable
chmod +x scripts/*.sh

echo "=== ContentAI Setup ==="

# Check Node.js
if ! command -v node &>/dev/null; then
  echo "❌ Node.js is not installed"
  exit 1
fi
echo "✓ Node $(node -v)"

# Check pnpm
if ! command -v pnpm &>/dev/null; then
  echo "❌ pnpm not found — installing..."
  npm install -g pnpm
fi
echo "✓ pnpm $(pnpm -v)"

# Install
echo ""
echo "→ Installing dependencies..."
pnpm install

echo ""
echo "=== Setup complete! ==="
echo "  Dev:  cd apps/web && pnpm dev"
echo "  Test: pnpm test"
echo "  Build: pnpm build"