import { Page, Locator } from '@playwright/test'

class HomePage {
    page: Page;
    searchField: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.searchField = page.locator('//textarea[@name="q"]');
    }

    async open() {
        await this.page.goto('https://www.google.com.ua/');
    }

    async searchFor(text: string) {
        await this.searchField.fill(text);
        await this.searchField.press('Enter');
        await this.page.waitForLoadState('domcontentloaded')
    }
}

export default HomePage;