const {test,expect} = require('@playwright/test');

test("Handling Web pop ups",async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    /*await page.goto("https://www.google.co.in/");
    await page.goBack();// Goback to the page in browser
    await page.goForward(); // Go forward page in browser */
    await expect(page.locator("input#displayed-text")).toBeVisible();
    await page.locator("input#hide-textbox").click(); // Hide button click
    page.on('dialog',dialog => dialog.accept());
    await expect(page.locator("input#displayed-text")).toBeHidden();
    await page.locator("input#confirmbtn").click();
    await page.pause();
    await page.locator("button#mousehover").hover();
    await page.getByRole('link',{name:"Top"}).click();
   const frames= page.frameLocator("iframe#courses-iframe");
   await frames.locator("li a[href='lifetime-access']:visible").click();
   const textcheck= await frames.locator("div.text h2").textContent();
      console.log(textcheck.split(" ")[1]);
});