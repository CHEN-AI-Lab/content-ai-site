/* ============================================================
 * Shared Types — Cross-platform type definitions
 * ============================================================ */

export type Platform = {
  id: string
  name: string
  nameKey: string         // i18n key
  icon: string
  color: string
  placeholderKey: string  // i18n key for input placeholder
}

export type WritingStyle = {
  id: string
  nameKey: string         // i18n key
}

export type Template = {
  id: string
  titleKey: string
  descKey: string
}

export type ContentRecord = {
  id: string
  platformId: string
  content: string
  topic: string
  createdAt: string
}

export type GenerationInput = {
  platformId: string
  styleId: string
  topic: string
  keywords: string
}

export type GenerationResult = {
  content: string
  platformId: string
  styleId: string
}

export type Locale = 'zh-CN' | 'en'

export type PlanTier = 'free' | 'pro'

export type NavItem = {
  href: string
  labelKey: string
}