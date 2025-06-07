import {LoginPage} from './LoginPage';
import {Cartsection} from './Cartsection';
import {Page} from '@playwright/test';

export class POManager {
    page: Page;
    loginPage: LoginPage;
    cartsection: Cartsection;
    constructor(page:any) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.cartsection = new Cartsection(this.page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getCartsection() {
        return this.cartsection;
    }
}

module.exports = {POManager};