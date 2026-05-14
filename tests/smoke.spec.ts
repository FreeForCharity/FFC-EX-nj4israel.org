import { test, expect } from '@playwright/test'

test.describe('NJ4Israel — homepage smoke', () => {
  test('home page loads and renders the brand', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/New Jersey Support Israel|NJ4Israel/i)
    await expect(page.getByRole('heading', { level: 1 }).first()).toBeVisible()
  })

  test('all home sections are present in the DOM', async ({ page }) => {
    await page.goto('/')
    for (const id of [
      'hero',
      'mission',
      'impact',
      'principles',
      'donate',
      'get-involved',
      'contact',
    ]) {
      const el = page.locator(`#${id}`)
      await expect(el).toBeAttached()
    }
  })

  test('donate link points to an external processor', async ({ page }) => {
    await page.goto('/')
    const donateLinks = page.locator('a').filter({ hasText: /donate|paypal|donors fund|venmo/i })
    await expect(donateLinks.first()).toBeAttached()
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
    test(`route ${route} loads`, async ({ page }) => {
      const response = await page.goto(route)
      expect(response?.status()).toBeLessThan(400)
      await expect(page.locator('main, body')).toBeAttached()
    })
  }
})
