
import LoginPage from '../pages/login';

context('Actions', ()=> {

    const loginPage = new LoginPage();

    beforeEach(()=>{
        console.log("this is before")
        

    })

 it('all test cases', () => {
    cy.clearCookies();
    cy.clearAllSessionStorage();
    cy.clearLocalStorage();
    cy.visit("https://www.saucedemo.com")
    loginPage.login();

 })


})