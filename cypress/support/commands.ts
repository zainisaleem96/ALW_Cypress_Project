/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        Search_and_Add_to_Cart(Productname: string): Chainable<Element>;
    }
  }





function Search_and_Add_to_Cart(Productname: string) {
        cy.get('.search-keyword').type("Capsicum");
        cy.wait(2000);
for(let n = 1; n <= 3; n ++){
    cy.get('.increment').as('btn').click();
}
cy.contains('button', 'ADD TO CART').click();
cy.get('[alt="Cart"]').click()
cy.get('.product-name').should('contain',Productname);
cy.get('.quantity').should('contain',4);
      }
Cypress.Commands.add("Search_and_Add_to_Cart", Search_and_Add_to_Cart)