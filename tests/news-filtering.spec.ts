import { test, expect } from '@playwright/test';

test('News Filtering: Verify that news articles can be filtered by category', async ({ page }) => {
  // Step 1: Navigate to the homepage
  await page.goto('https://www.skysports.com');

  // Step 2: Click on the "Sports" button to trigger the dropdown
  const sportsButton = page.getByRole('button', { name: 'Sports' });
  await sportsButton.click();

  // Step 3: Click on the "Football" link within the dropdown
  const footballLink = page.locator('#site-nav-desktop-sports-more-nav').getByRole('link', { name: 'Golf' });
  await footballLink.click();

  // Step 4: Wait for the Football page to load and verify the URL
  await page.waitForTimeout(3000);
  expect(page.url()).toContain('/golf');

  // Step 5: Verify that the displayed articles belong to the "Football" category
  const categoryHeader = await page.locator('h1').textContent();
  expect(categoryHeader).toContain('Golf');

  console.log('News filtering by "Golf" category is working correctly.');
});
