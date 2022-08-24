import { homePage } from "./../pages/homePage";

describe("Go to resources", () => {
  before(() => {
    homePage.openWebsite();
    homePage.clickCookieDeclineBtn();
  });

  it("Open Ebooks page", () => {
    homePage.focusResourcesBtn();
    homePage.clickEbookBtn();
    homePage.clickCookieDeclineBtn();
  });

  it("Open Blog page", () => {
    homePage.focusResourcesBtn();
    homePage.clickBlogBtn();
  });
});
