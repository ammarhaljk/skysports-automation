export class VideoPage {
    readonly page;
  
    constructor(page) {
      this.page = page;
    }
  
    async navigateToWatchPage() {

      await this.page.goto('https://www.skysports.com/watch');
    }
  
    async clickTopPicksVideo() {
      
        const topPicksSection = this.page.locator('section[aria-label="Top picks"]');
        await topPicksSection.scrollIntoViewIfNeeded();
      
        await this.page.waitForSelector('div.sdc-site-tiles__item', { timeout: 10000 });
      
        await this.page.click('div.sdc-site-tiles__item >> nth=0');
      
        await this.page.waitForTimeout(2000);
        await this.page.evaluate(() => window.scrollBy(0, window.innerHeight));
      
        await this.page.waitForSelector('div.sdc-site-video__content', { timeout: 15000 });
      }
      
  
    async isVideoPlaying() {
      
      return await this.page.evaluate(() => {
        const video = document.querySelector('video');
        return video && !video.paused;
      });
    }
  }
  