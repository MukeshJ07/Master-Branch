const {test,expect,request} = require('@playwright/test');
const {ApiUtils} = require('../utils/APiUtils');

test ('Security test', async({page}) =>
{
await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("mukeshj@gmail.com");
    await page.locator("#userPassword").fill("Abcd1234#XyZ");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
 
    await page.locator("button[routerlink*='myorders']").click();
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6' }))
    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");
});