import {helionHomeUrl } from "../../config/pagesUrl";
import GlobalPage from "../../pages/GlobalPage";
import SearchResultsPage from "../../pages/SearchResultsPage";
import { informationUrl } from "../../config/pagesUrl";

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
})