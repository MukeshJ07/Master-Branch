const {test,expect} = require('@playwright/test');
const {ApiUtils} = require('../utils/APiUtils');

let webcontext;
test.beforeAll(async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator('[type="email"]').fill("mukeshj@gmail.com"); //username
    await page.locator('[type="password"]').fill("Abcd1234#XyZ"); // password
    await page.locator('input.btn.btn-block.login-btn').click();// login button
    await page.waitForLoadState('networkidle'); // front end page Api service network load 
    await context.storageState({path: 'state.json'});
    await browser.newContext({storageState: 'state.json'});
    webcontext = await browser.newContext({storageState: 'state.json'});
})



test ("@API Session storage", async ()=> 
{
   const page = await webcontext.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page.waitForLoadState('networkidle'); 
    await page.locator('button.btn.w-10.rounded').nth(0).click();
    await page.locator('button.btn.w-10.rounded').nth(2).click();
    await page.locator('[routerlink="/dashboard/cart"]').click();
    await page.locator("div.cartSection").first().waitFor();
    const bool= await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();
    await page.locator("div.cartSection").last().waitFor();
    const bool2= await page.locator ("h3:has-text('IPHONE 13 PRO')").isVisible();
    expect (bool2).toBeTruthy();
    await page.locator('[type="button"]').nth(1).click();
    await page.locator("input.input.txt").nth(1).fill("666");// CVV code
    await page.locator("input.input.txt").nth(2).fill("Shetty Rahul");// Name on Card
    await page.locator("input.input.txt").nth(3).fill("rahulshettyacademy");// apply coupon
    await page.locator('[placeholder="Select Country"]').pressSequentially("ind", {delay:100});// Dynamic drop down select country
    const Dropdown= page.locator("section.ta-results.list-group.ng-star-inserted");
    await Dropdown.waitFor();
    await page.locator("span i").nth(1).click();
    const Mail= await page.locator('label[type="text"]').textContent();
    console.log(Mail);
    await expect(page.locator('label[type="text"]')).toHaveText("mukeshj@gmail.com");
    await page.locator("a.btnn.action__submit.ng-star-inserted").click(); // Place Order button
    await page.locator('td.box.box-ext.order-summary-box').first().waitFor(); // Page wait Load time
    await page.waitForLoadState('networkidle');
    const orderconfirm= await page.locator("h1.hero-primary").textContent(); // Order confirned to get ORder ID reference
     console.log(orderconfirm); // Print in Output
   await expect (page.locator("h1.hero-primary")).toHaveText(" Thankyou for the order. "); 
    const orderID= await page.locator("label.ng-star-inserted").allTextContents();
    console.log(orderID);
    await page.locator('label[routerlink="/dashboard/myorders"]').click();
    const OrderTable=  page.locator("table.table.table-bordered.table-hover.ng-star-inserted");
    await page.locator("table.table.table-bordered.table-hover.ng-star-inserted").waitFor();
    const optionscount= await page.locator("tbody tr").count();
    for (let i=0; i<optionscount; i++)
     {
       const text= await page.locator("tbody tr th").nth(i).textContent();
        if (text.includes(orderID))
        {
        await expect(page.locator("tbody tr")).toHaveText(orderID);
        break;
        }     
     }
     const orderverified = await (page.locator('th[scope="row"]')).allTextContents(orderID);
     console.log("Order ID is successfully Verified",orderverified);

});