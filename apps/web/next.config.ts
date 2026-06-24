import type { NextConfig } from "next"

// Note: turbopack.root intentionally omitted.
// Setting it here breaks monorepo resolution because Next.js 16
// misidentifies the project directory. The harmless workspace
// root warning is acceptable.

const nextConfig: NextConfig = {}

export default nextConfig