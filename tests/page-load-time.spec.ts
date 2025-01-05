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
    const loadTime = (endTime - startTime) / 1000;

    console.log(`${name} loaded in ${loadTime.toFixed(2)} seconds.`);

    expect(loadTime).toBeLessThanOrEqual(5.1);
  }
});
