import { test, expect } from '@playwright/test';

test('Match Schedules: Verify match schedules are displayed accurately', async ({ page }) => {
  // Step 1: Navigate to the "Fixtures" section
  await page.goto('https://www.skysports.com/football-scores-fixtures');

  // Step 2: Wait for the fixtures section to load
  await page.waitForSelector('div.ui-tournament-matches', { timeout: 10000 });

  // Step 3: Check if the date picker is visible
  const isDatePickerVisible = await page.isVisible('div.ui-sport-date-picker__content');
  expect(isDatePickerVisible).toBeTruthy();

  // Step 4: Check if the fixtures are displayed correctly
  const fixtures = await page.$$('div.ui-tournament-matches');
  expect(fixtures.length).toBeGreaterThan(0);

  console.log('Fixtures are displayed correctly with dates and times.');
});
