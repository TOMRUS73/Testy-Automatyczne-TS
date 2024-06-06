class ProductPage {

    get productTitle() {
        return $("div.title-group > h1 >span");
    }

    get addToCartBtm() {
        return $("a#addToBasket_tefust");
    }

    get productPrice() {
        return $("ins#cena_d");
    }

    async getProductPrice() :Promise<string> {
        const price: WebdriverIO.Element = await this.productPrice;
        await price.waitForDisplayed();
        return await price.getText();
    }

    async getProductTitleValue() :Promise<string> {
        const title: WebdriverIO.Element = await this.productTitle;
        await title.waitForDisplayed();
        return await title.getText();
    }

    async clickOnAddToCartBtmIsVisible() {
        const btn: WebdriverIO.Element = await this.addToCartBtm;
        await btn.waitForDisplayed();
        await btn.click();
    }

    async productTitleIsVisible() {
        const title: WebdriverIO.Element = await this.productTitle;
        await title.waitForDisplayed();
    }

    async addToCartBtmIsVisible() {
        const btn: WebdriverIO.Element = await this.addToCartBtm;
        await btn.waitForDisplayed();
    }



}

export default new ProductPage();