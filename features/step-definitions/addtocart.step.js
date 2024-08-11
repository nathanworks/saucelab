const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const LoginPage = require("../pageobjects/login.page");
const ProductPage = require("../pageobjects/product.page");


Given(/^the user is logged (.*) and (.*) in and on the products page$/, async(username,password) => {
    await LoginPage.open();
    await LoginPage.login(username, password);
     await browser.waitUntil(
       async () => await ProductPage.appLogo.isDisplayed(),
       {
         timeout: 5000,
       }
     );
});

When(/^the user clicks "Add to Cart"$/, async () => {
  await ProductPage.addToCartClick();
});

Then(/^the button label should change to "Remove"$/, async () => {
  await browser.waitUntil(
    async () => await ProductPage.removeButton.isDisplayed(),
    {
      timeout: 5000,
    }
  );
  const removeButtonDisplayed = await ProductPage.removeButton.isDisplayed();
  expect(removeButtonDisplayed).toBe(true);
});

Then(/^the cart icon should show "1" item$/, async () => {
    const cartIconDisplayed = await ProductPage.cartIcon.isDisplayed();
    expect(cartIconDisplayed).toBe(true);
});
