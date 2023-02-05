import { Given, And, Then } from 'cypress-cucumber-preprocessor/steps';


Given('Que el usuario accede al sitio web', () => {
  cy.visit('/')
})

And('Ingresa con las credenciales válidas', () => {
  cy.get("[data-test='username']").type("standard_user")
  cy.get("[data-test='password']").type("secret_sauce")
  cy.get('[data-test="login-button"]').click()
})

And('Ingresa con las credenciales bloqueadas', () => {
  cy.get("[data-test='username']").type("locked_out_user")
  cy.get("[data-test='password']").type("secret_sauce")
  cy.get('[data-test="login-button"]').click()
})

And('Ingresa con las credenciales con problemas de performance', () => {
  cy.get("[data-test='username']").type("performance_glitch_user")
  cy.get("[data-test='password']").type("secret_sauce")
  cy.get('[data-test="login-button"]').click()
})

And('Ingresa con las credenciales problemáticas', () => {
  cy.get("[data-test='username']").type("problem_user")
  cy.get("[data-test='password']").type("secret_sauce")
  cy.get('[data-test="login-button"]').click()
})

Then('El usuario hace login correctamente', () => {
  cy.get('.shopping_cart_link').should('be.visible')
})

Then('EL usuario no pudo ingresar correctamente', () => {
  cy.get('[data-test="error"]').should('be.visible')
})
