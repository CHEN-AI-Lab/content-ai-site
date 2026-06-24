/* ============================================================
 * Shared Constants — All enum-like configs and seed data
 * ============================================================ */

import type { Platform, WritingStyle, Template, NavItem, Locale } from '../types'

// ─── Locale ───
export const LOCALES: Locale[] = ['zh-CN', 'en']
export const DEFAULT_LOCALE: Locale = 'zh-CN'

// ─── Platforms ───
export const PLATFORMS: Platform[] = [
  { id: 'xiaohongshu', name: 'Xiaohongshu', nameKey: 'platform.xiaohongshu', icon: '📕', color: '#FE2C55', placeholderKey: 'platform.placeholder.xiaohongshu' },
  { id: 'douyin',      name: 'Douyin',      nameKey: 'platform.douyin',      icon: '🎵', color: '#1E1E1E', placeholderKey: 'platform.placeholder.douyin' },
  { id: 'twitter',     name: 'Twitter',     nameKey: 'platform.twitter',     icon: '𝕏',  color: '#000',   placeholderKey: 'platform.placeholder.twitter' },
  { id: 'instagram',   name: 'Instagram',   nameKey: 'platform.instagram',   icon: '📸', color: '#E4405F',placeholderKey: 'platform.placeholder.instagram' },
  { id: 'weixin',      name: 'WeChat',      nameKey: 'platform.weixin',      icon: '💬', color: '#07C160',placeholderKey: 'platform.placeholder.weixin' },
]

// ─── Writing Styles ───
export const WRITING_STYLES: WritingStyle[] = [
  { id: 'normal',       nameKey: 'style.normal' },
  { id: 'professional', nameKey: 'style.professional' },
  { id: 'humor',        nameKey: 'style.humor' },
  { id: 'planting',     nameKey: 'style.planting' },
  { id: 'review',       nameKey: 'style.review' },
]

// ─── Templates ───
export const TEMPLATES: Template[] = [
  { id: 'viral-title',  titleKey: 'template.viral.title',  descKey: 'template.viral.desc' },
  { id: 'seeding',      titleKey: 'template.seeding.title', descKey: 'template.seeding.desc' },
  { id: 'knowledge',    titleKey: 'template.knowledge.title',descKey: 'template.knowledge.desc' },
  { id: 'trending',     titleKey: 'template.trending.title',descKey: 'template.trending.desc' },
]

// ─── Navigation ───
export const NAV_ITEMS: NavItem[] = [
  { href: '/generate', labelKey: 'nav.generate' },
  { href: '#features', labelKey: 'nav.features' },
  { href: '#pricing',  labelKey: 'nav.pricing' },
]

// ─── Plans ───
export const FREE_DAILY_LIMIT = 3
export const PRO_MONTHLY_PRICE = 29

// ─── Brand — Everything a new user needs to change to rebrand ───
export const BRAND = {
  /** Display name — appears in header, footer, page title */
  name: 'ContentAI',
  /** Short meta description for <head> */
  description: 'Generate viral social media content with AI',
  /** Emoji/icon before the name in header */
  emoji: '✨',
  /** Tagline — displayed in footer, uses i18n key */
  taglineKey: 'brand.tagline',
  /** Feature section title — uses {name} placeholder, auto-replaced */
  featuresTitleKey: 'features.title',
  // ── Theme colors (can be overridden via CSS variables in layout) ──
  primaryColor: '#FF6B6B',
  secondaryColor: '#4ECDC4',
  accentColor: '#FFE66D',
  backgroundColor: '#FFF9F5',
  foregroundColor: '#2D3436',
} as const
