import { test, expect } from '@playwright/test';

test('should redirect to the top of the site when the Sky Sports button in the footer is clicked', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('https://skysports.com');

  // Scroll down to the footer
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  // Locate and click the Sky Sports button in the footer using the provided locator
  const skySportsButton = page.locator('#site-footer').getByRole('link', { name: 'Sky Sports', exact: true });
  await skySportsButton.click();

  // Wait for the page to load after the redirect
  await page.waitForLoadState('domcontentloaded');

  // Optionally, verify that the page is scrolled to the top (the body scroll position should be 0)
  const scrollPosition = await page.evaluate(() => window.scrollY);
  await expect(scrollPosition).toBe(0);
});
