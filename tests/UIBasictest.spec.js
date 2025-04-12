// Concept of async and await function with lighhter code ()=>
const {test,expect} = require('@playwright/test');

// Open browser context - laucnher browser/ create context / Create page
test.only('First playwright test', async ({browser})=>
{
//chrome - plugins/ cookies
  const context = await browser.newContext(); //-- create context
  const page = await browser.newPage(); //-- Create page
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log (await expect (page).toHaveURL("https://rahulshettyacademy.com/loginpagePractise/"));
}
);

// Use page fixture declaration without using context no need to care about open browser directly goes to Test logic in test runner
test('Second playwright test', async ({page})=>
{
    await page.goto("https://www.google.co.in/"); //-- Skip browser context and create page directly focus on test logic
    //get the page title
   console.log(await page.title());
   await expect (page).toHaveTitle("Google");
});  
 
