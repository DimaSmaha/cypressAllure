import { homePage } from "./../pages/homePage";

describe("Login to existing account", () => {
  const userEmail = "";
  const userPass = "";

  before(() => {
    homePage.openWebsite();
    homePage.clickCookieDeclineBtn();
  });

  it("Login to existing account with valid data", () => {
    homePage.logInToAccount2(userEmail, userPass);
    cy.url().should("include", "/smth");
    cy.get("[]").should("be.visible");
  });
});
