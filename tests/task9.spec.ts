import { expect, test,chromium } from "@playwright/test";
import { CodeReuse } from "./codeReuseMethod";
import { CodeReuse1 } from "./codeReuseMethod1";

test("Facebook Launch", async({page}) => {

    const codeReuseObj = new CodeReuse(page);

    //Reuse Open Page Url
    await codeReuseObj.pageOpen("https://www.facebook.com");

    //Reuse Get Page Title
    console.log("Page Title: ", await codeReuseObj.getPageTitle());

    //Reuse Get Page Url
    console.log("Page Url: ",codeReuseObj.getPageURL());

    await codeReuseObj.pageCheckTitle("/Facebook/");

    await codeReuseObj.pageCheckURL("/.*facebook/");

    //Reuse input Fill
    await codeReuseObj.pageFill('[name="email"]',"Maha");

    await codeReuseObj.pageFill('[name="pass"]',"Abc@123");

    await codeReuseObj.pageFillByRole("textbox",{name:"Email address or mobile number"},"Mahalakme");

    await codeReuseObj.pageFill('[name="pass"]',"XYZ@123");

    //Get value
    const userNameText = await codeReuseObj.pageGetInputValue('[name="email"]');
    const passWordText = await codeReuseObj.pageGetInputValue('[name="pass"]');
    const loginBtnText = await codeReuseObj.pageGetTextByRole("button",{ name: "Log in" });
    const creatBtnText = await codeReuseObj.pageGetTextByRole("link",{ name: "Create new account" });

    console.log("User Name: ",userNameText);
    console.log("Password: ",passWordText);
    console.log("Button Name: ",loginBtnText);
    console.log("Create Button Name: ",creatBtnText);
    console.log("Get Text: ", await codeReuseObj.pageGetTextByText("Explore the things you love."));

    await codeReuseObj.pageClickByRole("button",{name:"Log in"});

});

test("Two Website Open", async({page})=>{

    const codeReuseObj = new CodeReuse(page);
    await codeReuseObj.pageOpen("https://www.google.com");

    await codeReuseObj.pageOpen("https://www.amazon.in");

    await codeReuseObj.pageGoBack();

    console.log(codeReuseObj.getPageURL());

    await codeReuseObj.pageGoForward();

    console.log(codeReuseObj.getPageURL()); 

});

test("Microsoft Launch",async({page})=>{

    const codeReuseObj = new CodeReuse(page);
    await codeReuseObj.pageOpen('https://www.microsoft.com/en-in');

    const loginBtnText = await codeReuseObj.pageGetTextByRole('button',{ name: "ME" });
    console.log("Profile Button Name: ",loginBtnText);
    await codeReuseObj.pageClickByRole('button',{name:"ME"});
    console.log("Microsoft Sign in button clicked");


    await codeReuseObj.pageFill("#usernameEntry","xxxxxxxx@gmail.com");
    
    
    const emailValText = await codeReuseObj.pageGetInputValue("#usernameEntry");
    const nextBtnText = await codeReuseObj.pageGetTextByTestId("primaryButton");

    console.log("Email: ", emailValText);
    console.log("Button Name: ", nextBtnText);
    await codeReuseObj.pageCheckVisibleByTestId("primaryButton");
    await codeReuseObj.pageCheckEnableByTestId("primaryButton");
    await codeReuseObj.pageClickByTestId('primaryButton');
    console.log("Next button clicked");
    
});


test('Pinterest Launch', async ({ page }) => {

    const codeReuseObj = new CodeReuse(page);

    await codeReuseObj.pageOpen('https://in.pinterest.com/');

    await codeReuseObj.pageCheckTextByRole('button',{ name:"Log in" },"Log in");

    await codeReuseObj.pageClickByRole('button',{ name:"Log in" });
});

test("Dropdown Practice 1", async({page})=>{

    const codeReuseObj = new CodeReuse(page);
    await codeReuseObj.pageOpen("https://demoqa.com/select-menu");

    //Select an option from the 'Old Style Select Menu' using label/visible text.
    const oldDropdown = page.locator("#oldSelectMenu");
    await codeReuseObj.pageSelectOptionByLabel("#oldSelectMenu",'Blue');
    await codeReuseObj.pageLoadTime(2000);
    await codeReuseObj.pageCheckValue("#oldSelectMenu","1");

    //Select a Dropdown Value by Value
    await codeReuseObj.pageSelectOptionByValue("#oldSelectMenu","3");
    await codeReuseObj.pageLoadTime(2000);
    await codeReuseObj.pageCheckValue("#oldSelectMenu","3");

    //Select a Dropdown Value by Index
    await codeReuseObj.pageSelectOptionByIndex("#oldSelectMenu",5);
    await codeReuseObj.pageLoadTime(2000);
    const selectedText = await codeReuseObj.pageGetTextBySelectOptionChecked('#oldSelectMenu');
    console.log('Selected option text:', selectedText);
    
    //Verify the Selected Dropdown Option
    await codeReuseObj.pageSelectOptionByValue("#oldSelectMenu","8");
    console.log('Selected option text:', await codeReuseObj.pageGetTextBySelectOptionChecked('#oldSelectMenu'));
    await codeReuseObj.pageCheckText("#oldSelectMenu option:checked","Indigo");

    // Select Multiple Options
    const multiDropdown = page.locator("#cars");
    await multiDropdown.selectOption(["volvo","audi"]);
    const values = await multiDropdown.evaluate(
        (select: HTMLSelectElement) =>
        Array.from(select.selectedOptions).map(option=>option.value)
    );
    // console.log(values);
    console.log("Selected Dropdown Values:", await codeReuseObj.pageGetAllTextBySelectOptionChecked("#cars"));
    await codeReuseObj.pageCheckValues("#cars",["volvo", "audi"]);

    //Verify Dropdown is Enabled
    await codeReuseObj.pageCheckEnabled("#oldSelectMenu");
    await codeReuseObj.pageSelectOptionByValue("#oldSelectMenu","4");
    
});

test("Locate Radio Button Yes",async({page})=>{

    const codeReuseObj = new CodeReuse(page);

    await codeReuseObj.pageOpen("https://demoqa.com/text-box");

    await codeReuseObj.pageClickByRole("link",{ name:'Radio Button' });
    await codeReuseObj.pageCheckByRole("radio",{ name:'Yes' });
    const checked = await codeReuseObj.pageIsChecked("#yesRadio");
    console.log("Yes Radio Checked:", checked);  
    console.log("element count: ", await codeReuseObj.pageCountElements("#yesRadio"));  
    await codeReuseObj.pageLoadTime(2000);
    await codeReuseObj.pageCheckChecked("#yesRadio");
    await codeReuseObj.pageCheckCheckedByRole("radio",{ name:'Yes' });
    console.log('Yes radio button selected.');
});

test("Locate First Name", async({page})=>{
    const codeReuseObj = new CodeReuse(page);
    await codeReuseObj.pageOpen("https://demoqa.com/automation-practice-form");
    await codeReuseObj.pageFillByPlaceholder("First Name","Maha");
});

test("Wikipedia Test", async({page})=>{
    const codeReuseObj = new CodeReuse(page);
    
    await codeReuseObj.pageOpen("https://www.wikipedia.org/");

    await codeReuseObj.pageFillByLabel("Search Wikipedia","English");
    const innerTextWiki = await codeReuseObj.pageGetInnerTextByRole("button",{name:"Read Wikipedia in your language"});
    const countWiki =await codeReuseObj.pageGetCountByRole("button",{name:"Read Wikipedia in your language"});
    console.log(innerTextWiki);
    console.log(countWiki);
    await codeReuseObj.pageCheckVisibleByRole("button",{name:"Read Wikipedia in your language"});
    console.log(await codeReuseObj.pageCheckIsVisibleByRole("button",{name:"Read Wikipedia in your language"}));
});

test('Xpath Practice- Select a Checkbox', async({page})=>{

    const codeReuseObj = new CodeReuse(page);
    await codeReuseObj.pageOpen("https://demoqa.com/checkbox");
    const checkVal =  await codeReuseObj.pageClickByLocator("//span[contains(@class,'rc-tree-checkbox')]");
    await codeReuseObj.pageCheckClass("//span[contains(@class,'rc-tree-checkbox')]","rc-tree-checkbox-checked");
    await codeReuseObj.pageCheckText("#result","You have selected :homedesktopdocumentsdownloadsnotescommandsworkspaceofficewordFileexcelFilereactangularveupublicprivateclassifiedgeneral");
    await codeReuseObj.pageUnCheckByRole("checkbox",{ name:'Select Home' });
    await codeReuseObj.pageCheckNotCheckedByRole("checkbox",{ name:'Select Home' });
    await codeReuseObj.pageClickByRole("checkbox",{ name: "Select Home" });
});

test("Handle a Simple Alert",async({page})=>{

    const codeReuseObj = new CodeReuse(page);
    await codeReuseObj.pageOpen("https://the-internet.herokuapp.com/javascript_alerts");

    codeReuseObj.pageSimpleDialog();
    await codeReuseObj.pageClickByText("Click for JS Alert");
    await codeReuseObj.pageCheckText("#result","You successfully clicked an alert");

});

test("Handle a Confirmation Alert",async({page})=>{

    const codeReuseObj = new CodeReuse(page);
    await codeReuseObj.pageOpen("https://the-internet.herokuapp.com/javascript_alerts");

    codeReuseObj.pageAcceptDialog();

    await page.getByRole("button", { name: "Click for JS Confirm" }).click();
    console.log(await page.locator("#result").textContent());
    await codeReuseObj.pageWaitForSelector("#result");
    await expect(page.locator("#result")).toHaveText("You clicked: Ok");
});

test("Dismiss a Confirmation Alert",async({page})=>{

    const codeReuseObj = new CodeReuse(page);
    await codeReuseObj.pageOpen("https://the-internet.herokuapp.com/javascript_alerts");

    codeReuseObj.pageDismissDialog();

    await page.getByRole("button", { name: "Click for JS Confirm" }).click();
    console.log(await page.locator("#result").textContent());
    await expect(page.locator("#result")).toHaveText("You clicked: Cancel");
});

test("Handle a Prompt Alert", async({page})=>{

    const codeReuseObj = new CodeReuse(page);
    await codeReuseObj.pageOpen("https://the-internet.herokuapp.com/javascript_alerts");

    codeReuseObj.pagePromptAcceptDialog('Playwright User');

    await page.getByRole('button',{name:"Click for JS Prompt"}).click(); 
    console.log(await page.locator("#result").textContent());
    await expect(page.locator("#result")).toHaveText("You entered: Playwright User");

});

test("Dismiss a Prompt Alert", async({page})=>{

    const codeReuseObj = new CodeReuse(page);
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await codeReuseObj.pagePromptDismissDialog();

    await page.click("//button[text()='Click for JS Prompt']");
    console.log(await page.locator("#result").textContent());
    await expect(page.locator("#result")).toHaveText("You entered: null");

});

test("Handle Alert and Capture Screenshot", async({page})=>{

    const codeReuseObj = new CodeReuse(page);
    await codeReuseObj.pageOpen("https://the-internet.herokuapp.com/javascript_alerts");

    codeReuseObj.pageAcceptDialog();

    await page.getByRole("button", {name:'Click for JS Alert'}).click();

    await codeReuseObj.pageScreenShot("screenshots/Simple Alert Handling.png");

});

test("Handle Delayed Alert", async ({ page }) => {

    const codeReuseObj = new CodeReuse(page);

    await codeReuseObj.pageOpen("https://demoqa.com/alerts");
    await codeReuseObj.pageWaitForLoadState("load");
    const dialogPromise = codeReuseObj.pageWaitForEventDialog();
    await page.locator("#timerAlertButton").click();
    await codeReuseObj.pageDelayedAcceptDialog(await dialogPromise);
    
});

test("Open Two Websites", async()=> {

    const codeReuseObj1 = new CodeReuse1();

    const browser = await codeReuseObj1.browserLaunch();
    const context = await codeReuseObj1.browserContextLaunch(browser);

    const page1 = await codeReuseObj1.createNewPage(context);
    const codeReuseObjPage1 = new CodeReuse(page1);
    await codeReuseObjPage1.pageOpen("https://www.google.com");

    const page2 = await codeReuseObj1.createNewPage(context);
    const codeReuseObjPage2 = new CodeReuse(page2);
    await codeReuseObjPage2.pageOpen("https://www.amazon.in/");

    const browserTabLists = await codeReuseObj1.getBrowserPages(context);
    const pageCount = await codeReuseObj1.getPageCount(browserTabLists);

    for(let i=0; i< pageCount; i++){

        console.log(`Page ${i + 1}: ${browserTabLists[i].url()}`);
    }
    console.log("Open Tab Count: ", pageCount);
    await codeReuseObj1.pageCheckExactValue(pageCount, 2);

    await codeReuseObj1.browserClose(browser);
});

test("Verify Browser Context Count", async()=>{

    const codeReuseObj1 = new CodeReuse1();

    const browser  = await codeReuseObj1.browserLaunch();
    const context1 = await codeReuseObj1.browserContextLaunch(browser);
    const context2 = await codeReuseObj1.browserContextLaunch(browser);
    const context3 = await codeReuseObj1.browserContextLaunch(browser);

    const page1 = await codeReuseObj1.createNewPage(context1);
    await new CodeReuse(page1).pageOpen("https://www.google.com");

    const page2 = await codeReuseObj1.createNewPage(context2);
    await new CodeReuse(page2).pageOpen("https://www.google.com");

    const page3 = await codeReuseObj1.createNewPage(context3);
    await new CodeReuse(page3).pageOpen("https://www.google.com");

    const browserContexts = await codeReuseObj1.getBrowserContexts(browser);
    const browserContextsLength = await codeReuseObj1.getContextCount(browserContexts);
    console.log("Total Context Count: ", browserContextsLength);
    expect(browserContextsLength).toBe(3);

    await browser.close();
});

test("Switch Between Tabs", async()=>{

    const codeReuseObj1 = new CodeReuse1();

    const browser = await codeReuseObj1.browserLaunch();
    const context = await codeReuseObj1.browserContextLaunch(browser);

    const page1 = await codeReuseObj1.createNewPage(context);
    const codeReuseObjPage1 = new CodeReuse(page1);
    await codeReuseObjPage1.pageOpen("https://www.google.com");

    const page2 = await codeReuseObj1.createNewPage(context);
    const codeReuseObjPage2 = new CodeReuse(page2);
    await codeReuseObjPage2.pageOpen("https://www.amazon.in/");

    await codeReuseObjPage1.pageBringToFront();
    console.log("Page1 Title: ", await page1.title());
    await expect(page1).toHaveTitle(/Google/);

    await codeReuseObjPage2.pageBringToFront();
    console.log("Page2 Title: ", await page2.title());
    await expect(page2).toHaveTitle(/Amazon/);
 
    await codeReuseObj1.browserClose(browser);
});

test("Reload Page", async ({ page }) => {

    const codeReuseObj = new CodeReuse(page);

    await codeReuseObj.pageOpen("https://www.google.com");

    console.log("Before Reload:", page.url());

    await codeReuseObj.pageReload();

    console.log("After Reload:", page.url());

});
