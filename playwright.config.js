import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 0, // Retries for failed tests
  use: {
    headless: true, // Run tests in headless mode
    browserName: 'chromium', // Default browser
    screenshot: 'on',
    video: 'retain-on-failure',
    contextOptions: {
      storageState: 'state.json', // Use a saved storage state file
    },
  },

});
