import { Common } from "./common";

export class LoginPage extends Common {

    constructor(page) {
        super(page)
        this.currentPage = page
    }

    async navigateToPage() {
        await this.currentPage.goto('https://automationexercise.com/login')
    }


    async loginToApp(url) {
    await this.currentPage.locator('[data-qa="login-email"]').fill('javascript12345@gmail.com');
    await this.currentPage.locator('[data-qa="login-password"]').fill('12345')
    await this.currentPage.locator('[data-qa="login-button"]').click()
    await this.waitUntilUrlLoaded(url)
    }
}