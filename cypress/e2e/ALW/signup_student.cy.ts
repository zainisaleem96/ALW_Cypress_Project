
import ALW_Student_Signup from '../pages/ALW_Student_Signup';

context('Actions', ()=> {

    const alw_ssignup_page = new ALW_Student_Signup();

    beforeEach(()=>{
        console.log("this is before")
        

    })

 it('Verfiy that Student Signup successfuly', () => {
    
    //cy.visit("https://juniper-dev-learn.alw.sa/");
    alw_ssignup_page.signup_with_student();

 })

})