//const data = require('../../fixtures/users')
//import '../support/commands';

class VegPage{

    verifyPageLoadedSuccessfully(){
       // cy.visit('seleniumPractise/#/',{ failOnStatusCode: false});
        cy.title().should('eq', 'GreenKart - veg and fruits kart');
        cy.url().should('include', 'https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.viewport('macbook-11');
    }

    verifyTotalNumberofItems(){
       // cy.visit('seleniumPractise/#/',{ failOnStatusCode: false});
        cy.get('.product:visible').should('have.length',30)
    }
    
   /* verifyItemPrice(){
        cy.get('.products').find('.product').each(($el, index, $list) => {

            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes('Beetroot'))
            {
            $el.('product-price').should('have.text',32)
            }
            })

    } */

    verifyTotalItemAdded(){
        cy.Search_and_Add_to_Cart('Capsicum')
    }
}
export default VegPage