import { Locator, Page } from "@playwright/test";

export default class AccountPage {
    readonly allDepartmentsDropdown: Locator;
    private optionName: Locator;
    private pageName: Locator;

    constructor(private page: Page) {
        this.allDepartmentsDropdown = page.getByText('All departments');
    }

    async navigateToAllDepartmentsDropdown() {
        await this.allDepartmentsDropdown.hover();
    }

    async selectPage(optionName: string) {
        this.optionName = this.page.getByRole('link', { name: ` ${optionName}` });
        await this.optionName.click();
    }

    async goToPage(pageName: string) {
        this.pageName = this.page.locator('#menu-main-menu-1').getByRole('link', { name: `${pageName}` });
        await this.pageName.click();
    }

    async goToPageDD(optionName: string) {
        this.optionName = this.page.locator("//div[@class='secondary-menu-wrapper']//a[text()='"+ optionName +"']");
        await this.optionName.click();
    }
}