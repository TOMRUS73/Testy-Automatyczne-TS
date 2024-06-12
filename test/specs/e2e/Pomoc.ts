import { findUrl, findUrlPagination, helionHomeUrl } from "../../config/pagesUrl";
import GlobalPage from "../../pages/GlobalPage";
import SearchResultsPage from "../../pages/SearchResultsPage";
import { informationUrl } from "../../config/pagesUrl";
import CartPage from "../../pages/CartPage";

describe("Helper web site", async () => {
    let titleBook: string = "";
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

    it("should select pagination number 3", async () => {
        await CartPage.selectPaginationNumber();
        //await browser.pause(1000000);
        await expect(browser).toHaveUrl(findUrlPagination);
    })

    it("should select Help Center and back to informationUrl", async () => {
        await CartPage.selectHelpCenterFromBookStore();
        await expect(browser).toHaveUrl(informationUrl);
    })

    it("should select tab about discount price", async () => {
        await CartPage.selecttopTitleDiscountPrice();
    })

    it("should verify title book discount", async () => {
        //await CartPage.getTitleDiscountBook(); 
        titleBook = await CartPage.getTitleDiscountBook();
        console.log(titleBook);

    })

    it("should add to cart and verify title", async () => {
        await CartPage.addTitleDiscountBookToCart();
        console.log(await CartPage.getContentFromTheBox());
        await expect(await CartPage.getContentFromTheBox()).toContain(titleBook)
    })



})