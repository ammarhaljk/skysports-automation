import { test, expect } from '@playwright/test';

test('should redirect to the YouTube page when the YouTube button is clicked', async ({ page }) => {
   
  await page.goto('https://skysports.com');

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  const youtubeButton = page.locator('footer a:has-text("YouTube")');
  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    youtubeButton.click() 
  ]);

  await newPage.waitForLoadState('domcontentloaded');

  await expect(newPage.url()).toContain('youtube');
});
