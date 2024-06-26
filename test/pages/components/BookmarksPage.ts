class BookmarksPage {
    get selectBestsellery() {
        return $("nav.main-menu li a[href*='/kategorie/bestsellery']")
    }

    get selectFromList() {
        return $("div.change-best-list label[data-seolink='devops']")
    }

    get titleBookDevops() {
        return $("div.bestseller-list h2 a.vgrafa-link");
    }

    get addTitleDevopsBook() {
        return $("div.bestseller-list h2 a.vgrafa-link");
    }

    get titleBookDevopsFromCart() {
        return $("div.title-group > h1 > span");
    }

    async getTitleDevopsBookFromCart(): Promise<string> {
        const titleBookDevopCart: WebdriverIO.Element = await this.titleBookDevopsFromCart;
        await titleBookDevopCart.waitForDisplayed();
        return await this.titleBookDevopsFromCart.getText();
    }

    async addTitleDevopsBookToCart() {
        const selectnumber: WebdriverIO.Element = await this.addTitleDevopsBook;
        await selectnumber.waitForDisplayed();
        await selectnumber.click();
    }


    async getTitleDevopsBook(): Promise<string> {
        const titleBookDevop: WebdriverIO.Element = await this.titleBookDevops;
        await titleBookDevop.waitForDisplayed();
        return await titleBookDevop.getText();
    }


    async clickOnDevops() {
        const mark: WebdriverIO.Element = await this.selectFromList
        await mark.click();
    }

    async clickOnBookmarkBestsellery() {
        const selectBook: WebdriverIO.Element = await this.selectBestsellery;
        await selectBook.waitForDisplayed();
        await selectBook.click();
    }

}

export default new BookmarksPage();
