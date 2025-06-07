import {test as baseTest} from '@playwright/test';
interface PlaceOrder {
    username: string;
    Password: any;
     Code: number;
     CardName: string;
     coupon: string;
     country:string;
};
export const CustomTest = baseTest.extend<{placeorder:PlaceOrder}>(
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