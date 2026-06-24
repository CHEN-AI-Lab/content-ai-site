'use client'

import { useState } from 'react'
import { useMessages } from '@content-ai/shared'

export default function LoginPage() {
  const t = useMessages()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: implement actual login
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full card p-8">
        <div className="text-center mb-8">
          <div className="text-4xl mb-2">✨</div>
          <h1 className="text-2xl font-bold">{t['login.title'] || 'Sign In'}</h1>
          <p className="text-sm opacity-60 mt-1">{t['login.subtitle'] || 'Welcome back'}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">{t['login.email'] || 'Email'}</label>
            <input
              type="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t['login.password'] || 'Password'}</label>
            <input
              type="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <button type="submit" className="btn-primary w-full py-3">
            {t['login.button'] || 'Sign In'}
          </button>
        </form>

        <p className="text-center text-sm mt-6 opacity-50">
          {t['login.hint'] || 'No account? Contact admin'}
        </p>
      </div>
    </div>
  )
}