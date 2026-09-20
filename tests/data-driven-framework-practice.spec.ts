import { test,expect } from "@playwright/test";
import fs from "fs";
// import credentials from "../testData/credentials.json";

const loginData = fs.readFileSync("./testData/credentials.json", "utf-8");
const credentials = JSON.parse(loginData);

for(const login of credentials){
    test(`Read Login Data from JSON- ${login.username}`, async({ page })=>{

        await page.goto("https://www.saucedemo.com/");

        await page.getByPlaceholder("Username").fill(login.username);
        await page.getByPlaceholder("Password").fill(login.password);

        await page.locator("#login-button").click();
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    });

}



