import {test, expect} from "@playwright/test";


test("Xpath Practice- Locate and Click a Button", async({page})=>{

    await page.goto("https://demoqa.com/buttons");

    await page.locator("//button[text()='Click Me']").click();
    const successMessageLocator = page.locator("//p[@id='dynamicClickMessage']");
    await expect(successMessageLocator).toHaveText("You have done a dynamic click");

});

test("Xpath Practice- Enter Text in a Textbox", async({page})=>{

    await page.goto("https://demoqa.com/text-box");

    const fullName = page.locator("//input[@id='userName']");
    await fullName.fill("Mahalakshmi");
    await expect(fullName).toHaveValue("Mahalakshmi");

});

test("Xpath Practice- Fill a Login Form", async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/");

    const userName = page.locator("//input[@id='username']");
    await userName.fill("student");
    const userPass = page.locator("//input[@id='password']");
    await userPass.fill("Password123");
    await page.locator("//button[@id='submit']").click();
    await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/");

});

test("Xpath Practice- Search for a Product", async({page})=>{

    await page.goto("https://www.amazon.in");

    const searchVal = page.locator("//input[@id='twotabsearchtextbox']");
    await searchVal.fill("iPhone");
    await page.locator("//input[@id='nav-search-submit-button']").click();
    
});

test("Xpath Practice- Click a Hyperlink", async({page})=>{

    await page.goto("https://the-internet.herokuapp.com");

    const linkVal =  page.locator("//a[contains(text(),'Checkboxes')]");
    await linkVal.click();
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/checkboxes");
    
});

test('Xpath Practice- Select a Checkbox', async({page})=>{

    await page.goto("https://demoqa.com/checkbox");
    const checkVal = page.locator("//span[contains(@class,'rc-tree-checkbox')]").first();
    await checkVal.click();
    await expect(checkVal).toHaveClass(/rc-tree-checkbox-checked/);
    await expect(page.locator("#result")).toHaveText(
    "You have selected :homedesktopdocumentsdownloadsnotescommandsworkspaceofficewordFileexcelFilereactangularveupublicprivateclassifiedgeneral"
    );

});

test('Xpath Practice- Select a Radio Button', async({page})=>{

    await page.goto("https://demoqa.com/radio-button");
    const radioVal = page.locator("//label[@for='yesRadio']");
    await radioVal.check();
    await expect(page.locator('//p[@class="mt-3"]')).toHaveText("You have selected Yes");
    
});

test('Xpath Practice- Select a Dropdown Value', async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/dropdown");
    const dropVal = page.locator('//select[@id="dropdown"]');
    await dropVal.selectOption("2");
    await expect(dropVal).toHaveValue("2");
    
});

test('Xpath Practice- Handle an Alert', async({page})=>{

    await page.goto("https://demoqa.com/alerts");

    page.on("dialog", async(dialog) => {

        console.log(dialog.message());
        await dialog.accept();

    });
    await page.locator("//button[@id='alertButton']").click();
        
});

test('Xpath Practice- Validate Page Elements', async({page})=>{

    await page.goto("https://demoqa.com/text-box");

    const userName = page.locator('//input[@id="userName"]');
    const userEmail = page.locator('//input[@id="userEmail"]');
    const submitBtn = page.locator('//button[@id="submit"]');

    await expect(userName).toBeVisible();
    await expect(userEmail).toBeVisible();
    await expect(submitBtn).toBeVisible();
});