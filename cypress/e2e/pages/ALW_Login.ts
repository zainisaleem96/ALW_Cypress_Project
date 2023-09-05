const data = require('../../fixtures/users')


class ALW_LoginPage{
    login_with_username(){
       // cy.visit('/')
       //cy.get('span[class=forgot-password Login_anchor__37QjD]').should('have.text','Login with email/password').click();
       cy.contains ('span[class="SwitchGroup_caption__2qWuh"]', 'EN').click()
       cy.contains ('span[class="forgot-password Login_anchor__37QjD"]', 'Login with email/password').click()
       cy.get('input[name=email]').type(data.alw_username);
       cy.get('input[name=password]').type(data.alw_password);
       cy.get('button[class="NewButton_btn-small__oc5_Z NewButton_btn-primary__7Sw3_"]').click();
    }
    login_with_phonenumber(){
        cy.wait(2000);
        cy.get('input[name=phone]').type(data.phonenumber_login);
        cy.get('button[class="NewButton_btn-small__oc5_Z NewButton_btn-primary__7Sw3_"]').click();
 

    cy.intercept("POST", "https://lms-juniper-stage-learn.alw.sa/api/otp/generate-signin-otp/").as("getOTP");

    cy.wait('@getOTP').then(xhr => {
        cy.log(xhr.response.body);
        cy.wrap(xhr.response.body.otp).as('OTP');
    });
     
    cy.get<string>('@OTP').then(OTP  => {
        cy.get('input[class="StepTwo_input__3wcRj "]').eq(0).type(OTP);
    });

    cy
        .get('button[class="NewButton_btn-small__oc5_Z NewButton_btn-primary__7Sw3_"]')
        .click();
     }
}
export default ALW_LoginPage