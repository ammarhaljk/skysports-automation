import { test, expect } from '@playwright/test';
import { NavigationMenu } from '../../page-objects/NavigationMenu';
import { LiveScoresPage } from '../../page-objects/LiveScoresPage';

test('Live Scores Display: Verify that live scores display and update correctly', async ({ page }) => {
  const navigationMenu = new NavigationMenu(page);
  const liveScoresPage = new LiveScoresPage(page);

  // Step 1: Navigate to the homepage and then to the live scores page
  await navigationMenu.navigate();
  await navigationMenu.clickMenuItem('Scores');

  // Step 2: Verify that the live scores section is visible
  const isScoresVisible = await liveScoresPage.isScoresVisible();
  expect(isScoresVisible).toBeTruthy();

  // Step 3: Wait for a few seconds to verify automatic score updates
  const updatedScoresVisible = await liveScoresPage.waitForScoresUpdate();
  expect(updatedScoresVisible).toBeTruthy();
});
