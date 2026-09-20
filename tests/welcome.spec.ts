import { test,expect } from '@playwright/test';

// test("Add two numbers", async()=>{
//     console.log("Welcome to playwright program");
// });

// const names = ['Laptop', 'Mobile', 'Camera'];

// for (const a of names) {
//     test(`search for ${a}`, async () => {
//         console.log(a);
//     });
// }


test("Google Launch", async ({ page }) => {
    await page.goto('https://www.google.com/')
    // await page.waitForTimeout(2000);
   
    // await page.locator('textarea[name="q"]').fill('Welcome to Playwright');
    await page.fill('textarea[name="q"]','Welcome to Playwright');
    await page.waitForTimeout(4000);

    // await page.locator('textarea[placeholder="Ask Google"]').fill('Welcome to Playwright'); //not working because the placeholder will be empty

    const title = await page.title();
    console.log("PAGE TITLE:", title);

    const currentURL = page.url();
    console.log("CURRENT URL:", currentURL);

    await expect(page).toHaveTitle(/Google/);

    await expect(page).toHaveURL(/.*google/);

});

// test("facebook Launch", async ({ page }) => {
//     await page.goto('https://www.facebook.com/')
//     await page.waitForTimeout(2000);

//     const title = await page.title();
//     console.log("PAGE TITLE:", title);

//     const currentURL = page.url();
//     console.log("CURRENT URL:", currentURL);

//     await expect(page).toHaveTitle(/Facebook/);

//     await expect(page).toHaveURL(/.*facebook/);

// });

// test("Microsoft", async ({ page }) => {
//     await page.goto('https://www.microsoft.com/')
//     await page.waitForTimeout(2000);

//     const title = await page.title();
//     console.log("PAGE TITLE:", title);

//     const currentURL = page.url();
//     console.log("CURRENT URL:", currentURL);

//     await expect(page).toHaveTitle(/Microsoft/);

//     await expect(page).toHaveURL(/.*microsoft/);

// });

// test("Amazon", async ({ page }) => {
//     await page.goto('https://www.amazon.in/')
//     await page.waitForTimeout(2000);

//     const title = await page.title();
//     console.log("PAGE TITLE:", title);

//     const currentURL = page.url();
//     console.log("CURRENT URL:", currentURL);

//     await expect(page).toHaveTitle(/Amazon/);

//     await expect(page).toHaveURL(/.*amazon/);

// });