import { cookies } from 'next/headers'
import { getMessagesForLocale, resolveLocale } from '@content-ai/shared'
import type { Messages } from '@content-ai/shared'

/**
 * Get the current locale from NEXT_LOCALE cookie (server-side).
 */
export async function getLocale(): Promise<string> {
  const cookieStore = await cookies()
  return resolveLocale(cookieStore.get('NEXT_LOCALE')?.value)
}

/**
 * Get messages for the current locale (server-side).
 */
export async function getMessages(): Promise<Messages> {
  const locale = await getLocale()
  return getMessagesForLocale(locale)
}