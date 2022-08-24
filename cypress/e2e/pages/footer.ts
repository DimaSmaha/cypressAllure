/// <reference types="cypress" />

import Newsletter from "./newsletter";

class Footer extends Newsletter {
  get homePageLogoBtn() {
    return cy.get('[id="footer"]');
  }

  public clickHomePageLogoBtn() {
    this.homePageLogoBtn.click();
  }
}
export default Footer;
