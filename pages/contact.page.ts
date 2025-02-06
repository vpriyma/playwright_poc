import { Locator, Page } from '@playwright/test';

class ContactPage {
  private page: Page;
  nameInput: Locator;
  emailInput: Locator;
  phoneInput: Locator;
  messageTextArea: Locator;
  submitBtn: Locator;
  successTxt: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator('//input[@id="evf-277-field_ys0GeZISRs-1"]');
    this.emailInput = page.locator('//input[@id="evf-277-field_LbH5NxasXM-2"]');
    this.phoneInput = page.locator('//input[@id="evf-277-field_66FR384cge-3"]');
    this.messageTextArea = page.locator('//textarea[@id="evf-277-field_yhGx3FOwr2-4"]');
    this.submitBtn = page.locator('//button[@type="submit"]');
    this.successTxt = page.locator('//div[@role="alert"]');
  }

  async open() {
    await this.page.goto('https://practice.sdetunicorns.com/contact/');
  }

  async submitForm(name: string, email: string, phone: string, message: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
    await this.messageTextArea.fill(message);
    await this.submitBtn.click();
  }
}

export default ContactPage;