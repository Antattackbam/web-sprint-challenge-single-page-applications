describe('Test', function () {
    it('Visits a new site', function() {
    cy.visit('http://localhost:3000/');
    cy.contains('Order').click();
    cy.url().should('include', '/pizza')
    })
})

describe('Order Pizza', function() {
    it('Orders pizza', function(){
        cy.visit('http://localhost:3000/pizza');
        cy.get('[data-cy=name-input]').type('Ant').should('have.value', 'Ant');
        cy.get("[data-cy=pepp]").click();
        cy.get("[data-cy=chick]").click();
        cy.get("[data-cy=tom]").click();
        cy.get('[data-cy=size').select('Small').should('have.value', 'Small');

    cy.get("[data-cy=instructions]")
      .type("make it bomb")
      .should("have.value", "make it bomb");


    cy.get("[data-cy=submit]").click();
  });
});