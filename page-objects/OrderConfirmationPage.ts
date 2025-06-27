import { Page } from "@playwright/test";

export class OrderConfirmationPage {
    constructor(private page: Page) {}

    async verifyOrderConfirmation() {
        await this.page.waitForSelector('text=Order Confirmation');
        await this.page.waitForSelector('.order-details');
    }
}