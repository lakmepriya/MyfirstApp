import { Browser, BrowserContext, chromium, Page, expect } from "@playwright/test";
import { Context } from "node:vm";

export class CodeReuse1{

    constructor(){}

    async browserLaunch(){

        return await chromium.launch({ headless: false });
    }

    async browserContextLaunch(browser:Browser){

        return await browser.newContext();
    }

    async createNewPage(context:BrowserContext){

        return await context.newPage();
    }

    async browserClose(browser:Browser){
        
        await browser.close();
    }

    async getBrowserContexts(browser:Browser){
        return browser.contexts();
    }

    async getBrowserPages(context:BrowserContext){
        return context.pages();
    }

    async getContextCount(contexts: BrowserContext[]) {
        return contexts.length;
    }

    async getPageCount(pages: Page[]) {
        return pages.length;
    }

    async pageCheckExactValue(actualVal:any,expectedVal:any){
        expect(actualVal).toBe(expectedVal);
    }
    
}