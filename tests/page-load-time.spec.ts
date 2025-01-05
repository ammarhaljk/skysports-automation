import { test, expect } from '@playwright/test';

test('Page Load Time: Measure and validate page load time', async ({ page }) => {
  const pagesToTest = [
    { url: 'https://www.skysports.com', name: 'Homepage' },
    { url: 'https://www.skysports.com/football-scores-fixtures', name: 'Fixtures Page' }
  ];

  for (const { url, name } of pagesToTest) {
    const startTime = Date.now();

    await page.goto(url);
    await page.waitForLoadState('load');

    const endTime = Date.now();
    const loadTime = (endTime - startTime) / 1000; // Convert to seconds

    console.log(`${name} loaded in ${loadTime.toFixed(2)} seconds.`);

    // Allow a small buffer (e.g., 0.1s) to avoid edge-case failures
    expect(loadTime).toBeLessThanOrEqual(5.1); // Buffer to handle precision issues
  }
});
