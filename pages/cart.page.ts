import { Page } from '@playwright/test'
import UploadComponent from './components/upload.comp';

class CartPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('https://practice.sdetunicorns.com/cart/');
    }

    uploadComponent() {
        return new UploadComponent(this.page)
    }
}

export default CartPage