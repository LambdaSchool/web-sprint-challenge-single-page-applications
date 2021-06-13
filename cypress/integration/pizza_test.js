describe('Form', () => {
    it('Renders Form', ()=> {
        cy.visit('http://localhost:3000/pizza')
    })
    it('populates name', () =>{
        cy.get('#name').type('Vida').should('have.value', 'Vida')

    })
    it('can select multiple toppings', () => {
        cy.get('#pepperoni').check()
        cy.get('#sausage').check()
        cy.get('#mushroom').check()
        cy.get('#onion').check()

     })
     it('populates instructions', () =>{
        cy.get('#instructions').type('No spicy Item').should('have.value', 'No spicy Item')
    })
     it('can submit the form', () => {
           cy.get('#submitButton').click()
     })
    })