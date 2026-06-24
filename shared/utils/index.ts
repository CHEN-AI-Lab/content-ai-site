/* ============================================================
 * Shared Utils — Pure utility functions
 * ============================================================ */

import { PLATFORMS, WRITING_STYLES } from '../constants'
import type { Locale } from '../types'

export * from './i18n'

/** Generate a unique ID */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

/** Truncate text to max length */
export function truncate(text: string, max = 100): string {
  return text.length > max ? text.slice(0, max) + '...' : text
}

/** Format ISO date string to locale display */
export function formatDate(iso: string, locale: Locale = 'zh-CN'): string {
  const d = new Date(iso)
  if (isNaN(d.getTime())) return ''
  try {
    return d.toLocaleDateString(locale === 'zh-CN' ? 'zh-CN' : 'en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
  } catch {
    return ''
  }
}

/** Get platform by ID */
export function getPlatform(id: string) {
  return PLATFORMS.find(p => p.id === id) ?? PLATFORMS[0]
}

/** Get style by ID */
export function getStyle(id: string) {
  return WRITING_STYLES.find(s => s.id === id) ?? WRITING_STYLES[0]
}

/** Copy text to clipboard (works in both web and mobile) */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    }
    // Fallback for older browsers
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    return true
  } catch {
    return false
  }
}

/** Debounce function */
export function debounce<T extends (...args: unknown[]) => unknown>(fn: T, ms: number) {
  let timer: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), ms)
  }
}
