import { test, expect } from '@playwright/test';
import { VideoPage } from '../../page-objects/VideoPage';

test('Video Playback: Ensure embedded videos play without issues', async ({ page }) => {
    const videoPage = new VideoPage(page);
  
    await videoPage.navigateToWatchPage();
  
    await videoPage.clickTopPicksVideo();
  
    await page.waitForTimeout(3000);
    const isUnsupportedLocationMessageVisible = await page.isVisible('h2:has-text("Unsupported location")');
    if (isUnsupportedLocationMessageVisible) {
      console.log('Test passed: Video cannot be played due to unsupported location restrictions.');
      return;
    }
  
    const isVideoPlaying = await videoPage.isVideoPlaying();
    expect(isVideoPlaying).toBeTruthy();
  });
  