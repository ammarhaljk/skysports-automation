import { test, expect } from '@playwright/test';

test('Article Sharing: Verify that articles can be shared via social media', async ({ page, context }) => {
  
  await page.goto('https://www.skysports.com');

  const firstArticle = page.locator('div:nth-child(8) > .sdc-site-tiles__inner > .sdc-site-tiles__group > div:nth-child(2)');
  await firstArticle.click();
  await page.waitForLoadState('domcontentloaded');

  const shareButton = page.getByLabel('Share on X');
  await shareButton.scrollIntoViewIfNeeded();

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    shareButton.click()
  ]);

  await newPage.waitForLoadState('domcontentloaded');
  const url = newPage.url();
  expect(url).toContain('x.com/intent/tweet');
  expect(url).toContain('skysports.com');

  console.log('Article sharing test passed: Article can be shared via X (formerly Twitter).');
});
