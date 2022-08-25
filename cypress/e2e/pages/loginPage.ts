/// <reference types="cypress" />

import Common from "./common";

class LoginPage extends Common {
  get emailInput() {
    return cy.get('[id="email_input"]');
  }

  get passwordInput() {
    return cy.get('[id="password_input"]');
  }

  get logInBtn() {
    return cy.get('[id="loginButton"]');
  }

  public clickLogInBtn() {
    this.logInBtn.click();
  }

  public fillEmailAndPassword(email: string, password: string) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
  }

  // public logInToAccount(email: string, password: string) {
  //     this.emailInput.type(email)
  //     this.passwordInput.type(password)
  //     this.logInBtn.click()
  // }

  get registerBtn() {
    return cy.get('[href="/signup"]');
  }

  public clickRegisterBtn() {
    this.registerBtn.click();
  }

  get emailErrorLaber() {
    return cy.get('[id="email_label_error"]');
  }

  public checkEmailErrorLabelShown() {
    this.emailErrorLaber.should("be.visible");
  }

  get passwordErrorLaber() {
    return cy.get('[id="password_label_error"]');
  }

  public checkPasswordErrorLabelShown() {
    this.passwordErrorLaber.should("be.visible");
  }
}

export const loginPage: LoginPage = new LoginPage();
