import { test, expect } from '@playwright/test';

test('should redirect to the correct page when the Get Sky Sports button is clicked', async ({ page }) => {
  
  await page.goto('https://skysports.com');

  const getSkySportsButton = page.locator('#site-header').getByRole('link', { name: 'Get Sky Sports' });
  await getSkySportsButton.click();

  await page.waitForLoadState('domcontentloaded');

  await expect(page.url()).toContain('get-sky');
});
