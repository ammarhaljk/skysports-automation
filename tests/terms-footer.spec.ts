import { test, expect } from '@playwright/test';

test('should redirect to the correct Terms & Conditions page', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('https://skysports.com');

  // Scroll to the footer section
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  // Locate and click the Terms & Conditions link in the footer
  const termsLink = page.locator('footer a:has-text("Terms & Conditions")');
  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'), // wait for the new page to open
    termsLink.click() // click the link
  ]);

  // Wait for the new page to load
  await newPage.waitForLoadState('domcontentloaded');

  // Verify that the URL of the new page contains 'terms-and-conditions'
  await expect(newPage.url()).toContain('terms-and-conditions');

});
