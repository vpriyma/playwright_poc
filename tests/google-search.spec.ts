import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';
import SearchResultsPage from '../pages/searchResults.page';

test.describe('Home', ()=> {
    let homePage: HomePage;
    let searchResultPage: SearchResultsPage;

    test('Check title on the main page', async ({ page }) => {
        homePage = new HomePage(page);

        // Open 'https://www.google.com.ua/'
        await homePage.open();

        // Expect a title "to contain" a substring
        await expect(page).toHaveTitle('Google');
    })

    test('Check title after make searching', async ({ page }) => {
        homePage = new HomePage(page);

        // Open 'https://www.google.com.ua/'
        await homePage.open();

        // Fill in search field, click Enter and wait for domcontentloaded
        await homePage.searchFor('playwright');

        // Check title starts from searched word
        await expect(page).toHaveTitle(/^playwright/);
    })

    test('Check all results contain searched word', async ({ page }) => {
        homePage = new HomePage(page);
        searchResultPage = new SearchResultsPage(page);

        // Open 'https://www.google.com.ua/'
        await homePage.open();

        // Fill in search field, click Enter and wait for domcontentloaded
        await homePage.searchFor('playwright');

        // Check all main results link contain searched word
        for (const resultLinkContent of await searchResultPage.getMainResultLinkContents()) {
            console.log(await resultLinkContent);
            expect.soft(await resultLinkContent).toMatch(/playwright/i);
        }
    })
})