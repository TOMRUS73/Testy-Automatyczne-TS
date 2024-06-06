
class GlobalPage {
    async openPage(pageUrl: string, expectedPageUrl: string) {
        await browser.url(pageUrl)
        await expect(browser).toHaveUrl(expectedPageUrl);
        await browser.pause(1500);
    }

}

export default new GlobalPage();