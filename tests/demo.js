"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var messages1 = "hello TS & JS";
console.log(messages1);
var messages2 = 21;
console.log(messages2);
var isActive1 = false;
console.log(isActive1);
var data1 = "this could be any variable"; //Store variable in any format number string etc..
data1 = ["1", "test", "Check"];
console.log(data1);
function add(a, b) {
    return a + b;
}
const result=add(3, 4);
console.log(result);
var user = { Level: 18, Skills: "Assasin" };
var Cartsection = /** @class */ (function () {
    function Cartsection(page) {
        this.page = page;
        this.add0 = page.locator('button.btn.w-10.rounded');
        this.add1 = page.locator('button.btn.w-10.rounded');
        this.addtocart = page.locator('[routerlink="/dashboard/cart"]');
        this.cartbutton = page.locator('[type="button"]');
        this.CVVCode = page.locator("input.input.txt"); // CVV code
        this.CardName = page.locator("input.input.txt"); // Name on Card
        this.Coupon = page.locator("input.input.txt"); // apply coupon
        this.Country = page.locator('[placeholder="Select Country"]'); // Dynamic drop down select country
        this.Orderplaced = page.locator("a.btnn.action__submit.ng-star-inserted");
    }
    return Cartsection;
}());
