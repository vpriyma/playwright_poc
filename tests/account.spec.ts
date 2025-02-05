import { test, expect } from '@playwright/test';

test.describe('My Account', () => {
    test('Access Orders', async ({ page }) => {
      await page.goto('https://practice.sdetunicorns.com/my-account/');
      await page.locator('//a[contains(text(),"Orders")]').click();
      await expect(page).toHaveURL(/.*orders/);
    });
  
    test('Access Downloads', async ({ page }) => {
      await page.goto('https://practice.sdetunicorns.com/my-account/');
      await page.locator('//a[contains(text(),"Downloads")]').click();
      await expect(page).toHaveURL(/.*downloads/);
    });
  });