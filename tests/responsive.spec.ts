import { test, expect, devices } from '@playwright/test';

// Use iPhone 11 emulation for mobile testing
test.use({ viewport: devices['iPhone 11'].viewport });

test('Responsive Design: Ensure the site works well on smaller screens', async ({ page }) => {
  // Step 1: Open the website on a mobile browser
  await page.goto('https://www.skysports.com');

  // Step 2: Verify that the header and menu button are visible
  const header = page.locator('header');
  await expect(header).toBeVisible();

  const menuButton = page.locator('#site-header').getByRole('link').nth(1);
  await expect(menuButton).toBeVisible();

  await menuButton.click();

  const scoresLink = page.getByRole('link', { name: 'Scores', exact: true });
  await expect(scoresLink).toBeVisible();

  console.log('Responsive design test passed: Site layout and functionality are consistent on mobile devices.');
});
