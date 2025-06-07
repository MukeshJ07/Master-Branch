import { Locator, Page } from "@playwright/test";
export class Cartsection {
    page: Page;
    add0: Locator;
    add1: Locator;
    addtocart: Locator;
    cartbutton: Locator;
    CVVCode: Locator;
    CardName: Locator;
    Coupon: Locator;
    Country: Locator;
    Orderplaced: Locator;

    constructor(page: any) {
        this.page = page;
        this.add0 = page.locator('button.btn.w-10.rounded');
        this.add1 = page.locator('button.btn.w-10.rounded');
        this.addtocart = page.locator('[routerlink="/dashboard/cart"]');
        this.cartbutton = page.locator('[type="button"]');
        this.CVVCode = page.locator("input.input.txt");// CVV code
        this.CardName = page.locator("input.input.txt");// Name on Card
        this.Coupon = page.locator("input.input.txt");// apply coupon
        this.Country = page.locator('[placeholder="Select Country"]');// Dynamic drop down select country
        this.Orderplaced = page.locator("a.btnn.action__submit.ng-star-inserted");
    }

    async addtodash() {
        await this.add0.nth(0).click();
        await this.add1.nth(2).click();
        await this.addtocart.click();

    }
    async CartDetails(Code:number, CardName:string, coupon:string, country:string) {
        await this.cartbutton.nth(1).click();
        await this.CVVCode.nth(1).fill(String(Code));
        await this.CardName.nth(2).fill(CardName);
        await this.Coupon.nth(3).fill(coupon);
        await this.Country.pressSequentially(country, { delay: 100 });
    }
    async Placeorder() {
        await this.Orderplaced.click();
    }
}
module.exports = { Cartsection };