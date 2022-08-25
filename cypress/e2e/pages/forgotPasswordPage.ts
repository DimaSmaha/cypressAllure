/// <reference types="cypress" />

import Common from "./common";

class ForgotPasswordPage extends Common {
  get emailInput() {
    return cy.get('[id="email_input"]');
  }

  public fillEmailAndPassword(email: string) {
    this.emailInput.type(email);
  }

  get resetPasswordBtn() {
    return cy.get('[type="submit"]');
  }

  public clickResetPasswordBtn() {
    this.resetPasswordBtn.click();
  }
}

export const forgotPasswordPage: ForgotPasswordPage = new ForgotPasswordPage();
