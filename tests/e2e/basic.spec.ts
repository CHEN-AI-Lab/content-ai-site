import { test, expect } from '@playwright/test'

test('home page loads and shows title', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toBeVisible()
})

test('generate page has platform selector', async ({ page }) => {
  await page.goto('/generate')
  await expect(page.locator('button:has-text("Xiaohongshu")').first()).toBeVisible()
})

test('language switcher exists', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('button:has-text("EN")').or(page.locator('button:has-text("中文")'))).toBeVisible()
})
