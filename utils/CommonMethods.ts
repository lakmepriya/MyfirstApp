import { Page,Locator } from "@playwright/test";

export class CommonMethods{
    
    async enterText(locator: Locator, value: string){

        await locator.fill(value);

    }

    async click(locator: Locator){

        await locator.click();
    }
}