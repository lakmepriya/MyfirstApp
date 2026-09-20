import { test,expect } from "@playwright/test";

test("Fetch the Text Inside an iFrame", async({page}) =>{

    //open page url
    await page.goto("https://demoqa.com/frames");

    //Locate frame1
    const frame1 = page.frameLocator("#frame1");

    //Retrive Heading and print to the console
    const frame1Heading = await frame1.locator("#sampleHeading").textContent();
    console.log("Frame Heading: ",frame1Heading);

    //capture screenshot
    await page.screenshot({path : "screenshots/Frame1.png"});

});

test("Print Text from Parent and Child Frames", async({page})=>{

    //open page url
    await page.goto("https://demoqa.com/nestedframes");
    
    //Access Parent Frame
    const parentFrame = page.frameLocator("#frame1");

    //Print the parent frame text content.
    console.log("Parent Frame Content: ", await parentFrame.locator("body").innerText());

    //Get Child Frame
    const childFrame = parentFrame.frameLocator("iframe");

    //Print the child frame text content.
    console.log("Child Frame Content: ", await childFrame.locator("p").innerText());

});

test("Retrieve Text from Multiple Nested Frames", async({page})=>{

    //open page url
    await page.goto("https://the-internet.herokuapp.com/nested_frames");
    
    //Access Top Frame
    const topFrame = page.frameLocator("[name='frame-top']");

    //locate Left, Middle, and Right sub-frames
    const leftFrame = topFrame.frameLocator("[name='frame-left']");
    const middleFrame = topFrame.frameLocator("[name='frame-middle']");
    const rightFrame = topFrame.frameLocator("[name='frame-right']");

    //Locate the bottom Frame
    const bottomFrame = page.frameLocator("[name='frame-bottom']");

    //Extract text contentfrom all frames and Store all frame texts in an array and print the array.
    let frameContent:string[] = [];
    frameContent.push(await leftFrame.locator("body").innerText());
    frameContent.push(await middleFrame.locator("#content").innerText());
    frameContent.push(await rightFrame.locator("body").innerText());
    frameContent.push(await bottomFrame.locator("body").innerText());
    
    console.log(frameContent);

});


test("Extract Text from the Inner iFrame", async({page})=>{

    //open page url
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe");

    const outerFrame = page.frameLocator("#iframeResult");
    const innerFrame =  outerFrame.frameLocator("iframe");
    
    //Extract Text from Inner Frame
    const innerHeadingText = await innerFrame.locator("h1").textContent();
    console.log("Inner Frame Text: ", innerHeadingText);

});

test("Count the Total Number of iFrames", async({page})=> {

    //open page url
    await page.goto("https://demoqa.com/frames");

    //Retrieve all frames Count
    const frameCount = await page.locator("iframe").count();

    console.log("Total Iframe Count: ",frameCount);

});

test("Print Text from All Nested Frames", async({page}) => {

    //open page url
    await page.goto("https://the-internet.herokuapp.com/nested_frames");

    //locate Left, Middle, and Right sub-frames
    const topFrame = page.frameLocator("[name='frame-top']");

    const leftFrame = topFrame.frameLocator("[name='frame-left']");
    const middleFrame = topFrame.frameLocator("[name='frame-middle']");
    const rightFrame = topFrame.frameLocator("[name='frame-right']");

    //Locate the bottom Frame
    const bottomFrame = page.frameLocator("[name='frame-bottom']");


    //Retrieve the text from each frame
    const leftFrameContent = await leftFrame.locator("body").innerText();
    const middleFrameContent = await middleFrame.locator("#content").innerText();
    const rightFrameContent = await rightFrame.locator("body").innerText();
    const bottomFrameContent = await bottomFrame.locator("body").innerText();

    //Print each frame's text separately with descriptive labels
    console.log("Left Iframe Text: ",leftFrameContent);
    console.log("Middle Iframe Text: ",middleFrameContent);
    console.log("Right Iframe Text: ",rightFrameContent);
    console.log("Bottom Iframe Text: ",bottomFrameContent);

});

test("Fetch Text and Navigate to Another Section", async({page})=>{

    //open page url
    await page.goto("https://demoqa.com/frames");

    //Locate frame1
    const frame1 = page.frameLocator("#frame1");

    //Retrieve text from Frame 1
    const frame1Heading = await frame1.locator("#sampleHeading").textContent();
    console.log("Frame1 Content: ",frame1Heading);

    //Navigate to the Alerts section from the sidebar
    await page.getByRole("link", {name:"Alerts"}).click();
    //Verify successful navigation
    await expect(page).toHaveURL("https://demoqa.com/alerts");

});

test("Verify Child Frame Text", async({ page }) => {

    //open page url
    await page.goto("https://demoqa.com/nestedframes");

    //Access Parent Frame
    const parentFrame = page.frameLocator("#frame1");

    //Get Child Frame
    const childFrame = parentFrame.frameLocator("iframe");
    
    //Print the child frame text content.
    console.log("Child Frame Content: ", await childFrame.locator("p").textContent());
    //Verify the expected text
    await expect(childFrame.locator("p")).toHaveText("Child Iframe");

});

test("Edit Text Inside an iFrame", async({page})=>{

    //open page url
    await page.goto("https://the-internet.herokuapp.com/iframe");

    //Close any notification popups if displayed
    const closeButton = page.locator(".tox-notification__dismiss");

    if (await closeButton.isVisible().catch(() => false)) {
        await closeButton.click();
    }
    
    //Locate TinyMCE editor
    const tinyFrame = page.frameLocator("#mce_0_ifr");
    const editorBody = tinyFrame.locator("#tinymce");

    //clear existing content
    console.log(await editorBody.getAttribute("contenteditable"));
    
    await editorBody.clear();

    // type new text into the editor body
    await editorBody.fill("Welcome");

    //Verify updated content
    await expect(editorBody).toHaveText("Welcome");
    // Retrieve entered text
    const enteredText = await editorBody.innerText();

    // Print text and character count
    console.log("Entered Text:", enteredText);
    console.log("Character Count:", enteredText.length);

});

test("Verify iFrame Text and Dimensions", async({page}) => {

    //open page url
    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe");

    //Switch to outer and inner iframes sequentially
    const outerFrame = page.frameLocator("#iframeResult");
    const innerFrame = outerFrame.locator("iframe");

    //Retrieve and verify the displayed text
    const outerFrameCont = await outerFrame.locator("h1").innerText();
    await expect(outerFrame.locator("h1")).toHaveText("The iframe element");

    //Get the iframe boundingBox() to evaluate width and height.
    const boundingBox = await innerFrame.boundingBox();
    const width = boundingBox?.width;
    const height = boundingBox?.height;

    //Verify both dimensions are greater than zero using expect()
    expect(width).toBeGreaterThan(0);
    expect(height).toBeGreaterThan(0);
});