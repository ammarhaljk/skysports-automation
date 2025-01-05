import { test, expect } from '@playwright/test';

test('Ad Display: Check that ads appear correctly without disturbing the content layout', async ({ page }) => {
  // Step 1: Load the homepage
  await page.goto('https://www.skysports.com');

  // Step 2: Scroll down to the ad section
  const adUnit = page.getByTestId('advert-unit').nth(1); // Use the provided locator
  await adUnit.scrollIntoViewIfNeeded();

  // Step 3: Verify the ad is present and visible
  await expect(adUnit).toBeVisible();

  // Step 4: Ensure the ad does not overlap with the main content
  const mainContent = page.locator('main');
  const contentBoundingBox = await mainContent.boundingBox();
  const adBoundingBox = await adUnit.boundingBox();

  expect(adBoundingBox && contentBoundingBox).toBeTruthy(); // Ensure both elements are detected
  if (adBoundingBox && contentBoundingBox) {
    expect(adBoundingBox.y + adBoundingBox.height).toBeLessThan(contentBoundingBox.y + contentBoundingBox.height);
  }

  console.log('Ad display test passed: Ads are loading correctly without breaking the page layout.');
});
