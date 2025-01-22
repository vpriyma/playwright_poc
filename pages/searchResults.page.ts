import { Page, Locator } from '@playwright/test'

class SearchResultsPage {
    private page: Page;
    mainResultLinks: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.mainResultLinks = page.locator('//div[@id="search"]//h3[text()]');
    }

    getMainResultLinkContents() {
        return this.mainResultLinks.allTextContents();
    }
}

export default SearchResultsPage;