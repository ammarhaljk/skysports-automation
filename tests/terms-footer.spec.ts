import { test, expect } from '@playwright/test';

test('should redirect to the correct Terms & Conditions page', async ({ page }) => {
 
  await page.goto('https://skysports.com');

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  const termsLink = page.locator('footer a:has-text("Terms & Conditions")');
  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'), 
    termsLink.click() 
  ]);

  await newPage.waitForLoadState('domcontentloaded');

  await expect(newPage.url()).toContain('terms-and-conditions');

});
