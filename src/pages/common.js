

export class Common {

    constructor(page) {
        this.commonPage = page
    }

    async waitUntilUrlLoaded(url) {
        await this.commonPage.waitForURL(url)
    }

    async extractTextFromUI(xpath) {
        const extractedText = await this.commonPage.locator(xpath).textContent();
        return extractedText;
    }

}