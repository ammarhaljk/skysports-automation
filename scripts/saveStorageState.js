const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the homepage
  await page.goto('https://www.skysports.com');

  // Wait for and accept the cookie pop-up
  try {
    await page.waitForSelector('button:has-text("Accept all")', { timeout: 10000 });
    await page.click('button:has-text("Accept all")');
    console.log('Cookie pop-up accepted.');
  } catch (e) {
    console.log('Cookie pop-up did not appear:', e);
  }

  // Save the storage state to a file
  await context.storageState({ path: 'state.json' });

  await browser.close();
})();
