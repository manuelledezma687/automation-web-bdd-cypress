
class LoginPage {
    
    navigate() {
        cy.visit('/')
    }

    enterUser(username) {
        cy.get("[data-test='username']")
            .clear()
            .type(username)
        return this
    }

    enterPassword(pswd) {
        cy.get('[data-test="password"]')
            .clear()
            .type(pswd)
        return this
    }

    submit() {
        cy.get('[data-test="login-button"]').click()
    }

    confirmLogin(){
        cy.get('.shopping_cart_link').should('be.visible')
    }

    confirmError(){
        cy.get('[data-test="error"]').should('be.visible')
    }
}
export default LoginPage