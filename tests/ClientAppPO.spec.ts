// Concept of async and await function with lighter code ()=>
import { test, expect } from '@playwright/test';
import {POManager} from '../pageobject_ts/POManager';
import {CustomTest} from '../utils_ts/test-base';

//Json --> string --> js object
const dataset = JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')));
for (const data of dataset) {
  test(`Login Test for ${data.CardName}`, async ({ page }) => {
    // call from POManager
    const pOManager = new POManager(page);
    // LoginPage function
    const loginPage = pOManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(data.username, data.Password);
    //Add To Cart function
    const Cartadded = pOManager.getCartsection();
    await Cartadded.addtodash();
    //Assertions
    await page.locator("div.cartSection").first().waitFor();
    const bool = page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();
    page.locator("div.cartSection").last().waitFor();
    const bool2 = page.locator("h3:has-text('IPHONE 13 PRO')").isVisible();
    expect(bool2).toBeTruthy();
    // Provide dataset details
    const orderDetails = pOManager.getCartsection();
    await orderDetails.CartDetails(data.Code, data.CardName, data.coupon, data.country);
    // Place Order in Shopping
    const Dropdown = page.locator("section.ta-results.list-group.ng-star-inserted");
    await Dropdown.waitFor();
    await page.locator("span i").nth(1).click();
    const Mail = await page.locator('label[type="text"]').textContent();
    console.log(Mail);
    // await expect(page.locator('label[type="text"]')).toHaveText("mukeshj@gmail.com");
    const Orderplaced = pOManager.getCartsection();
    await Orderplaced.Placeorder();
    await page.locator('td.box.box-ext.order-summary-box').first().waitFor(); // Page wait Load time
    await page.waitForLoadState('networkidle');
    const orderconfirm = await page.locator("h1.hero-primary").textContent(); // Order confirned to get ORder ID reference
    console.log(orderconfirm); // Print in Output
    await expect(page.locator("h1.hero-primary")).toHaveText(" Thankyou for the order. ");
    let orderID: any;
    orderID = await page.locator("label.ng-star-inserted").allTextContents();
    console.log(orderID);
    await page.locator('label[routerlink="/dashboard/myorders"]').click();
    const OrderTable = page.locator("table.table.table-bordered.table-hover.ng-star-inserted");
    await page.locator("table.table.table-bordered.table-hover.ng-star-inserted").waitFor();
    const optionscount = await page.locator("tbody tr").count();
    for (let i = 0; i < optionscount; i++) {
      let text: any;
      text = await page.locator("tbody tr th").nth(i).textContent();
      if (text.includes(orderID)) {
        await expect(page.locator("tbody tr")).toHaveText(orderID);
        break;
      }
    }
    const orderverified = await (page.locator('th[scope="row"]')).allTextContents();
    console.log("Order ID is successfully Verified", orderverified);

  }); // user name created User name: mukeshj@gmail.com  password: Abcd1234#XyZ
}

CustomTest (`Custom test`, async ({ page, placeorder }) => {
  // call from POManager
  const pOManager = new POManager(page);
  // LoginPage function
  const loginPage = pOManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(placeorder.username, placeorder.Password);
  //Add To Cart function
  const Cartadded = pOManager.getCartsection();
  await Cartadded.addtodash();
  //Assertions
  await page.locator("div.cartSection").first().waitFor();
  const bool = page.locator("h3:has-text('ZARA COAT 3')").isVisible();
  expect(bool).toBeTruthy();
  page.locator("div.cartSection").last().waitFor();
  const bool2 = page.locator("h3:has-text('IPHONE 13 PRO')").isVisible();
  expect(bool2).toBeTruthy();
  // Provide dataset details
  const orderDetails = pOManager.getCartsection();
  await orderDetails.CartDetails(placeorder.Code, placeorder.CardName, placeorder.coupon, placeorder.country);
  // Place Order in Shopping
  const Dropdown = page.locator("section.ta-results.list-group.ng-star-inserted");
  await Dropdown.waitFor();
  await page.locator("span i").nth(1).click();
  const Mail = await page.locator('label[type="text"]').textContent();
  console.log(Mail);
  // await expect(page.locator('label[type="text"]')).toHaveText("mukeshj@gmail.com");
  const Orderplaced = pOManager.getCartsection();
  await Orderplaced.Placeorder();
  await page.locator('td.box.box-ext.order-summary-box').first().waitFor(); // Page wait Load time
  await page.waitForLoadState('networkidle');
  const orderconfirm = await page.locator("h1.hero-primary").textContent(); // Order confirned to get ORder ID reference
  console.log(orderconfirm); // Print in Output
  await expect(page.locator("h1.hero-primary")).toHaveText(" Thankyou for the order. ");
  let orderID: any;
  orderID = await page.locator("label.ng-star-inserted").allTextContents();
  console.log(orderID);
  await page.locator('label[routerlink="/dashboard/myorders"]').click();
  const OrderTable = page.locator("table.table.table-bordered.table-hover.ng-star-inserted");
  await page.locator("table.table.table-bordered.table-hover.ng-star-inserted").waitFor();
  const optionscount = await page.locator("tbody tr").count();
  for (let i = 0; i < optionscount; i++) {
    let text: any
    text = await page.locator("tbody tr th").nth(i).textContent();
    if (text.includes(orderID)) {
      await expect(page.locator("tbody tr")).toHaveText(orderID);
      break;
    }
  }
  let orderverified: any;
  orderverified = await (page.locator('th[scope="row"]')).allTextContents();
  console.log("Order ID is successfully Verified", orderverified);


});
