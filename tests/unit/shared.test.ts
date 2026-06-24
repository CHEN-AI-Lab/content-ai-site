import { describe, it, expect } from 'vitest'

describe('shared/utils', () => {
  it('generateId returns a non-empty string', async () => {
    const { generateId } = await import('../shared/utils')
    const id = generateId()
    expect(id).toBeTruthy()
    expect(typeof id).toBe('string')
    expect(id.length).toBeGreaterThan(10)
  })

  it('truncate shortens long text', async () => {
    const { truncate } = await import('../shared/utils')
    expect(truncate('Hello World', 5)).toBe('Hello...')
    expect(truncate('Hi')).toBe('Hi')
  })

  it('formatDate returns formatted string', async () => {
    const { formatDate } = await import('../shared/utils')
    const result = formatDate('2024-01-15T12:00:00Z', 'zh-CN')
    expect(result).toBeTruthy()
    expect(result.length).toBeGreaterThan(5)
  })

  it('formatDate returns empty for invalid date', async () => {
    const { formatDate } = await import('../shared/utils')
    expect(formatDate('not-a-date')).toBe('')
  })
})

describe('shared/constants', () => {
  it('PLATFORMS contains expected platforms', async () => {
    const { PLATFORMS } = await import('../shared/constants')
    expect(PLATFORMS.length).toBe(5)
    expect(PLATFORMS[0].id).toBe('xiaohongshu')
    expect(PLATFORMS[3].id).toBe('instagram')
  })

  it('LOCALES contains zh-CN and en', async () => {
    const { LOCALES, DEFAULT_LOCALE } = await import('../shared/constants')
    expect(LOCALES).toContain('zh-CN')
    expect(LOCALES).toContain('en')
    expect(DEFAULT_LOCALE).toBe('zh-CN')
  })

  it('WRITING_STYLES has 5 styles', async () => {
    const { WRITING_STYLES } = await import('../shared/constants')
    expect(WRITING_STYLES.length).toBe(5)
  })
})

describe('shared/validators', () => {
  it('GenerationInputSchema validates correctly', async () => {
    const { GenerationInputSchema } = await import('../shared/validators')
    const valid = GenerationInputSchema.safeParse({
      platformId: 'xiaohongshu',
      styleId: 'planting',
      topic: 'Test topic',
    })
    expect(valid.success).toBe(true)
  })

  it('GenerationInputSchema rejects empty topic', async () => {
    const { GenerationInputSchema } = await import('../shared/validators')
    const invalid = GenerationInputSchema.safeParse({
      platformId: 'xiaohongshu',
      styleId: 'planting',
      topic: '',
    })
    expect(invalid.success).toBe(false)
  })
})
