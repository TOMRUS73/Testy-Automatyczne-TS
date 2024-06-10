import { cartUrl, helionHomeUrl } from "../../config/pagesUrl";
import SearchbarPage from "../../pages/components/SearchbarPage";
import { searchPhrase } from "../../config/data";
import { searchProductUrl } from "../../config/pagesUrl";
import SearchResultsPage from "../../pages/SearchResultsPage";
import ProductPage from "../../pages/ProductPage";
import CartPage from "../../pages/CartPage";
import { alertMessage, /*deleteProductMessage*/ } from "../../config/data";



describe("E2E - Products", async () => {
    let productTitle: string = "";
    let price: string = "";
    before(() => {
        browser.url(helionHomeUrl);
    })
    it("should type search phrase and click search icon", async () => {

        await SearchbarPage.typeSearchPhrase(searchPhrase);
        await SearchbarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(searchProductUrl);
    })
    it("should click on first book", async () => {
        await SearchResultsPage.clickOnFirstBookItem();
        await ProductPage.productTitleIsVisible();
        await ProductPage.addToCartBtmIsVisible();
        productTitle = await ProductPage.getProductTitleValue(); //trzeba dać na początku let aby wszystkie testy miały dostęp do tej metody.
        price = await ProductPage.getProductPrice();
    })
    it("should click on add to cart btn", async () => {
        await ProductPage.clickOnAddToCartBtmIsVisible();
        await expect(browser).toHaveUrlContaining(cartUrl);
        console.log(await CartPage.getSuccesAlertValue());
        await expect(await CartPage.getSuccesAlertValue()).toContain(productTitle)
        //await browser.pause(9000);

    })

    it("should verify price of book with price before click pay", async () => {
        console.log(await price);
        await expect(await CartPage.getTotalPriceValue()).toContain(price);
        await browser.pause(1000);
    })

    it("should delete product from cart", async () => {
        await CartPage.checkProduct();
        await CartPage.clickOnSelectedLabel();
        await browser.pause(1000);
        console.log(await browser.getAlertText());
        await browser.pause(10000);

        // wprowadzenie wyrażenia //@ts-ignore - powoduje, że typescript zignoruje błąd np. gdy dla wersji nie ma metody getAlertText a jest dopiero  w nowszej wersji.

        await expect(await browser.getAlertText()).toContain(alertMessage);
        await CartPage.acceptDeleteAlert();
        //await browser.pause(15000);
        //console.log(await CartPage.getDeletedAlertMessageValue);
        await browser.pause(2500);
        //await expect(await CartPage.getDeletedAlertMessageValue).toContain(deleteProductMessage);

    })
  
})