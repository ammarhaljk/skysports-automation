export class VideoPage {
    readonly page;
  
    constructor(page) {
      this.page = page;
    }
  
    async navigateToWatchPage() {
      // Navigate to the "Watch" page directly
      await this.page.goto('https://www.skysports.com/watch');
    }
  
    async clickTopPicksVideo() {
        // Scroll to the "Top Picks" section
        const topPicksSection = this.page.locator('section[aria-label="Top picks"]');
        await topPicksSection.scrollIntoViewIfNeeded();
      
        // Wait for the video thumbnails to be visible
        await this.page.waitForSelector('div.sdc-site-tiles__item', { timeout: 10000 });
      
        // Click on the first video in the "Top Picks" section
        await this.page.click('div.sdc-site-tiles__item >> nth=0');
      
        // Scroll down after clicking the video to bring the video content into view
        await this.page.waitForTimeout(2000); // Small delay to ensure the page updates after click
        await this.page.evaluate(() => window.scrollBy(0, window.innerHeight));
      
        // Wait for the video content to load (either video or "Unsupported location" message)
        await this.page.waitForSelector('div.sdc-site-video__content', { timeout: 15000 });
      }
      
  
    async isVideoPlaying() {
      // Check if the video element is playing by verifying its 'paused' property is false
      return await this.page.evaluate(() => {
        const video = document.querySelector('video');
        return video && !video.paused;
      });
    }
  }
  