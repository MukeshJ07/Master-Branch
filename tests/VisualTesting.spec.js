const { test, expect } = require('@playwright/test');

test("Screenshot", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("input#displayed-text")).toBeVisible();
    await page.locator("input#displayed-text").screenshot({ path: 'Partialcapture.png' });
    await page.locator("input#hide-textbox").click();
    await page.screenshot({ path: 'Screenshot.png' });
});

test("Visual Testing", async ({ page }) => {
      await page.goto("https://www.google.com/");
      expect(await page.screenshot()).toMatchSnapshot('google.png');
});