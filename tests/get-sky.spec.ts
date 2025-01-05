import { test, expect } from '@playwright/test';

test('should redirect to the correct page when the Get Sky Sports button is clicked', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('https://skysports.com');

  // Locate and click the Get Sky Sports button in the header using the provided locator
  const getSkySportsButton = page.locator('#site-header').getByRole('link', { name: 'Get Sky Sports' });
  await getSkySportsButton.click();

  // Wait for the page to load after the redirect
  await page.waitForLoadState('domcontentloaded');

  // Verify that the URL contains 'get-sky'
  await expect(page.url()).toContain('get-sky');
});
