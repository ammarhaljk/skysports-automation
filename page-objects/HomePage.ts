import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.skysports.com');
  }

  async verifyMainSections() {
    const headerVisible = await this.page.isVisible('header');
    const footerVisible = await this.page.isVisible('footer');
    const mainContentVisible = await this.page.isVisible('main');
    return headerVisible && footerVisible && mainContentVisible;
  }
}
