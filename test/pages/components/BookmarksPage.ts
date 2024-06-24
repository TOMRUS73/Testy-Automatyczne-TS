class BookmarksPage {
    get selectBestsellery() {
        return $("nav.main-menu li a[href*='/kategorie/bestsellery']")
    }

    async clickOnBookmarkBestsellery() {
        const icon: WebdriverIO.Element = await this.selectBestsellery;
        await icon.waitForDisplayed();
        await icon.click();
    }
   
}

export default new BookmarksPage();
