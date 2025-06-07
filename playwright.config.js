// @ts-check
//import { defineConfig, devices } from '@playwright/test';

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
const config = ({ // provided the config in  a variables
  testDir: './tests',
  retries: 1,
  timeout: 30 * 1000, // Default time out is 30 sec for all steps we can over write by providing timeout
  expect: {
    timeout: 10000, // 10 seconds expect is exclusive timeout for specific step or code
  },
  reporter: 'html', // get the test results in html format after test completion
  projects: [{
	  
    name: 'PW_AUTOMATION_PRACTICE', // Mention the project name or leave it it should take the default Project name
    use: { // use is the functon where we provide out Broswername
      BrowserName: 'chromium',// Chrome browser
      headless: false,
      acceptDownloads: true,
      screenshot: 'only-on-failure',//('on','off')
      trace: 'on', //(Will capture all test)
      traces: 'retain-on-false', //(Capture traces only if your test is failed) ('off','on') 
      // ...devices[''],// Mobile devices screen testing UI
      // ignoreHtttpsErrors: true,// ignores the SSL cerificate not secure website errors.
      // permissions:['geolocation'], // Ignore the location dialog box in browser
      viewport: null, //{width:1536,height:730} // Defines the resolution of the browser
      launchOptions: {
         args: ['--start-maximized'],
      }
    },
  }]

});
module.exports = config // we can use this config to all the module of framework not only tests module

