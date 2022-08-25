/// <reference types="cypress" />

import Footer from "./footer";

class Header extends Footer {
  public clickHomePageBtn() {
    this.homePageBtn.click();
  }

  get resourcesBtn() {
    //Need to focus on it
    return cy.get("");
  }

  public focusResourcesBtn() {
    //Make mouse hover for this element
    this.resourcesBtn.trigger("mouseover");
  }
}
export default Header;
