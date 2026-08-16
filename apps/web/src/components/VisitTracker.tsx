'use client'

import { useVisitTracking } from '@content-ai/shared/hooks/useVisitTracking'

export default function VisitTracker() {
  useVisitTracking('content-ai-site')
  return null
}
