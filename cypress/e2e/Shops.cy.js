<reference types="cypress" />
import LoginPage from "../integration/PageObject/LoginPage.js"
import ShopsPage from "../integration/PageObject/ShopsPage.js"

describe('Compras de usuario', () => {

  const login = new LoginPage();
  const shops = new ShopsPage();


  beforeEach(function () {
    cy.fixture('elements').then(webElement => {
      this.webElement = webElement;
      cy.fixture('users').then(credentials => {
        this.credentials = credentials;
        login.navigate()
        login.enterUser(this.credentials.standardUser);
        login.enterPassword(this.credentials.password);
        login.submit()
      })
    })
  })

  it('Compra de 2 items', function () {
    shops.clickOnItem(this.webElement.tshirt)
    shops.clickOnItem(this.webElement.backpack)
    shops.shoppingCart()
    shops.checkout()
    shops.fillForm("Byron", "Stuart", "C454818")
    shops.continueButton()
    shops.submitOrder()
    shops.confirmOrder()
  })

  it('Examinar  al dropdown y boton de remover item', function () {
    shops.sortContainer(this.webElement.sortLowToHigh)
    shops.clickOnItem(this.webElement.tshirt)
    shops.clickOnItem(this.webElement.backpack)
    shops.clickOnItem(this.webElement.removeTshirt)
    shops.clickOnItem(this.webElement.removeBackpack)
    shops.confirmRemovedItems()
  })

})