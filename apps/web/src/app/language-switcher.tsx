'use client'

interface Props {
  initialLocale?: string
}

export default function LanguageSwitcher({ initialLocale = 'zh-CN' }: Props) {
  const locale = initialLocale
  const next = locale === 'zh-CN' ? 'en' : 'zh-CN'
  const label = locale === 'zh-CN' ? 'EN' : '中文'

  const handleSwitch = () => {
    document.cookie = `NEXT_LOCALE=${next};path=/;max-age=${365 * 24 * 60 * 60}`
    window.location.reload()
  }

  return (
    <button
      onClick={handleSwitch}
      className="text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
      aria-label={`Switch to ${next}`}
    >
      {label}
    </button>
  )
}
