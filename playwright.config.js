// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({ // provided the congif in  a variables
  testDir: './tests',
 timeout: 40*1000, // Default time out is 30 sec for all steps we can over write by providing timeout
 expect : {
  timeout: 5000, // expect is exclusive timeout for specific step or code
 }, 
 reporter : 'html', // get the test results in html format after test completion
 use: { // use is the functon where we provide out Broswername
    BrowserName : 'chromium',// Chrome browser
    headless: false
  },

});
module.exports=config // we can use this config to all the module of framework not only tests module

