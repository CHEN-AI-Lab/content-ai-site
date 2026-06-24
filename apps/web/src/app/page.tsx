import Link from 'next/link'
import { PLATFORMS, BRAND } from '@content-ai/shared'
import { getMessages } from '@/lib/i18n-server'

export default async function HomePage() {
  const msgs = await getMessages()

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in"
            style={{ background: 'rgba(255,107,107,0.1)', color: 'var(--primary)' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--primary)' }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--primary)' }} />
            </span>
            {msgs['hero.badge']}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up" style={{ color: 'var(--foreground)' }}>
            {msgs['hero.title']}
            <br />
            <span style={{ color: 'var(--primary)' }}>{msgs['hero.title.highlight']}</span>
          </h1>

          <p className="text-lg md:text-xl opacity-60 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {msgs['hero.subtitle']}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link href="/generate" className="btn-primary text-lg py-4 px-10 inline-block">
              {msgs['hero.cta']}
            </Link>
            <Link href="#features" className="text-lg py-4 px-10 inline-block rounded-xl border transition-all duration-300 hover:opacity-80"
              style={{ borderColor: 'var(--border)', color: 'var(--foreground)' }}>
              {msgs['hero.learnMore']}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: '50K+', label: msgs['stats.generated'] },
            { value: '10K+', label: msgs['stats.users'] },
            { value: '98%', label: msgs['stats.satisfaction'] },
          ].map((stat, i) => (
            <div key={i} className="animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: 'var(--primary)' }}>{stat.value}</div>
              <div className="text-sm opacity-60">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: 'var(--foreground)' }}>
            {msgs['features.title']?.replace('{name}', BRAND.name) || `Why Choose ${BRAND.name}`}
          </h2>
          <p className="text-center opacity-60 mb-16 max-w-xl mx-auto">
            {msgs['features.subtitle']}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {PLATFORMS.map((p) => (
              <div key={p.id} className="p-5 rounded-2xl glass-card text-center animate-slide-up">
                <div className="text-4xl mb-3">{p.icon}</div>
                <div className="font-semibold mb-1 text-sm" style={{ color: 'var(--foreground)' }}>{msgs[`platform.${p.id}`]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: 'var(--foreground)' }}>
            {msgs['how.title']}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="text-center animate-slide-up" style={{ animationDelay: `${(step - 1) * 0.1}s` }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"
                  style={{ background: 'rgba(255,107,107,0.1)', color: 'var(--primary)' }}>
                  {step}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>{msgs[`how.step${step}.title`]}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{msgs[`how.step${step}.desc`]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: 'var(--foreground)' }}>
            {msgs['pricing.title']}
          </h2>
          <p className="text-center opacity-60 mb-16">{msgs['pricing.subtitle']}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="p-8 rounded-2xl glass-card animate-slide-up">
              <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>{msgs['pricing.free.name']}</h3>
              <div className="text-4xl font-bold mb-6" style={{ color: 'var(--primary)' }}>
                {msgs['pricing.free.price']}
              </div>
              <ul className="space-y-3 mb-8">
                {['pricing.free.feature1', 'pricing.free.feature2', 'pricing.free.feature3'].map((key) => (
                  <li key={key} className="flex items-center gap-2 text-sm">
                    <span style={{ color: 'var(--primary)' }}>✓</span>
                    <span className="opacity-70">{msgs[key]}</span>
                  </li>
                ))}
              </ul>
              <Link href="/generate" className="btn-primary w-full text-center py-3 inline-block">
                {msgs['pricing.free.cta']}
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="p-8 rounded-2xl glass-card border-2 animate-slide-up" style={{ borderColor: 'var(--primary)', animationDelay: '0.1s' }}>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: 'rgba(255,107,107,0.15)', color: 'var(--primary)' }}>
                {msgs['pricing.pro.badge']}
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>{msgs['pricing.pro.name']}</h3>
              <div className="text-4xl font-bold mb-6" style={{ color: 'var(--primary)' }}>
                {msgs['pricing.pro.price']}
              </div>
              <ul className="space-y-3 mb-8">
                {['pricing.pro.feature1', 'pricing.pro.feature2', 'pricing.pro.feature3', 'pricing.pro.feature4'].map((key) => (
                  <li key={key} className="flex items-center gap-2 text-sm">
                    <span style={{ color: 'var(--primary)' }}>✓</span>
                    <span className="opacity-70">{msgs[key]}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="w-full text-center py-3 inline-block rounded-xl font-semibold transition-all duration-300"
                style={{ background: 'var(--primary)', color: 'white' }}>
                {msgs['pricing.pro.cta']}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center glass-card p-12 rounded-3xl animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            {msgs['cta.title']}
          </h2>
          <p className="opacity-60 mb-8">{msgs['cta.subtitle']}</p>
          <Link href="/generate" className="btn-primary text-lg py-4 px-10 inline-block">
            {msgs['cta.button']}
          </Link>
        </div>
      </section>
    </div>
  )
}