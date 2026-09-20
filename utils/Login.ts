import { Page, expect } from "@playwright/test";

export async function login(page :Page, url:string, username: string, password: string){

    await page.goto(url);
        
    const userName = page.locator('[name="email"]');
    const userPass = page.locator('[name="pass"]');
       
    await userName.fill(username);
    await userPass.fill(password);

    console.log(await userName.inputValue());
    console.log(await userPass.inputValue());

    // Check filled values
    await expect(userName).toHaveValue(username);
    await expect(userPass).toHaveValue(password);

    const loginBtn = page.getByRole("button", {name:'Log in'} );
    await loginBtn.click();
}