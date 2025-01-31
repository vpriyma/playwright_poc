import { test, expect, Page } from '@playwright/test';

test.describe.serial('My Account', () => {
    let page: Page;

    test.beforeAll(async ({ browser }) => {
      page = await browser.newPage();
      await page.goto('https://practice.sdetunicorns.com/');
      await page.locator('//ul[@id="zak-primary-menu"]//a[contains(text(),"My account")]').click();
      await page.locator('//input[@id="username"]').fill('practiceuser1');
      await page.locator('//input[@id="password"]').fill('PracticePass1!');
      await page.locator('//button[@value="Log in"]').click();
      await expect(page.locator('//a[text()="Log out"]')).toBeVisible();
    })
  
    test('Access Orders', async () => {
    //   await page.goto('https://practice.sdetunicorns.com/my-account/');
      await page.locator('//a[contains(text(),"Orders")]').click();
      await expect(page).toHaveURL(/.*orders/);
    });
  
    test('Access Downloads', async () => {
    //   await page.goto('https://practice.sdetunicorns.com/my-account/');
      await page.locator('//a[contains(text(),"Downloads")]').click();
      await expect(page).toHaveURL(/.*downloads/);
    });
  });