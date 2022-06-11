
  describe('Login de usuario', () => {

    beforeEach (function(){
      cy.visit('/')
      cy.fixture('Users').then(credentials => {
        this.credentials = credentials;
      })
    })
  
  
      it('Usuario exitoso SauceDemo',function () {
        cy.get('[data-test="username"]').type(this.credentials.standardUser)
        cy.get('[data-test="password"]').type(this.credentials.password)
        cy.get('[data-test="login-button"]').click()
        cy.wait(1000)
        cy.get('.shopping_cart_link').should('be.visible')
      })
  

      it('Usuario Bloqueado SauceDemo', function() {
        cy.get('[data-test="username"]').type(this.credentials.lockedOutUser)
        cy.get('[data-test="password"]').type(this.credentials.password)
        cy.get('[data-test="login-button"]').click()
        cy.wait(1000)
        cy.get('[data-test="error"]').should('be.visible')
      })
  
      it('Usuario con problema SauceDemo', function()  {
        cy.get('[data-test="username"]').type(this.credentials.problemUser)
        cy.get('[data-test="password"]').type(this.credentials.password)
        cy.get('[data-test="login-button"]').click()
        cy.wait(1000)
        cy.get('.shopping_cart_link').should('be.visible')
      })

      it('Usuario con problema de Performance SauceDemo', function()  {
        cy.get('[data-test="username"]').type(this.credentials.performanceGlitchser)
        cy.get('[data-test="password"]').type(this.credentials.password)
        cy.get('[data-test="login-button"]').click()
        cy.get('.shopping_cart_link').should('be.visible')
      })

  })