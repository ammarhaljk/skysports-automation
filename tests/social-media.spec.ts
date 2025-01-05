import { test, expect } from '@playwright/test';

test('should redirect to the YouTube page when the YouTube button is clicked', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('https://skysports.com');

  // Scroll to the footer section
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  // Locate and click the YouTube button in the footer
  const youtubeButton = page.locator('footer a:has-text("YouTube")');
  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'), // wait for the new page to open
    youtubeButton.click() // click the button
  ]);

  // Wait for the new page to load
  await newPage.waitForLoadState('domcontentloaded');

  // Verify that the URL contains 'youtube'
  await expect(newPage.url()).toContain('youtube');
});
