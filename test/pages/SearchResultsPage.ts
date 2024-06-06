
class SearchResultsPage {
    get pageTitle() {
       // return $("h1#pageTitle");
        return $("div#page-title");
        
    }

    get bookItem() {        
         return $$("ul.list > li");         
     }


     get firstBookItem() {
        return $("ul.list > li:nth-child(1) > a");
     }

     async clickOnFirstBookItem() {
        const item: WebdriverIO.Element = await this.firstBookItem;       
        await item.waitForDisplayed();
        await item.click();
    }

     async getNumberOfBooks() {
        const numberBooks: WebdriverIO.ElementArray = await this.bookItem;       
        return await numberBooks.length;
    }

    async getPageTitle(): Promise<string> {
        const h1: WebdriverIO.Element = await this.pageTitle;
        await h1.waitForDisplayed();
        return await h1.getText();
    }
}

export default new SearchResultsPage();
