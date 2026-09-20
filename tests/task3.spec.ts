//Example of 10 websites to open email and password fill
import {test,expect} from '@playwright/test';

test.setTimeout(60000);


//Google
test("Google Launch", async ({ page }) => {
    await page.goto('https://www.google.com/')
    // await page.waitForTimeout(2000);
   
    await page.fill('textarea[name="q"]','Welcome to Playwright');
    // await page.waitForTimeout(4000);
    console.log("Google search entered");
});

// Facebook
test('Facebook Launch',async({page})=>{

    await page.goto('https://www.facebook.com/')
    
    // Enter value
    await page.fill('[name="email"]', 'xxxxxxxx@gmail.com');
    
    await page.fill('[name="pass"]', '1Ad234');
    
    await page.locator('[aria-label="Log in"]').click();
    console.log("Login button clicked");

});

//Microsoft
test("Microsoft Launch",async({page})=>{

    await page.goto('https://www.microsoft.com/en-in');
    await page.locator('button', { hasText: 'ME' }).click();
    console.log("Microsoft Sign in button clicked");

    await page.fill("#usernameEntry","xxxxxxxx@gmail.com");
    
    await page.locator('[data-testid="primaryButton"]').click();
    console.log("Next button clicked");
    
});

//Amazon
test("Amazon Launch",async({page})=>{

    await page.goto('https://www.amazon.in/');

    await page.locator('[data-nav-role="signin"]').first().click();
    console.log("Sign in button clicked");
    
    await page.fill('[name="email"]',"xxxxxxxx@gmail.com");
    // await page.waitForTimeout(2000);

    await page.locator('[aria-labelledby="continue-announce"]').click();
    console.log("Next button clicked");
    // await page.waitForTimeout(2000);

});

//Flipkart
test("Flipkart Launch",async({page})=>{

    await page.goto('https://www.flipkart.com/');

    await page.fill('input.xkp9Hl.ZvCKfk',"xxxxxxxx@gmail.com");
    // await page.waitForTimeout(2000);

    await page.locator('button.WHahJn.UejJtu.sz5klr').click();
    console.log("Request OTP button clicked");
    // await page.waitForTimeout(2000);

});

//Instagram
test('Instagram Launch',async({page})=>{

    await page.goto('https://www.instagram.com/');
    await page.waitForTimeout(3000);
    
    // Enter value
    await page.fill('[name="email"]', 'xxxxxxxx@gmail.com');
    // await page.waitForTimeout(2000);

    await page.fill('[name="pass"]', 'password');
    // await page.waitForTimeout(2000);

    await page.locator('[aria-label="Log In"]').click();
    // await page.locator('button[type="submit"]').click();
    // await page.locator('button:has-text("Log in")').click();
    console.log("Instagram Login button clicked");

});

//Twitter
test('Twitter Launch',async({page})=>{

    await page.goto('https://x.com/');
    // await page.waitForTimeout(2000);
    
    // Enter value
    await page.fill('[name="username_or_email"]', 'xxxxxxxx@gmail.com');
    
    await page.locator('button[type="submit"]', { hasText: 'Continue' }).click();
    console.log("Twitter continue button clicked");

});


//Pinterest
test('Pinterest Launch', async ({ page }) => {

    await page.goto('https://in.pinterest.com/');

    await page.locator('[data-test-id="simple-login-button"]').click();
    console.log("Sign in button clicked");
    

    await page.fill('[name="id"]', "xxxxxxxx@gmail.com");
    // await page.waitForTimeout(2000);

    await page.fill('[name="password"]', "password");

    await page.locator('button[type="submit"]').click();
    console.log("Log In button clicked");

});


//Netflix
test('Netflix Launch',async({page})=>{

    await page.goto('https://www.netflix.com/in/');
    // await page.waitForTimeout(2000);
    
    // Enter value
    await page.fill('[name="email"]', 'xxxxxxxx@gmail.com');
    
    await page.locator('[data-uia="nmhp-card-cta+hero_card"]').click();
    console.log("Get Started button clicked");

});

//Youtube
test('Youtube Launch',async({page})=>{

    await page.goto('https://www.youtube.com/');
    // await page.waitForTimeout(2000);

    // Enter value
    await page.fill('[name="search_query"]', 'Playwright Automation');
    // await page.waitForTimeout(2000);
    
    console.log("Search button clicked");

});

// Pinterest
// test('Pinterest Launch', async ({ page }) => {

//     await page.goto('https://in.pinterest.com/');

//     const signinBtn = page.getByRole('button',{ name:"Log in" }).first();
//     const signinBtnText = await signinBtn.textContent();

//     console.log("Button Name: ",signinBtnText);
//     await signinBtn.click();
//     console.log("Sign in button clicked");
//     await page.waitForTimeout(3000);

    
//     const emailVal = page.locator('input[type="email"]');
//     await emailVal.waitFor({ state: 'visible' });
//     await emailVal.fill("mahapin@gmail.com");
    
//     const passVal = page.locator('input[type="password"]');
//     await passVal.fill("ABC@1234");

//     //const loginBtn = page.locator('button[aria-label="Log in"]');
//     const frame = page.frameLocator('iframe');

//     const loginBtn = frame.locator('button[aria-label="Log in"]');
//     console.log("Login button count:", await loginBtn.count());
//     console.log(await page.locator('button').allTextContents());
    
//     // const loginBtn = page.getByRole('button',{ name:"Log in" });
    
//     const emailValText = await emailVal.inputValue();
//     const passValText = await passVal.inputValue();
//     const loginBtnText = await loginBtn.textContent();
    
//     console.log("Email: ", emailValText);
//     console.log("Password: ", passValText);
//     console.log("Button Name: ", loginBtnText);
//     await loginBtn.click();
//     console.log("Log In button clicked");

// });