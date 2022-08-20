/// <reference types="cypress" />
import LoginPage from "../integration/PageObject/LoginPage.js"
import ShopsPage from "../integration/PageObject/ShopsPage.js"

describe('Compras de usuario', () => {

    beforeEach (function(){
      cy.fixture('Users').then(credentials => {
        this.credentials = credentials;
        const login = new LoginPage();
        login.navigate();
        login.enterUser(this.credentials.standardUser);
        login.enterPassword(this.credentials.password);
        login.submit();
      })
    })
  
  
    it('Compra de 2 items',function () {
      const shops = new ShopsPage();
      shops.clickOnItem('#add-to-cart-sauce-labs-backpack');
      shops.clickOnItem('#add-to-cart-sauce-labs-bolt-t-shirt');
      shops.shoppingCart();
      shops.checkout();
      shops.fillForm("Byron","Stuart","C454818");
      shops.continueButton();
      shops.submitOrder();
      cy.get('.complete-header').should('be.visible');

    })
  
    it('Examinar  al dropdown y boton de remover item',function () {
      const shops = new ShopsPage();
      shops.sortContainer('Price (low to high)');
      shops.clickOnItem('#add-to-cart-sauce-labs-backpack');
      shops.clickOnItem('#add-to-cart-sauce-labs-bolt-t-shirt');
      shops.clickOnItem('[data-test="remove-sauce-labs-bolt-t-shirt"]');
      shops.clickOnItem('[data-test="remove-sauce-labs-backpack"]');
      cy.get('.btn btn_secondary btn_small btn_inventory').should('not.exist')

    })
    
  })