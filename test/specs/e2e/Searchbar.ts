import GlobalPage from "../../pages/GlobalPage";
import SearchbarPage from "../../pages/components/SearchbarPage";
import SearchResultsPage from "../../pages/SearchResultsPage";
import { incorretSearchPhrase, notFaundMessage, searchResultTitle } from "../../config/data";
import { searchPhrase } from "../../config/data";
import { helionHomeUrl, notFoundUrl, searchPageUrl } from "../../config/pagesUrl";


describe("E2E - Searchbar", async () => {
    it("should open helion page and verify url and visible searchbar", async () => {

        await GlobalPage.openPage(helionHomeUrl, helionHomeUrl);
        await SearchbarPage.searchBarIsVisible();

    })

    it("should click on searchIcon and verify url", async () => {

        await SearchbarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(helionHomeUrl);
    })

    it("should type search value and verify visible of Popup", async () => {
        await browser.pause(2900);
        await SearchbarPage.typeSearchPhrase(searchPhrase);
        await browser.pause(3300);
        await SearchbarPage.suggestPoupapIsVisible();
    })

    it("should click on see all books button ", async () => {
        await browser.pause(3300);
        await SearchbarPage.clickOnseeAllBooksBtn();
        await browser.pause(3300);
        await expect(browser).toHaveUrl(searchPageUrl);
    })

    it("should verify visible correctly title and number of books", async () => {
        const title: string = await SearchResultsPage.getPageTitle();
        await browser.pause(3300);
        const numerBooks: number = await SearchResultsPage.getNumberOfBooks();
        await expect(title).toContain(searchResultTitle);
        await expect(numerBooks).toEqual(25);
        //console.log(title); // to w sumie tylko do sprawdzenia co wyrzuci za stringi 

    })

    it("should clear input value", async () => {
        await SearchbarPage.clearSearchBar();
        await expect(await SearchbarPage.getInputValue()).toContain("");
    })

    it("should type incorret book name verify alert", async () => {
        await SearchbarPage.typeSearchPhrase(incorretSearchPhrase);
        await browser.pause(3300);
        await SearchbarPage.clickOnSearchIcon();
        await expect(await SearchbarPage.getNotFoundAlertText()).toContain(notFaundMessage);
    })

    it("should clear input value and click on search icon", async () => {
        await SearchbarPage.clearSearchBar();
        await browser.pause(2300);
        await SearchbarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(notFoundUrl);
        //await expect(await SearchbarPage.getInputValue()).toContain(incorretSearchPhrase); - to sprawdzenie blablabla jest do przeniesienia bo w polu search zostało wszystko wyczyszczone
    })


})