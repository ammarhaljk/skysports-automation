import { test, expect } from '@playwright/test';
import { NavigationMenu } from '../../page-objects/NavigationMenu';
import { LiveScoresPage } from '../../page-objects/LiveScoresPage';

test('Live Scores Display: Verify that live scores display and update correctly', async ({ page }) => {
  const navigationMenu = new NavigationMenu(page);
  const liveScoresPage = new LiveScoresPage(page);

  await navigationMenu.navigate();
  await navigationMenu.clickMenuItem('Scores');

  const isScoresVisible = await liveScoresPage.isScoresVisible();
  expect(isScoresVisible).toBeTruthy();

  const updatedScoresVisible = await liveScoresPage.waitForScoresUpdate();
  expect(updatedScoresVisible).toBeTruthy();
});
