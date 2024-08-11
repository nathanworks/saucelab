const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const ProductPage = require('../pageobjects/product.page');

Given(/^the user is on login page$/, async () => {
  await LoginPage.open()
});

When(
  /^the user input (.*) and (.*) and click 'Login" button$/,
  async (username, password) => {
    await LoginPage.login(username, password);
  }
);

Then(/^the user should be redirected to the products page$/, async() => {
     await browser.waitUntil(
       async () => await ProductPage.appLogo.isDisplayed(),
       {
         timeout: 5000,
       }
     );
    const appLogoDisplayed = await ProductPage.appLogo.isDisplayed();
    expect(appLogoDisplayed).toBe(true);

});

Then(/^the user should see a list of products$/, async() => {
    await browser.waitUntil(
      async () => (await ProductPage.productList).isDisplayed(),
      {
        timeout: 5000
      }
    );
    const productListDisplayed = await ProductPage.productList.isDisplayed();
    expect(productListDisplayed).toBe(true);
});


