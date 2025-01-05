import { test, expect } from '@playwright/test';

test('should redirect to the top of the site when the Sky Sports button in the footer is clicked', async ({ page }) => {
 
  await page.goto('https://skysports.com');

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  const skySportsButton = page.locator('#site-footer').getByRole('link', { name: 'Sky Sports', exact: true });
  await skySportsButton.click();

  await page.waitForLoadState('domcontentloaded');

  const scrollPosition = await page.evaluate(() => window.scrollY);
  await expect(scrollPosition).toBe(0);
});
