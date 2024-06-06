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

    async getDeletedAlertMessageValue(): Promise<string> {
        const alert: WebdriverIO.Element = await this.deletedAlertMessage;
        await alert.waitForDisplayed();
        return await alert.getAlertText();
    }

    async acceptDeleteAlert() : Promise<void> {
    
        await (browser.acceptAlert());               
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