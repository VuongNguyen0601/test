import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async verifyItemInCart() {
    await this.page.waitForSelector('.mini-cart-item');
  }

  async proceedToCheckout() {
    await this.page.click('text=Checkout');
  }
}
