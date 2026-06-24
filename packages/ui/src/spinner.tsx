'use client'

import React from 'react'

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: '!w-4 !h-4',
  md: '!w-6 !h-6',
  lg: '!w-8 !h-8',
}

export function Spinner({ size = 'md', className = '' }: SpinnerProps) {
  return (
    <div className={`spinner ${sizeMap[size]} ${className}`} />
  )
}
