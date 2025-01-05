import { test, expect } from '@playwright/test';

test('Ad Display: Check that ads appear correctly without disturbing the content layout', async ({ page }) => {
  
  await page.goto('https://www.skysports.com');

  const adUnit = page.getByTestId('advert-unit').nth(1);
  await adUnit.scrollIntoViewIfNeeded();

  await expect(adUnit).toBeVisible();

  const mainContent = page.locator('main');
  const contentBoundingBox = await mainContent.boundingBox();
  const adBoundingBox = await adUnit.boundingBox();

  expect(adBoundingBox && contentBoundingBox).toBeTruthy();
  if (adBoundingBox && contentBoundingBox) {
    expect(adBoundingBox.y + adBoundingBox.height).toBeLessThan(contentBoundingBox.y + contentBoundingBox.height);
  }

  console.log('Ad display test passed: Ads are loading correctly without breaking the page layout.');
});
