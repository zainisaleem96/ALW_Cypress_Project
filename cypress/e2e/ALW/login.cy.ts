
import ALW_LoginPage from '../pages/alw_login';

context('Actions', ()=> {

    const alwloginPage = new ALW_LoginPage();

    beforeEach(()=>{
        console.log("this is before")
        

    })

 /*it('Verfiy that User successfuly logins with username/password', () => {
    
    cy.visit("https://juniper-stage-learn.alw.sa/");
    alwloginPage.login_with_username();

 })*/
 it('Verfiy that User successfuly logins with phonenumber', () => {
    
    cy.visit("https://juniper-stage-learn.alw.sa/");
    alwloginPage.login_with_phonenumber();

 })

})