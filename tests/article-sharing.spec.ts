import { test, expect } from '@playwright/test';

test('Article Sharing: Verify that articles can be shared via social media', async ({ page, context }) => {
  // Step 1: Navigate to the homepage
  await page.goto('https://www.skysports.com');

  // Step 2: Open the first article using the specified locator
  const firstArticle = page.locator('div:nth-child(8) > .sdc-site-tiles__inner > .sdc-site-tiles__group > div:nth-child(2)');
  await firstArticle.click();
  await page.waitForLoadState('domcontentloaded');

  // Step 3: Scroll to the share button
  const shareButton = page.getByLabel('Share on X');
  await shareButton.scrollIntoViewIfNeeded();

  // Step 4: Wait for the social media platform (X) sharing page to load in a new tab
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    shareButton.click()
  ]);

  // Step 5: Verify that the sharing page opens correctly
  await newPage.waitForLoadState('domcontentloaded');
  const url = newPage.url();
  expect(url).toContain('x.com/intent/tweet');
  expect(url).toContain('skysports.com');

  console.log('Article sharing test passed: Article can be shared via X (formerly Twitter).');
});
