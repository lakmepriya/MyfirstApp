import {test,expect} from "@playwright/test";

test.describe.configure({ mode: "serial" });

test("Handle a Simple Alert",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog',async(dialog) => {
        console.log(dialog.message());
        await dialog.accept();
    });

    await page.getByText("Click for JS Alert").click();
    await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");

});

test("Handle a Confirmation Alert",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", async(dialog) => {

        console.log(dialog.message());
        await dialog.accept();
    });

    await page.getByRole("button", { name: "Click for JS Confirm" }).click();
    console.log(await page.locator("#result").textContent());
    await expect(page.locator("#result")).toHaveText("You clicked: Ok");
});

test("Dismiss a Confirmation Alert",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", async(dialog) => {
        console.log(dialog.message());
        await dialog.dismiss();
    });

    await page.getByRole("button", { name: "Click for JS Confirm" }).click();
    console.log(await page.locator("#result").textContent());
    await expect(page.locator("#result")).toHaveText("You clicked: Cancel");
});

test("Handle a Prompt Alert", async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", async dialog=>{

       await dialog.accept('Playwright User');

    });

    await page.getByRole('button',{name:"Click for JS Prompt"}).click(); 
    console.log(await page.locator("#result").textContent());
    await expect(page.locator("#result")).toHaveText("You entered: Playwright User");

});

test("Dismiss a Prompt Alert", async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", async(dialog) =>{

       await dialog.dismiss();

    });

    await page.click("//button[text()='Click for JS Prompt']");
    console.log(await page.locator("#result").textContent());
    await expect(page.locator("#result")).toHaveText("You entered: null");

});

test("Handle Alert and Capture Screenshot", async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", async(dialog) => {

        console.log(dialog.message());
        await dialog.accept();

    });

    await page.getByRole("button", {name:'Click for JS Alert'}).click();
    await page.screenshot({
        path : "screenshots/Simple Alert Handling.png"
    });

});

test("Handle Delayed Alert", async ({ page }) => {

  await page.goto("https://demoqa.com/alerts");

  const dialogPromise = page.waitForEvent("dialog");

  await page.locator("#timerAlertButton").click();

  const dialog = await dialogPromise;

  console.log(dialog.message());

  await dialog.accept();
});

test("Handle Confirmation Alert on DemoQA", async({page})=>{

    await page.goto("https://demoqa.com/alerts");

    page.on("dialog", async(dialog) => {

        console.log(dialog.message());
        await dialog.dismiss();

    });

    await page.locator("#confirmButton").click();
    await expect(page.locator("#confirmResult")).toHaveText("You selected Cancel");

});

test("Handle Prompt Alert on DemoQA", async({page})=>{

    await page.goto("https://demoqa.com/alerts");

    page.on("dialog", async(dialog) => {

        console.log(dialog.message());
        await dialog.accept("Alex");

    });

    await page.locator("#promtButton").click();
    await expect(page.locator("#promptResult")).toHaveText("You entered Alex");

});


//Print Alert Type and Message & Handle All Alert Types
const alerts = { 
    simple:  "#alertButton",
    delayed: "#timerAlertButton",
    confirm : "#confirmButton",
    prompt:   "#promtButton"
};
for(const [type,locator] of Object.entries(alerts)){

    test(`Print ${type} Alert and Message`,async({page})=>{

        await page.goto("https://demoqa.com/alerts");

        if(type === "delayed"){

            const dialogPromise = page.waitForEvent("dialog");
            await page.locator(locator).click();
            const dialog = await dialogPromise;
            console.log(`Dialog Type: ${dialog.type()}`);
            console.log(`Dialog Message: ${dialog.message()}`);
            await dialog.accept();
            
        }
        else{
            page.once("dialog",async(dialog) => {

                console.log(`Dialog Type: ${dialog.type()}\nDialog Message: ${dialog.message()}`);

                switch(type){

                    case "simple":
                        await dialog.accept();
                        break; 
                    case "confirm":
                        await dialog.dismiss();
                        break;
                    case "prompt":
                        await dialog.accept("Maha");
                        break;
                }
                
            });

            await page.locator(locator).click();
            if(type === "confirm"){
                await expect(page.locator("#confirmResult")).toHaveText("You selected Cancel");
            }if(type === "prompt"){
                await expect(page.locator("#promptResult")).toHaveText("You entered Maha");
            }
        }
       
    });
}