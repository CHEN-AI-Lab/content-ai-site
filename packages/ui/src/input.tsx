'use client'

import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function Input({ label, className = '', ...props }: InputProps) {
  return (
    <div>
      {label && <label className="block text-sm font-semibold mb-3">{label}</label>}
      <input
        className={`input-field ${className}`}
        {...props}
      />
    </div>
  )
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

export function Textarea({ label, className = '', ...props }: TextareaProps) {
  return (
    <div>
      {label && <label className="block text-sm font-semibold mb-3">{label}</label>}
      <textarea
        className={`input-field min-h-32 resize-none ${className}`}
        {...props}
      />
    </div>
  )
}

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label?: string
  options: SelectOption[]
  placeholder?: string
}

export function Select({ label, options, placeholder, className = '', ...props }: SelectProps) {
  return (
    <div>
      {label && <label className="block text-sm font-semibold mb-3">{label}</label>}
      <select
        className={`input-field ${className}`}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  )
}
