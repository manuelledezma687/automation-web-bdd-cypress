/// <reference types="cypress" />
import LoginPage from "../integration/PageObject/LoginPage.js"
describe("Cypress POM Test Suite", function () {

  beforeEach (function(){
    cy.fixture('Users').then(credentials => {
      this.credentials = credentials;
    })
  })

it('Usuario exitoso SauceDemo',function () {
    const login = new LoginPage();
    login.navigate();
    login.enterUser(this.credentials.standardUser);
    login.enterPassword(this.credentials.password);
    login.submit();
    cy.get('.shopping_cart_link').should('be.visible')
  })

  it('Usuario Bloqueado SauceDemo', function() {
    const login = new LoginPage();
    login.navigate();
    login.enterUser(this.credentials.lockedOutUser);
    login.enterPassword(this.credentials.password);
    login.submit();
    cy.get('[data-test="error"]').should('be.visible')
  })

  it('Usuario con problema SauceDemo', function()  {
    const login = new LoginPage();
    login.navigate();
    login.enterUser(this.credentials.problemUser);
    login.enterPassword(this.credentials.password);
    login.submit();
    cy.get('.shopping_cart_link').should('be.visible')
  })

  it('Usuario con problema de Performance SauceDemo', function()  {
    const login = new LoginPage();
    login.navigate();
    login.enterUser(this.credentials.performanceGlitchser);
    login.enterPassword(this.credentials.password);
    login.submit();
    cy.get('.shopping_cart_link').should('be.visible')
  })

});