const data = require('../../fixtures/users')


class ALW_S_SignupPage{
    signup_with_student(){
        cy.visit({url: "/registration", failOnStatusCode:false });
        // APIs 
        cy.intercept("POST", "https://lms-juniper-dev-learn.alw.sa/api/mentora/taxonomy/grades/").as("getGrades");
        cy.intercept("POST", "https://lms-juniper-dev-learn.alw.sa/api/otp/generate").as("getOTP");
        cy.intercept("POST", "https://lms-juniper-dev-learn.alw.sa/api/service_based_subscription/plans/").as("enrollInPLan");
        cy.intercept("POST", "https://lms-juniper-dev-learn.alw.sa/api/service_based_subscription/1/user/67031/grade/4/subject-services/").as("subjectServices");
    
       //cy.contains ('span[class="SwitchGroup_caption__2qWuh"]', 'EN').click()
       cy.get('.row > :nth-child(1) > .Login_anchor__37QjD').click()
       cy.get('div[class="form-select__value-container css-1hwfws3"]').click()
       //cy.wait('@getGrades');
       //cy.get("#react-select-3-option-6").click(); G7
       cy.get("#react-select-3-option-2").click(); // G3

       // Random Phone Number generate for SignUp
       const number = '1' + Math.random().toString().substr(2, 9)
       cy.get('input[name=phone]').type(number);

       cy.get('button[class="NewButton_btn-big__18Lpi NewButton_btn-primary__7Sw3_"]').click();

   

    cy.wait('@getOTP').then(xhr => {
        cy.log(xhr.response.body);
        cy.wrap(xhr.response.body.otp).as('OTP');
    });
     
    cy.get<string>('@OTP').then(OTP  => {
        cy.get('input[class="StepTwo_input__3wcRj "]').eq(0).type(OTP);
    });

    cy.get('.NewButton_btn-primary__7Sw3_').click();
    //cy.wait('@enrollInPLan');
    // Select Plan
    cy.get(':nth-child(1) > .Subscription_paymentPlans__plan__1gWRy').click()
    cy.get('.NewButton_btn-primary__7Sw3_').click();
    // Select Subjects
    cy.get(':nth-child(1) > .SemesterSubjects_subjectCard__option__3PpaU').click();
    cy.contains ('span[class="Checkbox_label__33-dN"]', 'لغة إنجليزيّة').click();
    cy.get('.NewButton_btn-primary__7Sw3_').click();
    // Select Services
    cy.get('input[name="children.0.subjects.0.services.0.checked"]').click();
    cy.get('input[name="children.0.subjects.1.services.1.checked"]').click();

    //verify Free Plan Price is Zero
    cy.get('.Services_service__footer__1WQ-H > span').should('have.text','SAR 0');

    cy.get('.NewButton_btn-primary__7Sw3_').click();

    // Verify add new service from payment page
    cy.get('i[class="material-icons IconCommon_normal__11Znr"]').click();
    cy.get('.NewButton_btn-primary__7Sw3_').click();
    cy.get('.NewButton_btn-primary__7Sw3_').click();
    cy.get('input[name="children.0.subjects.0.services.1.checked"]').click();
    cy.get('.NewButton_btn-primary__7Sw3_').click();
    cy.get('.Subscription_paymentDetails__line__secondary__3hQbP > h6').should('have.text','On Demand content');
    cy.get(':nth-child(6) > [data-layer="Content"]').should('have.text','محتوى عند الطلب');
    cy.get('.NewButton_btn-primary__7Sw3_').click();

     }
    }
export default ALW_S_SignupPage