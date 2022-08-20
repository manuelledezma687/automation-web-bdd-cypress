
class ShopsPage {

    navigate() {
        cy.visit('/')
    }

    Item(item) {
        cy.get(item).click()
    }

    continueButton(){
        cy.get('#continue').click()
        cy.get('.cart_desc_label').should('be.visible')
    }

    checkout(){
        cy.get('#checkout').click()
    }

    shoppingCart(){
        cy.get('.shopping_cart_link').click()
    }

    fillForm(name, lastname, pscode){
        cy.get('#first-name').type(name)
        cy.get('#last-name').type(lastname)
        cy.get('#postal-code').type(pscode)
    }

    sortContainer(filter){
        cy.get('.product_sort_container').select(filter)
    }

    submitOrder() {
        cy.get('#finish').click()
    }
}
export default ShopsPage