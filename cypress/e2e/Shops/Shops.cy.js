describe('Compras de usuario', () => {

    beforeEach (function(){
      cy.visit('/')
      cy.fixture('Users').then(credentials => {
        this.credentials = credentials;
        cy.get('[data-test="username"]').type(this.credentials.standardUser)
        cy.get('[data-test="password"]').type(this.credentials.password)
        cy.get('[data-test="login-button"]').click()
        cy.wait(1000)
      })
    })
  
  
      it('Compra de 2 items',function () {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.get('#first-name').type("Byron")
        cy.get('#last-name').type("Stuart")
        cy.get('#postal-code').type("C454818")
        cy.get('#continue').click()
        cy.get('.cart_desc_label').should('be.visible')
        cy.get('#finish').click()
        cy.get('.complete-header').should('be.visible')

      })
  

      it('Examinar  al dropdown y boton de remover item',function () {
        cy.get('.product_sort_container').select('Price (low to high)')//.should('have.value', '3')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.wait(1000)
        cy.get('.btn btn_secondary btn_small btn_inventory').should('not.exist')

      })
  
    
  })