import { chromium, test,expect } from "@playwright/test";

test("Open Two Websites", async()=> {

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();

    const page1 = await context.newPage();
    await page1.goto("https://www.google.com");

    const page2 = await context.newPage();
    await page2.goto("https://www.amazon.in/");

    const browserTabLists = context.pages();

    for(let i=0; i< browserTabLists.length; i++){

        console.log(`Page ${i + 1}: ${browserTabLists[i].url()}`);
    }
    console.log("Open Tab Count: ", browserTabLists.length);

    await browser.close();
});

test("Create Two Browser Contexts", async()=> {

    const browser = await chromium.launch({ headless: false });

    const context1 = await browser.newContext();

    const page1 = await context1.newPage();
    await page1.goto("https://www.google.com");

    const context2 = await browser.newContext();

    const page2 = await context2.newPage();
    await page2.goto("https://www.amazon.in/");

    const contextLists = browser.contexts();

    console.log("Context Count: ", contextLists.length);

    for(const contexts of contextLists){
        for (const page of contexts.pages()) {
            console.log("Page URL:", page.url());
        }
    }

    await browser.close();
});

test("Verify Page Title", async({page}) => {

    await page.goto("https://www.google.com");

    const pageTitle = await page.title();
    console.log("Page Title: ", pageTitle);
    await expect(page).toHaveTitle("Google");

});

test("Navigate Multiple Websites", async({page}) => {

    await page.goto("https://www.google.com");
    console.log("Intial Page URL: ", page.url());

    await page.goto("https://www.amazon.in/");
    console.log("Updated Page URL: ", page.url());
    
});

test("Verify Current Url", async({page}) => {

    await page.goto("https://www.linkedin.com");
    console.log("Current URL: ", page.url());

    expect(page.url()).toContain("linkedin");
    
});

test("Verify Total Tab Count", async()=>{

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();

    const page1 = await context.newPage();
    await page1.goto("https://www.google.com");

    const page2 = await context.newPage();
    await page2.goto("https://www.amazon.in");

    const page3 = await context.newPage();
    await page3.goto("https://www.flipkart.com");

    const pages = context.pages();
    console.log("Print Total Tab Count: ", pages.length);
    expect(pages.length).toBe(3);

    await browser.close();
});

test("Switch Between Tabs", async()=>{
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();

    const page1 = await context.newPage();
    await page1.goto("https://www.google.com");

    const page2 = await context.newPage();
    await page2.goto("https://www.amazon.in");

    await page1.bringToFront();
    console.log("Page1 Title: ", await page1.title());
    await expect(page1).toHaveTitle(/Google/);

    await page2.bringToFront();
    console.log("Page2 Title: ", await page2.title());
    await expect(page2).toHaveTitle(/Amazon/);
 
    await browser.close();
});

 test("Print All Titles", async()=>{

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();

    const page1 = await context.newPage();
    await page1.goto("https://www.google.com");

    const page2 = await context.newPage();
    await page2.goto("https://www.amazon.in/");

    const page3 = await context.newPage();
    await page3.goto("https://www.flipkart.com");

    const pages = context.pages();

    const expectedTitles = [
        /Google/,
        /Amazon/,
        /Online Shopping/
    ];

    for (let i = 0; i < pages.length; i++) {
        console.log(`Page ${i + 1} Title: ${await pages[i].title()}`);
        await expect(pages[i]).toHaveTitle(expectedTitles[i]);
    }
    await browser.close();
});

test("Verify Browser Context Count", async()=>{

    const browser  = await chromium.launch({ headless: false });
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();
    const context3 = await browser.newContext();

    const page1 = await context1.newPage();
    await page1.goto("https://www.google.com");

    const page2 = await context2.newPage();
    await page2.goto("https://www.google.com");

    const page3 = await context3.newPage();
    await page3.goto("https://www.google.com");

    const browserContexts = browser.contexts();
    console.log("Total Context Count: ", browserContexts.length);
    expect(browserContexts.length).toBe(3);

    await browser.close();
});

test("Open Same Website in Multiple Tabs", async()=>{

    const browser  = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    
    const page1 = await context.newPage();
    await page1.goto("https://www.google.com");

    const page2 = await context.newPage();
    await page2.goto("https://www.google.com");

    const page3 = await context.newPage();
    await page3.goto("https://www.google.com");

    const contextPages = context.pages();
    const titles = [];
    for(let i=0; i < contextPages.length; i++){

        console.log(`Tab ${i + 1} Page URL: ${contextPages[i].url()}`);
        console.log(`Tab ${i + 1} Page Title: ${await contextPages[i].title()}`);
        titles.push(await contextPages[i].title());
    }
    expect(titles[0]).toBe(titles[1]);
    expect(titles[1]).toBe(titles[2]);
    await browser.close();
});

test("Navigate Using a Single Page", async({page})=>{

    await page.goto("https://www.google.com");
    console.log(page.url());

    await page.goto("https://www.amazon.in/");
    console.log(page.url());

    await page.goto("https://www.flipkart.com");
    console.log(page.url());

});

test("Verify URL and Title",async({page})=>{

    await page.goto("https://github.com");

    const pageTitle = await page.title();
    const pageUrl = page.url();
    console.log("Page Title: ", pageTitle);
    console.log("Page Url: ", pageUrl);
    await expect(page).toHaveTitle(/GitHub/);
    await expect(page).toHaveURL(/github\.com/);
});

test("Browser, Context, and Page Practice", async()=>{

    const browser = await chromium.launch({ headless: false });
    const browserContext = await browser.newContext();

    const page1 = await browserContext.newPage();
    await page1.goto("https://www.google.com");

    const page2 = await browserContext.newPage();
    await page2.goto("https://www.google.com");

    const page3 = await browserContext.newPage();
    await page3.goto("https://www.google.com");

    const contextPages = browserContext.pages();
    for(let i=0; i < contextPages.length; i++){
        console.log(`Tab ${i + 1} Page URL: ${contextPages[i].url()}`);
        console.log(`Tab ${i + 1} Page Title: ${await contextPages[i].title()}`);
    }
    console.log("Total Page Count: ", contextPages.length);
    expect(contextPages.length).toBe(3);
    await browser.close();
});