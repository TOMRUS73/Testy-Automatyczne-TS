
class SearchBarPage {
    get searchInput() {
        return $("#inputSearch")
    }
    get searchIcon() {
        return $("//button[contains(text(), 'Szukaj')]")
        // xpath najlepszy gdy nie ma id, title tylko pojedyńcza nazwa np.
    }

    get sugestPopup() {
        return $("form#szukanie div.suggest-list");
    }

    get seeAllBooksBtn() {
        return $("li.wszystkie > p > a");
    }

    get notFoundAlert() {
        return $("div.not-found");
    }

    async getNotFoundAlertText(): Promise<string> {
        const alert: WebdriverIO.Element = await this.notFoundAlert;
        await alert.waitForDisplayed();
        return await alert.getText();
    }

    async getInputValue(): Promise<string> {
        const input: WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        return await input.getValue();
    }

    async clearSearchBar() {
        const input: WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        await input.clearValue();
    }

    async clickOnseeAllBooksBtn() {
        const btn: WebdriverIO.Element = await this.seeAllBooksBtn;
        await btn.waitForDisplayed();
        await btn.scrollIntoView();
        await btn.click();
    }

    async suggestPoupapIsVisible() {
        const popup: WebdriverIO.Element = await this.sugestPopup;
        await popup.waitForDisplayed();
    }

    async typeSearchPhrase(value: string) {
        const input: WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        await input.setValue(value);
    }

    async clickOnSearchIcon() {
        const icon: WebdriverIO.Element = await this.searchIcon;
        await icon.waitForDisplayed();
        await icon.click();
    }

    async searchBarIsVisible() {
        const input: WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
    }


}

export default new SearchBarPage();
