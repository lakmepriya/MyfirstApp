import {Page,Locator} from "@playwright/test";
import {CommonMethods} from "../utils/CommonMethods";

export class LoginPage{

    common = new CommonMethods();

    username: Locator;
    password: Locator;
    loginBtn : Locator;

    constructor(private page: Page){

        console.log('home');
        console.log('tsrt');

        this.username = page.locator('[name="email"]');
        this.password = page.locator('[name="pass"]');
        this.loginBtn = page.getByRole("button", {name:'Log in'} );

    }

    async login(user: string, pass: string){

        await this.common.enterText(this.username,user);
        await this.common.enterText(this.password,pass);
        await this.common.click(this.loginBtn);
    }
}