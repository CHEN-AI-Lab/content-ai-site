#!/usr/bin/env bash
set -euo pipefail

echo "=== Deploy ==="
echo "Target: Vercel"
echo ""
echo "Prerequisites:"
echo "  1. Push to main branch (auto-deploys to Vercel)"
echo "  2. Set env vars in Vercel dashboard"
echo ""
echo "Environment variables needed:"
cat .env.example 2>/dev/null || echo "  (see .env.example)"
echo ""
echo "Run: git push origin main"
