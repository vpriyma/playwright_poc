import { test, expect, APIResponse } from '@playwright/test';
import ContactPage from '../pages/contact.page';
import apiController from '../controller/api.controller';

test.describe('Contact', () => {
  let contactPage: ContactPage;
  let users: APIResponse;

  test.beforeAll(async () => {

    await apiController.init();

    users = await apiController.getUsers();

    const newUserToDo = await apiController.createUserToDo({'title': 'Learn playwrught', 'completed': false});
    console.log(newUserToDo);
  })
  

  test('Fill contact form and verify success message', async ({ page }) => {
    contactPage = new ContactPage(page);
    
    // open contact page
    await contactPage.open();

    //  fill out the input fields and submit
    await contactPage.submitForm(
      users[0]['name'], 
      users[0]['email'], 
      users[0]['phone'], 
      users[0]['company']['catchPhrase']
    );
    
    // verify success message
    await expect(contactPage.successTxt).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
  })
})