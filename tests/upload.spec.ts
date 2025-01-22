import { test, expect } from '@playwright/test'
import CartPage from '../pages/cart.page';
const path = require('path');

test.describe('Upload file', () => {
    let cartPage: CartPage
    test('Check uploading of test file', async ({ page }) => {
        cartPage = new CartPage(page);

        // Open 'https://practice.sdetunicorns.com/cart/'
        await cartPage.open();

        // provide test file path
        const filePath = path.join(__dirname, '../data/1_gMiUPuRGC36nxZHe2zthOg.png');

        // upload test file
        cartPage.uploadComponent().uploadFile(filePath);

        // assertion
        await expect(cartPage.uploadComponent().successText)
                    .toHaveText('File 1_gMiUPuRGC36nxZHe2zthOg.png uploaded successfully', { timeout: 10000 });
    })
})