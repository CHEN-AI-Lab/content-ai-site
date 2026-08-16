import type { Metadata } from 'next'
import { BRAND } from '@content-ai/shared'
import { getLocale, getMessages } from '@/lib/i18n-server'
import LanguageSwitcher from './language-switcher'
import "./globals.css"
import VisitTracker from "@/components/VisitTracker"

export const metadata: Metadata = {
  title: `${BRAND.name} - AI Content Generator`,
  description: BRAND.description,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [locale, msgs] = await Promise.all([getLocale(), getMessages()])

  return (
    <html lang={locale}>
      <body className="min-h-screen gradient-bg">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 glass z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl">{BRAND.emoji}</span>
              <span className="font-bold text-xl" style={{ color: 'var(--primary)' }}>
                {BRAND.name}
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a href="/generate" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--foreground)' }}>
                {msgs['nav.generate'] || 'Generate'}
              </a>
              <a href="#features" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--foreground)' }}>
                {msgs['nav.features'] || 'Features'}
              </a>
              <a href="#pricing" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--foreground)' }}>
                {msgs['nav.pricing'] || 'Pricing'}
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <LanguageSwitcher initialLocale={locale} />
              <a href="/login" className="text-sm font-medium hover:opacity-80" style={{ color: 'var(--foreground)' }}>
                {msgs['nav.login'] || 'Log In'}
              </a>
              <a href="/generate" className="btn-primary text-sm py-2 px-4 inline-block">
                {msgs['nav.try'] || 'Try Now'}
              </a>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="pt-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-20 py-10 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-xl">{BRAND.emoji}</span>
              <span className="font-bold" style={{ color: 'var(--primary)' }}>{BRAND.name}</span>
            </div>
            <p className="text-sm opacity-60">{msgs['brand.tagline'] || 'Content creation made easy'}</p>
            <p className="text-xs opacity-40 mt-4">© 2026 {BRAND.name}. All rights reserved.</p>
          </div>
        </footer>
      <VisitTracker />
      </body>
    </html>
  )
}