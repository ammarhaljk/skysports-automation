import { Page } from '@playwright/test';

export class NavigationMenu {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.skysports.com', { waitUntil: 'domcontentloaded' });
  }

  async clickMenuItem(menuText: string) {
    await this.page.click(`li.site-nav-desktop__item >> text=${menuText}`);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async verifyPageLoaded(expectedUrl: string) {
    await this.page.waitForURL(expectedUrl);
    return this.page.url().includes(expectedUrl);
  }

}