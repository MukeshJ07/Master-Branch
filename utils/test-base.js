const base=require('@playwright/test');

exports.customtest = base.test.extend(
{
 placeorder: 
 {
    "username": "mukeshj@gmail.com",
    "Password": "Abcd1234#XyZ",
     "Code": 777,
     "CardName": "Mukesh J",
     "coupon":"rahulshettyacademy",
     "country":"ind"
 }
});