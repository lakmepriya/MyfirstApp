import {test,expect} from '@playwright/test';
import userdata from "../testData/userdata.json";

// //Open https://www.google.com and locate the "Google Search" button.
// test("Google Search Locate", async({page})=>{

//     await page.goto("https://www.google.com");

//     const searchVal = page.getByRole('button',{name:"Google Search"});
//     await searchVal.click();
//     // await page.waitForTimeout(2000);
//     console.log("Google search button clicked.");

// });


// //Open https://github.com/login and locate the "Sign in" heading.
// test("Get Sign in Heading", async({page})=>{

//     await page.goto("https://github.com/login");

//     const signVal = page.getByText("Sign in to GitHub");
//     // const signVal = page.getByRole('heading', { name: 'Sign in to GitHub' });
//     await expect(signVal).toBeVisible();
//     const signValText = await signVal.textContent();
//     console.log(signValText);

// });

// //Open https://www.saucedemo.com/ and locate the Username input field.
// test("Locate Username",async({page})=>{

//     await page.goto("https://www.saucedemo.com/");

//     const userName = page.getByPlaceholder("Username");
//     await userName.fill("Mahlaksh");
//     const userNameVal = await userName.inputValue();
//     console.log("Username: ",userNameVal);
// });

// //Open https://www.saucedemo.com/ and locate the Password input field.
// test("Locate Password",async({page})=>{

//     await page.goto("https://www.saucedemo.com/");

//     const passWord = page.getByPlaceholder("password");
//     await passWord.fill("ABC123");
//     const passWordVal = await passWord.inputValue();
//     console.log("Password: ",passWordVal);
// });

// //Open https://demoqa.com/text-box and locate the Full Name input field.
// test("Locate Full Name",async({page})=>{

//     await page.goto("https://demoqa.com/text-box");

//     const fullName = page.getByPlaceholder("Full Name");
//     await fullName.fill("Maha Lakshmi");
//     const fullNameVal = await fullName.inputValue();
//     console.log("Full Name: ",fullNameVal);
// });

// //Open https://demoqa.com/radio-button and locate the "Yes" radio button.
// test("Locate Radio Button Yes",async({page})=>{

//     await page.goto("https://demoqa.com/text-box");

//     const radioLink  = page.getByRole("link",{ name:'Radio Button' });
//     await radioLink.click();
//     const yesVal = page.getByRole('radio',{name:"Yes"});
//     await yesVal.check();
//     await page.waitForTimeout(2000);
//     const yesValText = await expect(yesVal).toBeChecked();
//     console.log('Yes radio button selected.');
// });

// //Open https://demoqa.com/buttons and locate the "Double Click Me" button.
// test("Locate Double Click Me Button",async({page})=>{

//     await page.goto("https://demoqa.com/text-box");

//     const radioLink  = page.getByRole("link",{ name:'Buttons' });
//     await radioLink.click();
//     const doubleBtnVal = page.getByRole('button',{ name:"Double Click Me" });
//     await doubleBtnVal.click();
//     console.log('Double Click Me Clicked.');
// });

// //Open https://playwright.dev/ and locate the "Get started" link.
// test("Locate Get Started Link",async({page})=>{

//     await page.goto("https://playwright.dev/");

//     const getStartLink  = page.getByRole("link",{ name:'Get started' });
//     await getStartLink.click();
//     console.log('Get started link Clicked.');
// });

// //Open https://demoqa.com/automation-practice-form and locate the First Name input field.
// test("Locate First Name", async({page})=>{

//     await page.goto("https://demoqa.com/automation-practice-form");
//     const firstName = page.getByPlaceholder("First Name");
//     await firstName.fill("Maha");
//     const firstNameVal = await firstName.inputValue();
//     console.log(firstNameVal);

// });

//Multiple userdata with example in loop

// const userDataCount = userdata.length;
// for (let i = 0; i < userDataCount; ++i){
//     test("Facebook Launch ${i+1}", async({page})=>{

//         await page.goto("https://www.facebook.com");
        
//         const userName = page.locator('[name="email"]');
//         const userPass = page.locator('[name="pass"]');
//         const loginBtn = page.getByRole("button", {name:'Log in'} );
        
//         await userName.fill(userdata[i].name);
//         await userPass.fill(userdata[i].password);

//         const userNameVal = await userName.inputValue();
//         const userPassVal = await userPass.inputValue();
//         console.log("Username: ", userNameVal);
//         console.log("Password: ", userPassVal);
//         await loginBtn.click();
            
//     });
// }


//Wikipedia
// Get Wikipedia Text
test("Wikipedia Test", async({page})=>{
    
    await page.goto("https://www.wikipedia.org/");
    const textVal = page.getByText("Wikipedia", { exact: true });
    const textValue = await textVal.textContent();
    console.log(textValue);

    //Fill input search element
    const searchInput = page.getByLabel("Search Wikipedia");
    await searchInput.fill("English");
    const searchVal = await searchInput.inputValue();
    console.log(searchVal);

    //Click Read Wikipedia language button
    const langBtn = page.getByRole("button", {name:"Read Wikipedia in your language"} );
    console.log(await langBtn.innerText());
    console.log(await langBtn.count());
    console.log(await expect(langBtn).toBeVisible());
    console.log(await langBtn.isVisible());
    console.log(await langBtn.isEnabled());
    await langBtn.click({ trial: true });

    //Get English link
    const textLink = page.getByRole("link", {name: 'English'} );
    const textLinkVal = await textLink.textContent(); //print the actual text
    console.log(textLinkVal);
    await expect(textLink).toContainText("English"); //expect() doesn't return the text. It only checks whether the assertion passes
    console.log("Assertion passed");
    await textLink.click();

    
});

//Get Tamil Link
// test("Get Link", async({page})=>{
//     await page.goto

// });

