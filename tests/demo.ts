import { test, expect, Locator, Page } from '@playwright/test';
let messages1: string ="hello TS & JS";
console.log(messages1);

let messages2: number =21;
console.log(messages2);

let isActive1: boolean = false;
console.log(isActive1);

let data1: any = "this could be any variable"; //Store variable in any format number string etc..

data1= ["1","test","Check"];
console.log(data1);

function add(a:number,b:number)
{
    return a+b;
}
add(3,4);
console.log("return");

let user : {Level:number,Skills:string} = {Level:18,Skills:"Assasin"};


class Cartsection {
   page: Page;
   add0: Locator;
   add1: Locator;
   addtocart: Locator;
   cartbutton: Locator;
   CVVCode:Locator;
   CardName: Locator;
   Coupon: Locator;
   Country:Locator;
   Orderplaced:Locator;
    constructor(page:any) {
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
}