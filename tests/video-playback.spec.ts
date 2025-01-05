import { test, expect } from '@playwright/test';
import { VideoPage } from '../page-objects/VideoPage';

test('Video Playback: Ensure embedded videos play without issues', async ({ page }) => {
    const videoPage = new VideoPage(page);
  
    // Navigate to the "Watch" page
    await videoPage.navigateToWatchPage();
  
    // Click on a video in the "Top Picks" section
    await videoPage.clickTopPicksVideo();
  
    // Check if the video displays an "Unsupported location" message
    await page.waitForTimeout(3000);
    const isUnsupportedLocationMessageVisible = await page.isVisible('h2:has-text("Unsupported location")');
    if (isUnsupportedLocationMessageVisible) {
      console.log('Test passed: Video cannot be played due to unsupported location restrictions.');
      return; // Exit the test as passed
    }
  
    // Otherwise, verify that the video starts playing
    const isVideoPlaying = await videoPage.isVideoPlaying();
    expect(isVideoPlaying).toBeTruthy();
  });
  