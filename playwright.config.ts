import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 2, // Retries for failed tests
  use: {
    headless: true, // Run tests in headless mode
    browserName: 'chromium', // Default browser
  },
});
