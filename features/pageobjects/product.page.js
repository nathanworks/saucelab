const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
  /**
   * define selectors using getter methods
   */
  get productTitle() {
    return $("//span[contains(text(),'Products')]");
  }

  get productList() {
    return $(".inventory_item");
  }

  get addToCart() {
    return (product) => $(`#add-to-cart-${product}`);
  }

  get removeButton() {
    return (product) => $(`#remove-${product}`);
  }

  get cartIcon() {
    return $("//span[@class='shopping_cart_badge' and text()='1']");
  }

  async convertProductToXpath(product){
    return product
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
  }

  async addToCartClick(product) {
    const addToCartButton = this.addToCart(product);
    await addToCartButton.click();
  }

  async open() {
    return super.open("inventory.html");
  }
}

module.exports = new ProductPage();
