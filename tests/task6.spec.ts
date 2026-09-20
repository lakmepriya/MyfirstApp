import test from "@playwright/test";
import userdata from "../testData/userdata.json";
import { getConfig } from "../utils/PropertyReader";
import { login } from "../utils/Login";
import { readXml } from "../utils/XmlReader";
import * as path from "path";
import { getExcelData } from "../utils/ExcelReader";
import { LoginPage } from "../pages/LoginPage";

const config = getConfig();

// //Property File
// test("Config Login", async ({ page }) => {

//     await login(page, config.url, config.username, config.password);
    
// });

// //Json File Data
// for (const user of userdata){
//     test("Facebook Login -" + user.name, async({page})=>{

//         await login(page, config.url, user.name, user.password);

//     });
// }

// //Xml File Data
// test("Xml data login", async({ page })=>{
//     const xmlFilePath = path.resolve(
//         __dirname,
//         "../testData/data.xml"
//     );
//     const xmlData = await readXml(xmlFilePath);
//     // console.dir(xmlData, { depth: null });
//     for (const user of xmlData.users.user){
//         await login(page, config.url, user.email[0], user.password[0]);
//     }
// });

//Excel Data login
//Excel Data Driven Framework using Playwright + TypeScript + Page Object Model.
const users = getExcelData("Sheet1");
// console.log(users);
for(const user of users as any[]){
    test(`Login Test - ${user.Username}`, async({ page })=>{
        
        await page.goto(config.url);
        const loginPage = new LoginPage(page);
        await loginPage.login(user.Username,user.Password);
    });
}

