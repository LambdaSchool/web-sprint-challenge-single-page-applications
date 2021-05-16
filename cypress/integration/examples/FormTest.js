describe('Pizza App', () => {

beforeEach(() => cy.visit('http://localhost:3000'))
    describe('type into box, get toppings, and submit', () => {
        it('can type and check if the name is correct', () => {          
    cy.get('input[name=textarea]')
        .click()

    cy.get('input[name=name]')
        .type('Eren Yeager')
        .should('have.value', 'Eren Yeager ')

    cy.get('submit-btn')
        .click()
})})
    describe('Filling inputs and cancelling', () => {
        it('submit button is disabled', () => {
            cy.get('submit-btn').should('be.disabled')
})
})}) 