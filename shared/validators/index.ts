/* ============================================================
 * Shared Validators — Zod schemas for API inputs
 * ============================================================ */

import { z } from 'zod'

export const GenerationInputSchema = z.object({
  platformId: z.string().min(1, 'Platform is required'),
  styleId: z.string().min(1, 'Style is required'),
  topic: z.string().min(1, 'Topic is required').max(500, 'Topic too long'),
  keywords: z.string().max(200, 'Keywords too long').optional().default(''),
})

export const LoginInputSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const RegisterInputSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  name: z.string().min(1, 'Name is required').max(50),
})

export type GenerationInputType = z.infer<typeof GenerationInputSchema>
export type LoginInputType = z.infer<typeof LoginInputSchema>
export type RegisterInputType = z.infer<typeof RegisterInputSchema>