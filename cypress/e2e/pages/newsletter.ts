/// <reference types="cypress" />

import Common from "./common";

class Newsletter extends Common {
  get newsInput() {
    return cy.get('[name="email"]');
  }

  public enterEmailIntoNewsInput(email: string) {
    this.newsInput.click();
    this.newsInput.type(email);
  }

  get newsSubmitBtn() {
    return cy.get('[type="submit"]');
  }

  public clickNewsSubmitBtn() {
    this.newsSubmitBtn.click();
  }
}
export default News;
