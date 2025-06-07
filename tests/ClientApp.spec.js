// Concept of async and await function with lighhter code ()=>
const {test,expect} = require('@playwright/test');

// User login annd password assignment

test('First assignment Register',async ({page})=> {
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("p.login-wrapper-footer-text").click(); // Login here
   await page.locator('[placeholder="First Name"]').fill("Mukesh"); //First name
   await page.locator('[placeholder="Last Name"]').fill("JMukesh"); // Last Name
   await page.locator('[type="email"]').fill("mukeshj@gmail.com"); // Email ID
   await page.locator('[placeholder="enter your number"]').fill('1234567894'); // Phone Number
   await page.locator('[formcontrolname="occupation"]').selectOption('Engineer'); // occupation
   await page.locator('[value="Male"]').click(); // Check Male
   await page.locator('[placeholder="Passsword"]').fill("Abcd1234#XyZ"); // Password
   await page.locator('[placeholder="Confirm Passsword"]').fill("Abcd1234#XyZ"); // Confirm Password
   await page.locator('[type="checkbox"]').click(); // I am 18 years old check bo tick
   await page.locator('input.btn.btn-block.login-btn').click(); // Register button submit
   console.log("Registered successfully");
}); // user name created User name: mukeshj@gmail.com  password: Abcd1234#XyZ

test.only('Second assignment login', async ({page})=> {
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator('[type="email"]').fill("mukeshj@gmail.com"); //username
  await page.locator('[type="password"]').fill("Abcd1234#XyZ"); // password
  await page.locator('input.btn.btn-block.login-btn').click();// login button
  //await page.waitForLoadState('networkidle'); // front end page Api service network load 
  //await page.locator('div.card-body b').first().waitFor();// wait for First name element to load Alternative use only if networkidle not work above 500ms load timeout
  await page.locator('div.card-body b').last().waitFor();// wait for last name element to load Alternative use only if networkidle not work above 500ms load timeout
  const Titles= await page.locator('div.card-body b').allTextContents();
  console.log(Titles); 
});
 
