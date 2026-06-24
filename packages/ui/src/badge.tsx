'use client'

import React from 'react'

export type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger' | 'neutral'

const badgeStyles: Record<BadgeVariant, string> = {
  primary: 'bg-[var(--primary)] text-white',
  success: 'bg-[var(--secondary)] text-white',
  warning: 'bg-[var(--accent)] text-gray-800',
  danger: 'bg-red-100 text-red-700',
  neutral: 'bg-gray-100 text-gray-700',
}

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}

export function Badge({ variant = 'neutral', children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${badgeStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
