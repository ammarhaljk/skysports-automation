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
  
  async handleCookiePopup() {
    try {
      let cookieHandled = false;
  
      // Polling loop to handle the cookie pop-up dynamically during test execution
      for (let i = 0; i < 5; i++) { // Retry up to 5 times with delays
        const frames = this.page.frames();
  
        for (const frame of frames) {
          const frameLocator = frame.frameLocator('#sp_message_iframe_1223386');
          
          try {
            // Wait for the button to be attached and visible inside the iframe
            await frameLocator.locator('button:has-text("Accept all")').waitFor({ state: 'visible', timeout: 5000 });
            
            // Click the "Accept all" button if it becomes visible
            await frameLocator.locator('button:has-text("Accept all")').click();
            console.log('Cookie pop-up accepted.');
            cookieHandled = true;
            return; // Exit once the cookie pop-up is handled
          } catch (e) {
            // If the button is not found or visible, continue to the next iteration
            console.log('Cookie pop-up not visible yet, retrying...');
          }
        }
  
        if (cookieHandled) break;
  
        // Wait for a short period before checking again
        await this.page.waitForTimeout(2000);
      }
  
      if (!cookieHandled) {
        console.log('Cookie pop-up did not appear after retries.');
      }
    } catch (e) {
      console.error('Error handling cookie pop-up:', e);
    }
  }
  
  

}