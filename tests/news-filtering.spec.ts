import { test, expect } from '@playwright/test';

test('News Filtering: Verify that news articles can be filtered by category', async ({ page }) => {
 
  await page.goto('https://www.skysports.com');

  const sportsButton = page.getByRole('button', { name: 'Sports' });
  await sportsButton.click();

  const footballLink = page.locator('#site-nav-desktop-sports-more-nav').getByRole('link', { name: 'Golf' });
  await footballLink.click();

  await page.waitForTimeout(3000);
  expect(page.url()).toContain('/golf');

  const categoryHeader = await page.locator('h1').textContent();
  expect(categoryHeader).toContain('Golf');

  console.log('News filtering by "Golf" category is working correctly.');
});
