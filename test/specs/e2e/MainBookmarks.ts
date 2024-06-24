import { bestselleryPage, helionHomeUrl } from "../../config/pagesUrl";
import GlobalPage from "../../pages/GlobalPage";
import BookmarksPage from "../../pages/components/BookmarksPage";

describe("Bestsellery web site", async () => {
   
    it("should click on bookmark Bestsellery in Main Page and verify site", async () => {
        await GlobalPage.openPage(helionHomeUrl, helionHomeUrl);
        await expect(browser).toHaveUrl(helionHomeUrl);
        await browser.pause(100);
        await BookmarksPage.clickOnBookmarkBestsellery();
        await browser.pause(100);
        await expect(browser).toHaveUrl(bestselleryPage);
        await browser.pause(100);      
    })

    
})