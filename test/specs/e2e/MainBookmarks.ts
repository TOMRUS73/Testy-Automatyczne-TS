import { bestselleryPage, helionHomeUrl } from "../../config/pagesUrl";
import GlobalPage from "../../pages/GlobalPage";
import BookmarksPage from "../../pages/components/BookmarksPage";

describe("Bestsellery web site", async () => {
    let titleDevops: string = "";
    let titleDevopsCart: string = "";
    it("should click on bookmark Bestsellery in Main Page and verify site", async () => {
        await GlobalPage.openPage(helionHomeUrl, helionHomeUrl);
        await expect(browser).toHaveUrl(helionHomeUrl);
        await browser.pause(100);
        await BookmarksPage.clickOnBookmarkBestsellery();
        await browser.pause(100);
        await expect(browser).toHaveUrl(bestselleryPage);
        await browser.pause(100);
    })

    it("select from list bookmarks Devops and add to cart and finally check the title", async () => {
        await BookmarksPage.clickOnDevops();
        titleDevops = await BookmarksPage.getTitleDevopsBook();
        console.log(titleDevops);
        await browser.pause(1000);
        await BookmarksPage.addTitleDevopsBookToCart();
        await browser.pause(1000);
        titleDevopsCart = await BookmarksPage.getTitleDevopsBookFromCart();
        console.log(await BookmarksPage.getTitleDevopsBookFromCart());
        await expect(await titleDevops).toContain(titleDevopsCart)
    })

})