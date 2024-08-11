const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
  /**
   * define selectors using getter methods
   */
  get appLogo() {
    return $(".app_logo");
  }

  get productList() {
    return $(".inventory_item");
  }

  get addToCart() {
    return $("#add-to-cart-sauce-labs-backpack");
  }

  get removeButton() {
    return $("#remove-sauce-labs-backpack");
  }

  get cartIcon() {
    return $("//span[@class='shopping_cart_badge' and text()='1']");
  }

  async addToCartClick() {
    await this.addToCart.click();
  }

  async open() {
    return super.open("inventory.html");
  }
}

module.exports = new ProductPage();
