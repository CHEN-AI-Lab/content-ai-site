'use client'

import React from 'react'

interface LanguageSwitcherProps {
  currentLocale: string
  onSwitch: (locale: string) => void
}

export function LanguageSwitcher({ currentLocale, onSwitch }: LanguageSwitcherProps) {
  const next = currentLocale === 'zh-CN' ? 'en' : 'zh-CN'
  const label = currentLocale === 'zh-CN' ? 'EN' : '中文'

  return (
    <button
      onClick={() => onSwitch(next)}
      className="text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
      aria-label={`Switch to ${next}`}
    >
      {label}
    </button>
  )
}
