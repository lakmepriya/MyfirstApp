import { chromium, test, expect } from "@playwright/test";

test("Launch Chrome", async()=> {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.amazon.in/");
    const searchVal = page.locator('//input[@id="twotabsearchtextbox"]');
    await searchVal.fill("iphone");
    await searchVal.press('Enter');
    const product1 = page.locator('(//div[contains(@class, "puis-card-container")])[3]/descendant::div[@data-cy="title-recipe"]/descendant::a');
    console.log("Amazon Product Title: ", await product1.locator("span").textContent());
    console.log("Amazon Product Price: ", await page.locator('(//div[contains(@class, "puis-card-container")])[3]/descendant::span[@class="a-price-whole"]').textContent());
    await expect(product1).toBeVisible();

    const [childPage] = await Promise.all([
        context.waitForEvent('page'),
        product1.click()
    ]);

    await childPage.waitForLoadState();
    console.log("Child page loaded");
    console.log(await childPage.title());
    const elementVal = childPage.locator('//span[text()=" Buy Now "]');
    await expect(elementVal).toBeVisible();
    console.log(await elementVal.textContent());

    //Flipkart
    const page1 = await context.newPage();
    await page1.goto('https://www.flipkart.com/');
    // await page1.waitForTimeout(5000);

    const searchVal2 = page1.locator('//input[@name="q"]').first();
    await expect(searchVal2).toBeVisible();
    await searchVal2.fill("iphone 17 pro");
    await searchVal2.press('Enter');

    const product2 = page1.locator('//div[contains(@class,"lvJbLV ")][3]/descendant::a');
    await expect(product2).toBeVisible();
    
    const productTitle2 = product2.locator('//div[contains(@class,"RG5Slk")]');
    console.log("Flipkart Product Title: ",await productTitle2.textContent());

    const [childPage1] = await Promise.all([
        context.waitForEvent("page"),
        product2.click()
    ]);
    
    await childPage1.waitForLoadState();
    console.log("Filpkart Child page loaded");
    console.log("Child Page Title: ", await childPage1.title());
    const buyNowText = childPage1.locator('//div[text()="Buy now"]');
    const buyNowPrice = childPage1.locator('//div[text()="Buy now"]/following::div[contains(@class,"css-g5y9jx")][1]').first();
    await expect(buyNowText).toBeVisible();
    console.log( await buyNowText.textContent() , await buyNowPrice.textContent());

});
