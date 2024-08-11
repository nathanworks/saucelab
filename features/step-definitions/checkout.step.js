const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const LoginPage = require("../pageobjects/login.page");
const ProductPage = require("../pageobjects/product.page");
const CheckoutPage = require("../pageobjects/checkout.page");

Given(
  /^the user is logged (.*) and (.*) in and on the cart page and at least one item in cart$/,
  async (username, password) => {
    await LoginPage.open();
    await LoginPage.login(username, password);
    await browser.waitUntil(
      async () => await ProductPage.appLogo.isDisplayed(),
      {
        timeout: 5000,
      }
    );

    await ProductPage.addToCartClick();
    await CheckoutPage.cartBadgeClick();
  }
);

When(/^the user clicks Checkout button$/, async() => {
  await CheckoutPage.CheckoutClick();
});


Then(/^the user should be redirected to checkout infomation page$/, async() => {
  await browser.waitUntil(
    async () => await CheckoutPage.yourinformation.isDisplayed(),
    {
      timeout: 5000,
    }
  );
  const yourinformationDisplayed =
    await CheckoutPage.yourinformation.isDisplayed();
  expect(yourinformationDisplayed).toBe(True);
});

Then(
  /^the user should see field of "first name", "last name", "zip", cancel button$/,
  async() => {
    const firstnameDisplayed = await CheckoutPage.firstNameInput.isDisplayed();
    expect(firstnameDisplayed).toBe(True);

    const lastnameDisplayed = await CheckoutPage.lastNameInput.isDisplayed();
    expect(lastnameDisplayed).toBe(True);

    const postalDisplayed = await CheckoutPage.postalCodeInput.isDisplayed();
    expect(postalDisplayed).toBe(True);
  }
);

When(/^the user input (.*) , (.*) , (.*)$/, async(name, lastName, postal) => {
    await CheckoutPage.fillCheckoutDetails(name, lastName, postal);
  }
);

When(/^the user clicks "Continue" button$/, async() => {
  await CheckoutPage.ContinueClick();
});

Then(/^the user should be redirected to checkout overwiew page$/, async() => {
  await browser.waitUntil(
    async () => await CheckoutPage.overview.isDisplayed(),
    {
      timeout: 5000,
    }
  );
  const overviewDisplayed = await CheckoutPage.overview.isDisplayed();
  expect(overviewDisplayed).toBe(True);
});

Then(
  /^the user should see detail of product , "payment", "shipping" info$/,
  async() => {
    const paymentDisplayed = await CheckoutPage.paymentInfo.isDisplayed();
    expect(paymentDisplayed).toBe(True);

    const shipDisplayed =
      await CheckoutPage.shipInfo.isDisplayed();
    expect(shipDisplayed).toBe(True);

    const priceDisplayed = await CheckoutPage.priceInfo.isDisplayed();
    expect(priceDisplayed).toBe(True);
  }
);

When(/^the user clicks "Finish" button$/, async() => {
  await CheckoutPage.FinishClick();
});

Then(/^the user should be redirected to checkout complete page$/, async() => {
  await browser.waitUntil(
    async () => await CheckoutPage.complete.isDisplayed(),
    {
      timeout: 5000,
    }
  );
  const completeDisplayed = await CheckoutPage.complete.isDisplayed();
  expect(completeDisplayed).toBe(True);
});

Then(/^the user should see "Thank you for your order!"$/, async() => {
   await browser.waitUntil(
     async () => await CheckoutPage.completeh2.isDisplayed(),
     {
       timeout: 5000,
     }
   );
   const completeDisplayed = await CheckoutPage.completeh2.isDisplayed();
   expect(completeDisplayed).toBe(True);
});

Then(/^the user should see "Back Home" button$/, async() => {
    const backDisplayed = await CheckoutPage.backHome.isDisplayed();
    expect(backDisplayed).toBe(True);
});
