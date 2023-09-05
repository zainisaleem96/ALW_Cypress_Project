import VegPage from '../pages/vegetables';

context('Actions', ()=> {

    const vegPage = new VegPage();

    beforeEach(()=>{
        cy.visit('seleniumPractise/#/',{ failOnStatusCode: false});
        //console.log("this is before")
       // loginPage.login();
        

    })

    it('Verify reached successfully', ()=> {
        vegPage.verifyPageLoadedSuccessfully();
 })
    it('Verify total number of items', ()=> {
        vegPage.verifyTotalNumberofItems();
})
    it('Verify item price', ()=> {
        //vegPage.verifyItemPrice();
})

})