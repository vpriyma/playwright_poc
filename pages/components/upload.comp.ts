import { Locator, Page } from '@playwright/test'

class UploadComponent {
    private page: Page;
    private uploadInput: string;
    private submitButton: Locator;
    successText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uploadInput = '//input[@id="upfile_1"]';
        this.submitButton = page.locator('//input[@id="upload_1"]');
        this.successText = page.locator('//label[@id="wfu_messageblock_header_1_label_1"]');
    }

    async uploadFile(filePath: string) {
        // upload test file
        await this.page.setInputFiles(this.uploadInput, filePath);
        // click the submit button
        await this.submitButton.click();
    }
}

export default UploadComponent