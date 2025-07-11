import { Locator, Page } from '@playwright/test';
export class LoginPage {
    page: Page;
    username: Locator;
    password: Locator;
    signInbutton: Locator;
    constructor(page: any) {
        this.page = page;
        this.username = page.locator('[type="email"]');
        this.password = page.locator('[type="password"]');
        this.signInbutton = page.locator('input.btn.btn-block.login-btn');
    }

    async goTo() {
        await this.page.goto('https://rahulshettyacademy.com/client');
    }
    async validLogin(username: string, Password: any) //method inside actions
    {
        await this.username.fill((username)); //username
        await this.password.fill((Password)); // password
        await this.signInbutton.click();// login button
    }

}
module.exports = { LoginPage };//exports the methods to all files public acess