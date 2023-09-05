const data = require('../../fixtures/users')


class LoginPage{
    login(){
       // cy.visit('/')
        cy.get('input[name=user-name]').type(data.username)
        cy.get('input[name=password]').type(data.password)
        cy.get('input[value= "Login"]').click()
        cy.get('.title').should('have.text','Products')
        cy.get('.inventory_item_name').contains('Sauce Labs Bolt T-Shirt').click();
        cy.get('button[id=back-to-products]').should('have.text', 'Back to products');
        cy.get('button[id=add-to-cart-sauce-labs-bolt-t-shirt]').click();
        cy.get('a[class=shopping_cart_link]').click();
        cy.get('.inventory_item_name').should('have.text','Sauce Labs Bolt T-Shirt');
        cy.get('.cart_quantity').should('have.text','1');
        cy.get('button[id=remove-sauce-labs-bolt-t-shirt]').click();
        cy.get('.removed_cart_item').should('exist');
    }

}
export default LoginPage