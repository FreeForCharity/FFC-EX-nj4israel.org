import { test, expect } from '@playwright/test'

test.describe('NJ4Israel — homepage smoke', () => {
  test('home page loads with the correct title', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/New Jersey Support Israel|NJ4Israel/i)
  })

  test('home page renders an h1', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { level: 1 }).first()).toBeVisible()
  })

  test('all home sections are present in the DOM', async ({ page }) => {
    await page.goto('/')
    for (const id of [
      'hero',
      'mission',
      'impact',
      'principles',
      'donate-cta',
      'get-involved',
      'contact',
    ]) {
      await expect(page.locator(`#${id}`)).toBeAttached()
    }
  })
})

test.describe('NJ4Israel — key routes', () => {
  for (const route of [
    '/about/',
    '/contact/',
    '/donate/',
    '/leadership/',
    '/financial-reports/',
    '/our-history/',
    '/operating-principles/',
    '/our-partners/',
    '/volunteer/',
    '/media-coverage/',
  ]) {
    test(`route ${route} returns 200 and renders a heading`, async ({ page }) => {
      const response = await page.goto(route)
      expect(response?.status()).toBeLessThan(400)
      await expect(page.getByRole('heading', { level: 1 }).first()).toBeVisible()
    })
  }
})
