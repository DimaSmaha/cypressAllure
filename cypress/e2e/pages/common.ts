import Helper from "./helper";
import { homePage } from "./homePage";
import { loginPage } from "./loginPage";
/// <reference types="cypress" />

class Common extends Helper {
  public openWebsite() {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.viewport(1920, 1080);
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
    cy.visit("");
  }

  public clickCookieAcceptBtn() {
    cy.get('[id="CybotCookiebotDialogBodyButtonAccept"]').click();
  }

  public clickCookieDeclineBtn() {
    cy.get('[id="CybotCookiebotDialogBodyButtonDecline"]').click();
  }

  // public logInToAccount(email: string, password: string) {
  //     homePage.clickLogInBtn();
  //     loginPage.emailInput.type(email)
  //     loginPage.passwordInput.type(password)
  //     loginPage.logInBtn.click()
  // }

  public logInToAccount2(email: string, password: string) {
    //cy.get('').click()  //click login btn on home page
    cy.get('[id="email_input"]').type(email); //type into email input
    cy.get('[id="password_input"]').type(password); //type into pass input
    cy.get('[id="loginButton"]').click(); //click login btn
  }
}

export default Common;
