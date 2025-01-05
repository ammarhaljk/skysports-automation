import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';

test('Homepage Accessibility: Verify homepage loads correctly', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();

  const sectionsVisible = await homePage.verifyMainSections();
  expect(sectionsVisible).toBeTruthy();
});
