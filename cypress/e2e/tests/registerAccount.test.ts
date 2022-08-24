import { registerPage } from "./../pages/registerPage";
import { homePage } from "./../pages/homePage";
import { loginPage } from "../pages/loginPage";

describe("Register Account", () => {
  const firstname = registerPage.generateRandomLogin();
  const lastname = registerPage.generateRandomLogin();
  const email = registerPage.generateRandomLogin() + "@gmail.com";
  const number = "11111111111";
  const pass = "333333";
  const technologies = "Steam";

  before(() => {
    homePage.openWebsite();
    homePage.clickCookieDeclineBtn();
  });

  it("Register Account with valid data", () => {
    loginPage.clickRegisterBtn();
    registerPage.fillRegisterStepOne(firstname, lastname, email, number, pass);
    registerPage.clickStepOneNextBtn();
    registerPage.fillRegisterStepThree(technologies);
    // registerPage.clickCompleteSingUpBtn();
  });
});
