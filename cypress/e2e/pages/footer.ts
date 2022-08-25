/// <reference types="cypress" />

import NewsPage from "./newsPage";

class Footer extends NewsPage {
  get homePageBtn() {
    return cy.get('[id="footer"]');
  }

  public clickHomePageBtn() {
    this.homePageBtn.click();
  }
}
export default Footer;
