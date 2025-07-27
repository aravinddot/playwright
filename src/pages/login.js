import { Common } from "./common";
import locator from '../Locators/xpath.json'
import testData from '../testData/testDatas.json'

const {signUpName, signUpEmail, signUpButton} = locator

export class LoginPage extends Common {

    constructor(page) {
        super(page)
        this.currentPage = page;
        this.loginLocator = page.locator('[data-qa="login-email"]');
        this.passwordLocator = page.locator('[data-qa="login-password"]');
        this.loginBtn = page.locator('[data-qa="login-button"]')
    }

    async navigateToPage(url) {
        await this.currentPage.goto(url)
    }


    async loginToApp(url) {
    await this.loginLocator.fill('javascript12345@gmail.com');
    await this.passwordLocator.fill('12345')
    await this.loginBtn.click()
    await this.waitUntilUrlLoaded(url)
    }

    async signUp() {
    await this.currentPage.locator(signUpName).fill(testData.userName)
    await this.currentPage.locator(signUpEmail).fill(testData.userEmail)
    await this.currentPage.locator(signUpButton).click();
    }
}