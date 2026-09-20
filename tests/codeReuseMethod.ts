import { Dialog, Page,expect} from "@playwright/test";

export class CodeReuse{

    constructor(public page:Page){}

    async pageOpen(launchUrl:string){

        await this.page.goto(launchUrl);
    }

    async pageLoadTime(timeout:number){

        await this.page.waitForTimeout(timeout);
    }

    async pageWaitForLoadState(state: "load" | "domcontentloaded" | "networkidle" = "load") {

        await this.page.waitForLoadState(state);
    }

    async pageWaitForSelector(locatorElement: string) {
        
        await this.page.waitForSelector(locatorElement);
    }

    async pageFill(locatorElement:string, inputValue:string){

        await this.page.locator(locatorElement).fill(inputValue);
    }

    async pageFillByRole(roleName:string,roleVal:object,inputVal:string){

        await this.page.getByRole(roleName as any,roleVal).fill(inputVal);
    }

    async pageFillByLabel(labelName:string,inputVal:string){

        await this.page.getByLabel(labelName).fill(inputVal);
    }

    async pageFillByPlaceholder(labelName:string,inputVal:string){

        await this.page.getByPlaceholder(labelName).fill(inputVal);
    }

    async pageFillByTestId(testID:string,inputVal:string){
        await this.page.getByTestId(testID).fill(inputVal);
    }

    async pageClickByLocator(locatorElement:string){
        await this.page.locator(locatorElement).click();
    }

    async pageClickByRole(roleName:string,roleVal:object){
        await this.page.getByRole(roleName as any,roleVal).click();
    }

    async pageClickByTestId(testID:string){
        await this.page.getByTestId(testID).click();
    }

    async pageClickByText(textVal:string){
        await this.page.getByText(textVal).click();
    }

    async pageCheckByRole(roleName:string,roleVal:object){
        await this.page.getByRole(roleName as any,roleVal).check();
    }

    async pageUnCheckByRole(roleName:string,roleVal:object){
        await this.page.getByRole(roleName as any,roleVal).uncheck();
    }

    async pageGetInputValue(locatorElement:string){
        return await this.page.locator(locatorElement).inputValue();
    }

    async pageGetInnerText(locatorElement:string){
        return await this.page.locator(locatorElement).innerText();
    }

    async pageGetTextByRole(roleName:string,roleVal:object) {
        return await this.page.getByRole(roleName as any, roleVal).textContent();
    }

    async pageGetInnerTextByRole(roleName:string,roleVal:object) {
        return await this.page.getByRole(roleName as any,roleVal).innerText();
    }

    async pageGetCountByRole(roleName:string,roleVal:object) {
        return await this.page.getByRole(roleName as any, roleVal).count();
    }

    getPageTitle(){
        return this.page.title();
    }

    getPageURL(){
        return this.page.url();
    }

    async pageGetTextByText(textVal:string){
       return await this.page.getByText(textVal).textContent();
    }

    async pageGetTextByTestId(testID:string){
        return await this.page.getByTestId(testID).textContent();
    }

    async pageCheckTitle(title:string){
        await expect(this.page).toHaveTitle(title);
    }

    async pageCheckURL(url:string){
        await expect(this.page).toHaveURL(url);
    }

    async pageCheckClass(locatorElement:string,classElement:string){
        await expect(this.page.locator(locatorElement)).toHaveClass(new RegExp(classElement));
    }

    async pageCheckValue(locatorElement:string,value:string){
        await expect(this.page.locator(locatorElement)).toHaveValue(value);
    }

    async pageCheckVisible(visibleElement:string){
        await expect(this.page.locator(visibleElement)).toBeVisible();
    }
    
    async pageCheckText(locatorElement:string,expectedText:string){
        await expect(this.page.locator(locatorElement)).toHaveText(expectedText);
    }
    
    async pageCheckEnabled(locatorElement:string){
        await expect(this.page.locator(locatorElement)).toBeEnabled();
    }

    async pageCheckChecked(locatorElement:string){
        await expect(this.page.locator(locatorElement)).toBeChecked();

    }

    async pageCheckCheckedByRole(roleName:string,roleVal: object){
        await expect(this.page.getByRole(roleName as any,roleVal)).toBeChecked();
    }

    async pageCheckNotCheckedByRole(roleName:string,roleVal: object){
        await expect(this.page.getByRole(roleName as any,roleVal)).not.toBeChecked();
    }

    async pageCheckVisibleByTestId(locatorElement:string){
        await expect(this.page.getByTestId(locatorElement)).toBeVisible();
    }

    async pageCheckEnableByTestId(locatorElement:string){
        await expect(this.page.getByTestId(locatorElement)).toBeEnabled();
    }

    async pageCheckVisibleByRole(roleName:string,roleVal:object){
        await expect(this.page.getByRole(roleName as any, roleVal)).toBeVisible();
    }

    async pageCheckIsVisibleByRole(roleName:string,roleVal:object){
        return await this.page.getByRole(roleName as any, roleVal).isVisible();
    }

    async pageCheckTextByRole(roleName:string,roleVal: object,expectedText:string){
        await expect(this.page.getByRole(roleName as any,roleVal)).toHaveText(expectedText);
    }

    async pageSelectOptionByLabel(locatorElement:string,label:string){
        await this.page.locator(locatorElement).selectOption({label});
    }

    async pageSelectOptionByValue(locatorElement:string,value:string){
        await this.page.locator(locatorElement).selectOption(value);
    }

    async pageSelectOptionByIndex(locatorElement:string,index:number){
        await this.page.locator(locatorElement).selectOption({index});
    }

    async pageGetTextBySelectOptionChecked(locatorElement:string){
        return await this.page.locator(`${locatorElement} option:checked`).textContent();
    }

    async pageGetAllTextBySelectOptionChecked(locatorElement:string){
        return await this.page.locator(`${locatorElement} option:checked`).allTextContents();
    }

    async pageCheckValues(locatorElement:string,values:string[]){
        await expect(this.page.locator(locatorElement)).toHaveValues(values);
    }

    pageCheckToContain(pageUrl:string,textVal:string){
        expect(pageUrl).toContain(textVal);
    }

    async pageSimpleDialog(){
        this.page.on('dialog',async(dialog) => {
            console.log(dialog.message());
            await dialog.accept();
        });
    }

    async pageAcceptDialog() {
        this.page.once("dialog", async (dialog) => {
            console.log("Dialog Message:", dialog.message());
            await dialog.accept();
        });
    }

    async pageDismissDialog() {
        this.page.once("dialog", async (dialog) => {
            console.log("Dialog Message:", dialog.message());
            await dialog.dismiss();
        });
    }

    async pagePromptAcceptDialog(promptMessage:string) {
        this.page.once("dialog", async (dialog) => {
            console.log("Dialog Message:", dialog.message());
            await dialog.accept(promptMessage);
        });
    }

    async pagePromptDismissDialog() {
        this.page.once("dialog", async (dialog) => {
            await dialog.dismiss();
        });
    }

    async pageScreenShot(screenshotPath:string){
        await this.page.screenshot({
            path : screenshotPath
        });
    }

    async pageWaitForEventDialog() {

        return await this.page.waitForEvent("dialog");

    }

    async pageDelayedAcceptDialog(dialog:Dialog){
         console.log(dialog.message());
        await dialog.accept();
    }

    async pageGoBack() {
    await this.page.goBack();
}

    async pageGoForward() {
        await this.page.goForward();
    }

    async pageBringToFront() {
        await this.page.bringToFront();
    }

    async pageReload() {
        await this.page.reload();
    }

    async pageIsChecked(locatorElement: string) {
        return await this.page.locator(locatorElement).isChecked();
    }

    async pageCountElements(locatorElement: string) {
        return await this.page.locator(locatorElement).count();
    }

    async pageCheckVisibleByLabel(label: string) {
        await expect(this.page.getByLabel(label)).toBeVisible();
    }

       
}