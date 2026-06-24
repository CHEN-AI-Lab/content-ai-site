'use client'

import React from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--primary)] text-white hover:opacity-90',
  secondary: 'bg-white text-[var(--primary)] border-2 border-[var(--primary)] hover:bg-gray-50',
  ghost: 'bg-transparent hover:bg-gray-100',
  danger: 'bg-red-500 text-white hover:bg-red-600',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-sm py-2 px-4',
  md: 'text-base py-3 px-6',
  lg: 'text-lg py-4 px-8',
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2 rounded-xl font-semibold
        transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="spinner !w-4 !h-4" />}
      {children}
    </button>
  )
}
