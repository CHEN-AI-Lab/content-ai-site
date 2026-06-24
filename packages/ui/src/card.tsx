'use client'

import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`card ${hover ? 'hover:scale-[1.01] transition-transform' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  title: string
  subtitle?: string
  action?: React.ReactNode
}

export function CardHeader({ title, subtitle, action }: CardHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div>
        <h3 className="font-semibold">{title}</h3>
        {subtitle && <p className="text-sm opacity-60">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  )
}

export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-gray-200 ${className}`}
    />
  )
}

interface ErrorBannerProps {
  message: string
  onRetry?: () => void
  retryText?: string
}

export function ErrorBanner({ message, onRetry, retryText = 'Retry' }: ErrorBannerProps) {
  return (
    <div
      className="card"
      style={{ background: '#fee', border: '1px solid #fcc', borderRadius: '12px' }}
    >
      <p className="text-red-600 text-sm mb-3">{message}</p>
      {onRetry && (
        <button
          className="text-sm font-medium text-red-600 hover:underline"
          onClick={onRetry}
        >
          {retryText}
        </button>
      )}
    </div>
  )
}
