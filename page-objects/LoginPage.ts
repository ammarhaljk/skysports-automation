import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToLogin() {
    await this.page.goto('https://skyid.sky.com/signin/sports?successUrl=https%3A%2F%2Fwww.skysports.com%2F', { waitUntil: 'domcontentloaded' });
  }

  async login(username: string, password: string) {
    
    await this.page.waitForSelector('input[name="username"]');

    
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);

    
    await this.page.click('button:has-text("Sign in")');
  }

  async isLoginSuccessful() {
    
    await this.page.waitForTimeout(3000);

    
    const currentUrl = this.page.url();

    if (currentUrl.includes('securitycheck')) {
      console.log('Redirected to the security check page.');
      return true;
    }

    console.log('Login was not successful.');
    return false;
  }
}
