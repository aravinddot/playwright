

export class Common {

    constructor(page) {
        this.commonPage = page
    }

    async waitUntilUrlLoaded(url) {
        await this.commonPage.waitForURL(url)
    }

}