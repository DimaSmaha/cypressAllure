/// <reference types="cypress" />

import Common from "./common";

class RegisterPage extends Common {
  ///Step one
  get firstNameInput() {
    return cy.get("");
  }

  get lastNameInput() {
    return cy.get("");
  }

  get emailInput() {
    return cy.get("");
  }

  get phoneNumberInput() {
    return cy.get("");
  }

  get passwordInput() {
    return cy.get("");
  }

  get termsChb() {
    return cy.get("");
  }

  public fillRegisterStepOne(
    firstname: string,
    lastname: string,
    email: string,
    number: string,
    password: string
  ) {
    this.firstNameInput.type(firstname);
    this.lastNameInput.type(lastname);
    this.emailInput.type(email);
    this.phoneNumberInput.type(number);
    this.passwordInput.type(password);
    this.termsChb.click();
  }

  get stepOneNextBtn() {
    return cy.get("");
  }

  public clickStepOneNextBtn() {
    this.stepOneNextBtn.click();
  }
  ///Step two

  get countrySelect() {
    return cy.get("");
  }

  countryList(country: string) {
    return cy.get('[role="option"]').contains(country);
  }

  ///Step three
  get technologiesSelect() {
    return cy.get("");
  }

  technologiesList(technologies: string) {
    return cy.get('[role="option"]').contains(technologies);
  }

  public fillRegisterStepThree(technologies: string) {
    this.technologiesSelect.click();
    this.technologiesList(technologies).click();
    this.technologiesSelect.click();
  }

  ///error label check
  get fieldErrorLabel() {
    return cy.get("");
  }

  public checkFieldErrorLabelShown() {
    this.fieldErrorLabel.should("be.visible");
  }
}

export const registerPage: RegisterPage = new RegisterPage();
