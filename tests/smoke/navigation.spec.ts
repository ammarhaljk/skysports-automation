import { test, expect } from '@playwright/test';
import { NavigationMenu } from '../../page-objects/NavigationMenu';

test('Navigation Menu: Verify menu links work', async ({ page }) => {
  const navigationMenu = new NavigationMenu(page);
  await navigationMenu.navigate();

  await navigationMenu.clickMenuItem('Scores');
  const isScoresPageLoaded = await navigationMenu.verifyPageLoaded('https://www.skysports.com/live-scores');
  expect(isScoresPageLoaded).toBeTruthy();

  await navigationMenu.clickMenuItem('Watch');
  const isWatchPageLoaded = await navigationMenu.verifyPageLoaded('https://www.skysports.com/watch');
  expect(isWatchPageLoaded).toBeTruthy();
});