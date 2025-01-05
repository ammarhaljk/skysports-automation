import { Page } from '@playwright/test';

export class LiveScoresPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async isScoresVisible() {
    // Scroll to the live scores section
    await this.page.locator('div.vidiprinter__items').scrollIntoViewIfNeeded();

    // Wait for the live scores section to contain at least one score entry
    await this.page.waitForSelector('div.vidiprinter__item', { state: 'visible', timeout: 10000 });
    return await this.page.isVisible('div.vidiprinter__items');
  }

  async waitForScoresUpdate(timeout: number = 10000) {
    // Wait for a few seconds to simulate auto-updating and check if the scores are still visible
    await this.page.waitForTimeout(timeout);
    return await this.isScoresVisible();
  }
}
