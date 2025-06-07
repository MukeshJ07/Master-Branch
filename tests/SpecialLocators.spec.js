const {test,expect} = require ('@playwright/test');

test('PracticeAutomation',async ({page}) => {
     await page.goto("https://rahulshettyacademy.com/client");
     await page.getByRole('textbox',{name: "Email"}).fill("mukeshj@gmail.com");
     await page.getByPlaceholder("enter your passsword").fill("Abcd1234#XyZ");
     await page.getByRole('button',{name:"Login"}).click(); // login button
     await page.waitForLoadState('networkidle');
     await page.locator("div.card-body b").first().waitFor();
     await page.locator("div.card-body").filter({hasText:"ZARA COAT 3"}).getByRole('button',{name:"Add To Cart"}).click();
     await page.locator("div.card-body").filter({hasText:"IPHONE 13 PRO"}).getByRole('button',{name:"Add To Cart"}).click();
     await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();
     await page.locator("div.cartSection").first().waitFor();
     const bool= await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
     expect(bool).toBeTruthy();
     await page.locator("div.cartSection").last().waitFor();
     const bool2= await page.locator ("h3:has-text('IPHONE 13 PRO')").isVisible();
     expect (bool2).toBeTruthy();
     await page.getByRole('button',{name:"Checkout"}).click();
     await page.locator("input.input.txt").nth(1).fill("666");// CVV code
     await page.locator("input.input.txt").nth(2).fill("Shetty Rahul");// Name on Card
     await page.locator("input.input.txt").nth(3).fill("rahulshettyacademy");// apply coupon
     await page.getByPlaceholder("Select Country").pressSequentially("ind", {delay:100});// Dynamic drop down select country
     const Dropdown= page.locator("section.ta-results.list-group.ng-star-inserted");
     await Dropdown.waitFor();
     await page.getByRole('button',{name: " India"}).nth(1).click();
     const Mail= await page.locator('label[type="text"]').textContent();
     console.log(Mail);
     await expect(page.locator('label[type="text"]')).toHaveText("mukeshj@gmail.com");
     await page.getByText("PLACE ORDER").click(); // Place Order button .locator("a.btnn.action__submit.ng-star-inserted")
     await page.locator('td.box.box-ext.order-summary-box').first().waitFor(); // Page wait Load time
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

test ('Playwright_Special_Locators',async ({page}) => {
     const Date="07-02-2000";
     await page.goto("https://rahulshettyacademy.com/angularpractice/");
     await page.getByLabel("Check me out if you Love IceCreams!").check(); // By using label click(Check) the check box
     await page.getByLabel("Employed").check();// // By using label click(check) the radio button 
     await page.getByLabel("Gender").selectOption("Female"); // Select the option in drop down
     await page.getByPlaceholder("Password").fill("MJ@723");
     await page.locator('[type="date"]').pressSequentially(Date);
     await page.locator("div.form-group").filter({hasText:'Name'}).getByRole('textbox').fill("Mukesh");
     await page.locator("div.form-group").filter({hasText:'Email'}).getByRole('textbox').fill("mukesh@gmail.com");
     await page.getByRole("button",{name:'Submit'}).click();
     await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
     await page.getByRole("link",{name:'Shop'}).click();
     await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole('button').click();
     //await page.locator("").getByRole('button').click(); 
});