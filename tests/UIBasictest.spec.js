// Concept of async and await function with lighhter code ()=>
const {test, expect} = require('@playwright/test');

// Open browser context - laucnher browser/ create context / Create page
test('First playwright test', async ({browser})=>
{
//chrome - plugins/ cookies
  const context = await browser.newContext(); //-- create context
  const page = await browser.newPage(); //-- Create page
  const userName = page.locator("input#username");
  const signIn = page.locator("#signInBtn");
  const cardTitles= page.locator("div.card-body a");
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  //Css by tagname#id // fill method is to insert the input in text box
  await page.locator("input#username").fill("rahulshetty");
  await page.locator("input#password").fill("learning");
  await page.locator("#signInBtn").click();
  //webdriver wait
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText("Incorrect");
  // clear the input in text box
  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await signIn.click();
  console.log(await page.locator("div.card-body a").first().textContent());
  console.log(await cardTitles.nth(1).textContent());
  const alltitles= await cardTitles.allTextContents();
  console.log(alltitles);
});


// Use page fixture declaration without using context no need to care about open browser directly goes to Test logic in test runner
test('@Web Second playwright test', async ({page})=>
{
    await page.goto("https://www.google.co.in/"); //-- Skip browser context and create page directly focus on test logic
    //get the page title
   console.log(await page.title());
   await expect (page).toHaveTitle("Google");
});  

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
  await page.locator('div.card-body b').nth('1').textContent();
  console.log(await page.locator('div.card-body b').nth('1').textContent());
});
 
test('@Web UI Controls', async ({page})=> {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username= page.locator('[type="text"]')
    const password= page.locator("#password")
    const Dropdown= page.locator("select.form-control");
    const checkbox= page.locator('[type="Checkbox"]');
    const Radiobutton=page.locator("span.checkmark"); //span.checkmark .radiotextsty
    const okbutton=page.locator("#okayBtn");
    const documentLink=page.locator('[href*="documents-request"]');
    await username.fill("mukeshj@gmail.com");
    await password.fill("Abcd1234#XyZ");
    await Dropdown.selectOption("consult");
    await checkbox.click();
    await Radiobutton.nth(1).click();
    await okbutton.click();
    //assertion
    await expect(Radiobutton.nth(1)).toBeChecked();
    console.log(await Radiobutton.nth(1).isChecked());
    await expect(checkbox).toBeChecked();
    console.log(await checkbox.isChecked());
    await checkbox.uncheck();
    expect (await checkbox.isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute('class','blinkingText');
    console.log("documentLink successfully");
   // await page.pause(); 
});

test.only('child window handle', async ({browser}) => {
  const context = await browser.newContext();
  const Page = await context.newPage();
  const documentLink=Page.locator('[href*="documents-request"]');
 
await Page.goto("https://rahulshettyacademy.com/loginpagePractise/");

const [newPage] = await Promise.all ([
   context.waitForEvent('page'),
   documentLink.click(),
])
   const Read = await newPage.locator("p.im-para.red").textContent();
   console.log(Read);

});