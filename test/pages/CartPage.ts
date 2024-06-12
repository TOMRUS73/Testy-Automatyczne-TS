class CartPage {

    get succesAlert() {
        return $("div.successbox > p");
    }

    get totalPrice() {
        return $("strong#cart-edit-summary");
    }

    get clickOnCheckboxProduct() {
        return $("div#formularz  tr th.checkbox");
    }

    get deleteSelectedLabel() {
        return $("div#usun a");
    }

    get deletedAlertMessage() {
        return $("div.infobox > p");
    }

    get backToMainUrl() {
        return $("div#headerContainer p.logo >a");
    }

    get clickOnKatalogTab() {
        return $("p#linkCatalog a span");
    }

    get selectNumber() {
        return $("div.stronicowanie a[href*='kategorie/big-data/3']");
    }

    get selectItems() {
        return $("li.kategorieGlowne a[href*='big-data']");
    }

    get selectOnBookStore() {
        return $("div.col ul li a[href*='/przewodnik.phtml']");
    }

    async selectHelpCenterFromBookStore() {
        const selectnumber: WebdriverIO.Element = await this.selectOnBookStore;
        await selectnumber.waitForDisplayed();
        await selectnumber.click();
    }

    async selectPaginationNumber() {
        const selectnumber: WebdriverIO.Element = await this.selectNumber;
        await selectnumber.waitForDisplayed();
        await selectnumber.click();
    }


    async selectItemsFromTheCatalogList() {
        const selectitem: WebdriverIO.Element = await this.selectItems;
        await selectitem.waitForDisplayed();
        await selectitem.click();
    }
    async scrollTabCatalog() {
        const tab: WebdriverIO.Element = await this.clickOnKatalogTab;
        await tab.waitForDisplayed();
        await tab.click();
    }

    async backToMainStore() {
        const back: WebdriverIO.Element = await this.backToMainUrl;
        await back.waitForDisplayed();
        await back.scrollIntoView();
        await back.click();
    }

    async getDeletedAlertMessageValue(): Promise<string> {
        const alert: WebdriverIO.Element = await this.deletedAlertMessage;
        await alert.waitForDisplayed();
        return await alert.getAlertText();
    }

    async acceptDeleteAlert(): Promise<void> {

        await (browser.acceptAlert());
    }

    async scrollPageUp(): Promise<void> {

        await (browser.scroll());
    }


    async clickOnSelectedLabel() {
        const label: WebdriverIO.Element = await this.deleteSelectedLabel;
        await label.waitForDisplayed();
        await label.scrollIntoView();
        await label.click();
    }

    async checkProduct() {
        const checkbox: WebdriverIO.Element = await this.clickOnCheckboxProduct;
        await checkbox.waitForDisplayed();
        await checkbox.scrollIntoView();
        await checkbox.click();
    }

    async getTotalPriceValue(): Promise<string> {
        const price: WebdriverIO.Element = await this.totalPrice;
        await price.waitForDisplayed();
        return await price.getText();
    }

    async getSuccesAlertValue(): Promise<string> {
        const alert: WebdriverIO.Element = await this.succesAlert;
        await alert.waitForDisplayed();
        return await alert.getText();
    }

}

export default new CartPage();