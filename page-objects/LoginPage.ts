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
    // Wait for the login form to appear
    await this.page.waitForSelector('input[name="username"]');

    // Enter username and password
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);

    // Click the "Sign in" button
    await this.page.click('button:has-text("Sign in")');
  }

  async isLoginSuccessful() {
    // Wait for a short time to allow redirection
    await this.page.waitForTimeout(3000);

    // Get the current URL
    const currentUrl = this.page.url();

    // Check if the URL indicates a successful login or security check
    if (currentUrl.includes('securitycheck')) {
      console.log('Redirected to the security check page.');
      return true; // Consider security check as a successful login for the test
    }

    console.log('Login was not successful.');
    return false;
  }
}
