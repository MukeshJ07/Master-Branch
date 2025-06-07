const {test,expect} = require("@playwright/test");

test.describe.configure({mode:'parallel'});
test('Calendar_Test',async ({page})=> {
     
const Date = "07-02-2000";
const expected_date="2000-02-07";
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.locator('[type="date"]').pressSequentially(Date); // Date field with the input text box you can manually provide the input of the date.
    await expect (page.locator('[type="date"]')).toHaveValue(expected_date);
});

test('calendar_Tool_bar',async ({page})=> {

    const year = "2027";
    const Month = "4";
    const Date="29";
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator("div.react-date-picker__inputGroup").click(); // Date picker Click
    await page.locator("button.react-calendar__navigation__label").click(); // click month section
    await page.locator("button.react-calendar__navigation__label").click();// click year section
    await page.getByText(year).click();
    await page.locator("button.react-calendar__tile.react-calendar__year-view__months__month").nth(Number(Month)-1).click(); // Select Month
    await page.locator("button.react-calendar__tile.react-calendar__month-view__days__day").nth(Number(Date)-1).click();
    await expect (page.locator("input.react-date-picker__inputGroup__input").nth(0)).toHaveValue(Month);
    await expect(page.locator("input.react-date-picker__inputGroup__input").nth(1)).toHaveValue(Date, { timeout: 5000 });
    await expect (page.locator("input.react-date-picker__inputGroup__input").nth(2)).toHaveValue(year);
});

test('Calendar_Manual_Test_simple',async ({page})=> {
    const Month="12";
    const Date = "29";
    const Year = "2027";
    const Month1="4";
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator("svg.react-date-picker__clear-button__icon.react-date-picker__button__icon").click(); // Cancel
    await page.getByPlaceholder("--").nth(0).pressSequentially(Month);
    await page.getByPlaceholder("--").nth(1).pressSequentially(Date);
    await page.getByPlaceholder("----").pressSequentially(Year); 
    await page.locator("button.react-date-picker__calendar-button").click();
    await expect (page.getByPlaceholder("--").nth(0)).toHaveValue(Month);
    await expect (page.getByPlaceholder("--").nth(1)).toHaveValue(Date);
    await expect (page.getByPlaceholder("----")).toHaveValue(Year);
    });