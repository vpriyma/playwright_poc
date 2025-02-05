import { chromium, FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // login
    await page.goto('https://practice.sdetunicorns.com/my-account/');
    // save not signed-in state to notLoggedInState.json
    await page.context().storageState({ path: 'notLoggedInState.json' });

    // login
    await page.locator('//input[@id="username"]').fill('practiceuser1');
    await page.locator('//input[@id="password"]').fill('PracticePass1!');
    await page.locator('//button[@value="Log in"]').click();

    //save signed-in state to loggedInState.json
    await page.context().storageState({ path: 'loggedInState.json' });
    await browser.close();
}

export default globalSetup;