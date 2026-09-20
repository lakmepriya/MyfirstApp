//Example of 10 Websites to Get Page Titles and URLs using a test case 
import { test,expect } from '@playwright/test';

test("Google Launch", async ({ page }) => {
    await page.goto('https://www.google.com/')
    // await page.waitForTimeout(2000);
   
    const title = await page.title();
    console.log("PAGE TITLE:", title);

    const currentURL = await page.url();
    console.log("CURRENT URL:", currentURL);

    await expect(page).toHaveTitle(/Google/);

    await expect(page).toHaveURL(/.*google/);

});

test("facebook Launch", async ({ page }) => {
    await page.goto('https://www.facebook.com/')
    // await page.waitForTimeout(2000);

    const title = await page.title();
    console.log("PAGE TITLE:", title);

    const currentURL = await page.url();
    console.log("CURRENT URL:", currentURL);

    await expect(page).toHaveTitle(/Facebook/);

    await expect(page).toHaveURL(/.*facebook/);

});

test("Microsoft", async ({ page }) => {
    await page.goto('https://www.microsoft.com')
    // await page.waitForTimeout(6000);

    const title = await page.title();
    console.log("PAGE TITLE:", title);

    const currentURL = await page.url();
    console.log("CURRENT URL:", currentURL);

    await expect(page).toHaveTitle(/Microsoft/);

    await expect(page).toHaveURL(/.*microsoft/);

});

test("Amazon", async ({ page }) => {
    await page.goto('https://www.amazon.in/')
    // await page.waitForTimeout(2000);

    const title = await page.title();
    console.log("PAGE TITLE:", title);

    const currentURL = await page.url();
    console.log("CURRENT URL:", currentURL);

    await expect(page).toHaveTitle(/Amazon/);

    await expect(page).toHaveURL(/.*amazon/);

});

test("Netflix", async ({ page }) => {
    await page.goto('https://www.netflix.com/')
    // await page.waitForTimeout(2000);

    const title = await page.title();
    console.log("PAGE TITLE:", title);

    const currentURL = await page.url();
    console.log("CURRENT URL:", currentURL);

    await expect(page).toHaveTitle(/Netflix/);

    await expect(page).toHaveURL(/.*netflix/);

});

test("Youtube", async ({ page }) => {
    await page.goto('https://www.youtube.com/')
    // await page.waitForTimeout(2000);

    const title = await page.title();
    console.log("PAGE TITLE:", title);

    const currentURL = await page.url();
    console.log("CURRENT URL:", currentURL);

    await expect(page).toHaveTitle(/YouTube/);

    await expect(page).toHaveURL(/.*youtube/);

});

test("Instagram Launch", async ({ page }) => {
    await page.goto('https://www.instagram.com/')
    
    const title = await page.title();
    console.log("PAGE TITLE:", title);

    const currentURL = await page.url();
    console.log("CURRENT URL:", currentURL);

    await expect(page).toHaveTitle(/Instagram/);

    await expect(page).toHaveURL(/.*instagram/);

});

test("Twitter Launch", async ({ page }) => {
    await page.goto('https://x.com/')
   
    const title = await page.title();
    console.log("PAGE TITLE:", title);

    const currentURL = await page.url();
    console.log("CURRENT URL:", currentURL);

    await expect(page).toHaveTitle(/X/);

    await expect(page).toHaveURL(/.*x/);

});

test("Flipkart", async ({ page }) => {
    await page.goto('https://www.flipkart.com/')
    // await page.waitForTimeout(2000);

    const title = await page.title();
    console.log("PAGE TITLE:", title);

    const currentURL = await page.url();
    console.log("CURRENT URL:", currentURL);

    await expect(page).toHaveTitle(/Online/);

    await expect(page).toHaveURL(/.*flipkart/);

});

test("Pinterest", async ({ page }) => {
    await page.goto('https://in.pinterest.com/')
    // await page.waitForTimeout(2000);

    const title = await page.title();
    console.log("PAGE TITLE:", title);

    const currentURL = await page.url();
    console.log("CURRENT URL:", currentURL);

    await expect(page).toHaveTitle(/Pinterest/);

    await expect(page).toHaveURL(/.*pinterest/);

});