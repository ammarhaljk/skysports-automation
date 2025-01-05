import { Page } from '@playwright/test';

export class LiveScoresPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async isScoresVisible() {
    
    await this.page.locator('div.vidiprinter__items').scrollIntoViewIfNeeded();

    
    await this.page.waitForSelector('div.vidiprinter__item', { state: 'visible', timeout: 10000 });
    return await this.page.isVisible('div.vidiprinter__items');
  }

  async waitForScoresUpdate(timeout: number = 10000) {
    
    await this.page.waitForTimeout(timeout);
    return await this.isScoresVisible();
  }
}
