import { headers } from "../constants/constant"
import { expect } from "@playwright/test"

export class HomePage {

    constructor(page) {
        this.page = page
    }

async verifyHeaders() {
    for(let i = 0; i < headers.length; i++) {
            await expect(this.page.locator(`//ul[@class="nav navbar-nav"]//li[${i + 1}]`)).toContainText(headers[i])
        }
}

}