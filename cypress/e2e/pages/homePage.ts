/// <reference types="cypress" />

import Header from "./header";

class HomePage extends Header {}

export const homePage: HomePage = new HomePage();
