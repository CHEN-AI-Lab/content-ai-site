/* ============================================================
 * Shared API Client — Cross-platform API communication
 * ============================================================ */

const BASE_URL = typeof window !== 'undefined'
  ? window.location.origin
  : process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

interface ApiResponse<T> {
  data: T | null
  error: string | null
  success: boolean
}

async function request<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(`${BASE_URL}/api${endpoint}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    })
    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      return { data: null, error: body?.error || `HTTP ${res.status}`, success: false }
    }
    const data = await res.json()
    return { data, error: null, success: true }
  } catch (err) {
    return { data: null, error: err instanceof Error ? err.message : 'Network error', success: false }
  }
}

export const api = {
  generate: (input: { platformId: string; styleId: string; topic: string; keywords?: string }) =>
    request<{ content: string }>('/generate', {
      method: 'POST',
      body: JSON.stringify(input),
    }),

  login: (input: { email: string; password: string }) =>
    request<{ token: string; user: { id: string; email: string; name: string } }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(input),
    }),

  register: (input: { email: string; password: string; name: string }) =>
    request<{ token: string; user: { id: string; email: string; name: string } }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(input),
    }),
}