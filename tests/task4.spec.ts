import {test,expect} from '@playwright/test';

test.setTimeout(70000);

// Facebook
test('Facebook Launch',async({page})=>{

    await page.goto('https://www.facebook.com/')
    
    // Enter value
    const userName = page.locator('[name="email"]');
    await userName.fill("maha@example.com");
    // await page.fill('[name="email"]', 'xxxxxxxx@gmail.com');
    //await page.getByRole('textbox', {name:'email'}).fill('xxxxxxxx@gmail.com');

    const passWord = page.locator('[name="pass"]');
    await passWord.fill("12345");

    const loginBtn = page.getByRole("button",{name:'Log in'});
        
    //Get value
    const userNameText = await userName.inputValue();
    const passWordText = await passWord.inputValue();
    const loginBtnText = await loginBtn.textContent();

    console.log("User Name: ",userNameText);
    console.log("Password: ",passWordText);
    console.log("Button Name: ",loginBtnText);
    await loginBtn.click();
    console.log("Login button clicked");

});

// Microsoft
test("Microsoft Launch",async({page})=>{

    await page.goto('https://www.microsoft.com/en-in');

    const loginBtn = page.getByRole('button',{name:"ME"});
    const loginBtnText = await loginBtn.textContent();
    console.log("Profile Button Name: ",loginBtnText);
    await loginBtn.click();
    console.log("Microsoft Sign in button clicked");

    const emailVal = page.locator("#usernameEntry");
    await emailVal.fill("xxxxxxxx@gmail.com");

    // const nextBtn = page.getByRole('button',{name:"Next"});
    const nextBtn = page.getByTestId('primaryButton');
    
    const emailValText = await emailVal.inputValue();
    const nextBtnText = await nextBtn.textContent();

    console.log("Email: ", emailValText);
    console.log("Button Name: ", nextBtnText);
    await nextBtn.click();
    console.log("Next button clicked");
    
});

// Amazon
test("Amazon Launch",async({page})=>{

    await page.goto('https://www.amazon.in/');

    const signinBtn = page.getByRole('link',{ name:"Sign in" });
    const signinBtnText = await signinBtn.textContent();

    console.log("Button Name: ",signinBtnText);
    await signinBtn.click();
    console.log("Sign in button clicked");

    const emailVal = page.locator('[name="email"]');
    await emailVal.fill("mahaamzon@gmail.com");

    const continueBtn = page.locator('input[type="submit"]');

    const emailValText = await emailVal.inputValue();
    // const continueBtnText = await continueBtn.textContent();
    const conBtnText = await page.locator('#continue-announce').textContent();

    console.log("Email: ", emailValText);
    console.log("Button Name: ", conBtnText);
    await continueBtn.click();
    console.log("Continue button clicked");
    
});

// Flipkart
test("Flipkart Launch",async({page})=>{

    await page.goto('https://www.flipkart.com/');

    const emailVal = page.locator('input.xkp9Hl.ZvCKfk');
    await emailVal.fill("sample@flipkart.com");
        
    const RequestBtn = page.getByRole('button',{ name:"Request OTP" });
    
    const emailValText = await emailVal.inputValue();
    const RequestBtnText = await RequestBtn.textContent();

    console.log("Email: ", emailValText);
    console.log("Button Name: ", RequestBtnText);
    await RequestBtn.click();
    console.log("Request OTP button clicked");
    
});

// Instagram
test('Instagram Launch',async({page})=>{

    await page.goto('https://www.instagram.com/');

    const emailVal = page.getByRole('textbox',{ name:"email" });
    await emailVal.fill("sample@insta.com");

    const passVal = page.getByRole('textbox',{ name:"password" });
    await passVal.fill("AB1234");
        
    const loginBtn = page.locator('text="Log in"');
    
    const emailValText = await emailVal.inputValue();
    const passValText = await passVal.inputValue();
    const loginBtnText = await loginBtn.textContent();

    console.log("Email: ", emailValText);
    console.log("Password: ", passValText);
    console.log("Button Name: ", loginBtnText);
    await loginBtn.click();
    console.log("Login button clicked");
    
});

// Twitter
test('Twitter Launch',async({page})=>{

    await page.goto('https://x.com/');

    const emailVal = page.locator('[name="username_or_email"]');
    await emailVal.fill("sample@twitt.com");

    const contBtn = page.getByRole('button',{ name: 'Continue', exact: true });
    
    const emailValText = await emailVal.inputValue();
    const contBtnText = await contBtn.textContent();

    console.log("Email: ", emailValText);
    console.log("Button Name: ", contBtnText);
    await contBtn.click();
    console.log("Continue button clicked");
  
});

// Netflix
test('Netflix Launch',async({page})=>{

    await page.goto('https://www.netflix.com/in/');
    
    const signinBtn = page.getByRole('link',{ name:"Sign in" });
    const signinBtnText = await signinBtn.textContent();

    console.log("Button Name: ",signinBtnText);
    await signinBtn.click();
    console.log("Sign in button clicked");

    const emailVal = page.locator('input[name="userLoginId"]');
    await emailVal.fill("sample@netflix.com");

    const contBtn = page.getByRole('button',{ name:"Continue" });
    
    const emailValText = await emailVal.inputValue();
    const contBtnText = await contBtn.textContent();

    console.log("Email: ", emailValText);
    console.log("Button Name: ", contBtnText);
    await contBtn.click();
    console.log("Continue button clicked");

});

// Youtube
test('Youtube Launch',async({page})=>{

    await page.goto('https://www.youtube.com/');
   
    const searchVal = page.getByRole('combobox', { name: 'Search' });
    await searchVal.fill('Playwright Automation');
    const searchValText = await searchVal.inputValue();
    console.log(searchValText);
    console.log("Youtube Search button clicked");

});

//Google
test("Google Launch", async ({ page }) => {
    await page.goto('https://www.google.com/');

    const searchVal = page.getByRole('combobox', { name: 'Search' });
    await searchVal.fill('Playwright Automation Test');
    const searchValText = await searchVal.inputValue();
    console.log(searchValText);
    console.log("Google search entered");
});

// Spotify
test('Spotify Launch',async({page})=>{

    await page.goto('https://open.spotify.com/');
    
    const signinBtn = page.getByRole('button',{ name:"Log in" });
    const signinBtnText = await signinBtn.textContent();

    console.log("Button Name: ",signinBtnText);
    await signinBtn.click();
    console.log("Sign in button clicked");

    const emailVal = page.locator('#username');
    await emailVal.fill("sample@spotify.com");

    const contBtn = page.getByRole('button',{ name:"Continue" });
    
    const emailValText = await emailVal.inputValue();
    const contBtnText = await contBtn.textContent();

    console.log("Email: ", emailValText);
    console.log("Button Name: ", contBtnText);
    await contBtn.click();
    console.log("Continue button clicked");

});