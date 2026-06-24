/* ============================================================
 * Shared Hooks — Cross-platform React hooks
 * ============================================================ */

'use client'

import { useState, useCallback, useEffect } from 'react'
import { copyToClipboard, getMessagesForLocale } from '../utils'
import type { Locale } from '../types'

/** Hook: clipboard copy with feedback */
export function useCopy() {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(async (text: string) => {
    const ok = await copyToClipboard(text)
    if (ok) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
    return ok
  }, [])

  return { copied, copy }
}

/** Hook: detect locale from cookie (cross-platform) */
export function useLocale(): Locale {
  const [locale, setLocale] = useState<Locale>('zh-CN')

  useEffect(() => {
    const match = document.cookie.match(/NEXT_LOCALE=([^;]+)/)
    const val = match?.[1] as Locale | undefined
    if (val === 'en' || val === 'zh-CN') {
      setLocale(val)
    }
  }, [])

  return locale
}

/** Hook: switch locale */
export function useLocaleSwitch() {
  const [locale, setLocale_] = useState<Locale>('zh-CN')

  useEffect(() => {
    const match = document.cookie.match(/NEXT_LOCALE=([^;]+)/)
    const val = match?.[1] as Locale | undefined
    if (val === 'en' || val === 'zh-CN') setLocale_(val)
  }, [])

  const setLocale = useCallback((l: Locale) => {
    document.cookie = `NEXT_LOCALE=${l};path=/;max-age=${365 * 24 * 60 * 60}`
    setLocale_(l)
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }, [])

  return { locale, setLocale }
}

type Messages = Record<string, string>

/** Hook: get messages for the current locale */
export function useMessages(): Messages {
  const [msgs] = useState<Messages>(() => {
    if (typeof document === 'undefined') return {}
    const match = document.cookie.match(/NEXT_LOCALE=([^;]+)/)
    const locale = match?.[1] || 'zh-CN'
    return getMessagesForLocale(locale)
  })
  return msgs
}