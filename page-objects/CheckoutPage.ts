import { Page } from "@playwright/test";

export class CheckoutPage {
    constructor(private page: Page) {}

    async verifyCheckoutPage() {
        await this.page.waitForSelector('.checkout-form');
    }

    async fillBillingDetails() {
        await this.page.waitForSelector('#payment-method');
    }

    async placeOrder() {
        await this.page.click('text=PLACE ORDER');
    }
}