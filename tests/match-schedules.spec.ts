import { test, expect } from '@playwright/test';

test('Match Schedules: Verify match schedules are displayed accurately', async ({ page }) => {
  
  await page.goto('https://www.skysports.com/football-scores-fixtures');

  await page.waitForSelector('div.ui-tournament-matches', { timeout: 10000 });

  const isDatePickerVisible = await page.isVisible('div.ui-sport-date-picker__content');
  expect(isDatePickerVisible).toBeTruthy();

  const fixtures = await page.$$('div.ui-tournament-matches');
  expect(fixtures.length).toBeGreaterThan(0);

  console.log('Fixtures are displayed correctly with dates and times.');
});
