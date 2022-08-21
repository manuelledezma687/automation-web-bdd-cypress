
class ShopsPage {

    navigate() {
        cy.visit('/')
    }

    clickOnItem(item) {
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

    confirmOrder() {
        cy.get('.complete-header').should('be.visible')
    }

    confirmRemovedItems() {
        cy.get('.btn btn_secondary btn_small btn_inventory').should('not.exist')
    }
}
export default ShopsPage