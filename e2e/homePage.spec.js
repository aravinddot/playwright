import { expect, test } from "@playwright/test";
import { LoginPage } from "../src/pages/login";
import { HomePage } from "../src/pages/homePage";

test.describe('Home page test cases', async () => {

    let login;
    let home;

    test.beforeEach(async ({page}) => {
        login = new LoginPage(page);
        home = new HomePage(page)
    })


test('Validate home page headers', async({page})=> {
    await login.navigateToPage()
    await login.loginToApp('https://automationexercise.com/');
    await home.verifyHeaders();
})



})