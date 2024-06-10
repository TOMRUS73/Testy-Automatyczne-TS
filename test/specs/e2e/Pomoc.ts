import { findUrl, helionHomeUrl } from "../../config/pagesUrl";
import GlobalPage from "../../pages/GlobalPage";
import SearchResultsPage from "../../pages/SearchResultsPage";
import { informationUrl } from "../../config/pagesUrl";
import CartPage from "../../pages/CartPage";

describe("Helper web site", async () => {
    it("should click on tab Pomoc in Main Pages and verify site Help", async () => {
        await GlobalPage.openPage(helionHomeUrl, helionHomeUrl);
        await expect(browser).toHaveUrl(helionHomeUrl);
        await browser.pause(1000);
        await SearchResultsPage.clickOnPomocTab();
        await browser.pause(1000);
        await expect(browser).toHaveUrl(informationUrl);
        await browser.pause(1000);
    })

    it("should click on Katalog Tab", async () => {
        await CartPage.scrollTabCatalog();
        await browser.pause(1000);
    })

    it("should select items from the Catalog List and verify the page name", async () => {
        await CartPage.selectItemsFromTheCatalogList();
        await expect(browser).toHaveUrl(findUrl);
    })

})