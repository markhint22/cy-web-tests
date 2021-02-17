import * as locators from "./locators";

export class landing_page{

    visit_landing_page(){
        cy.log(Cypress.env('environment'))
        cy.visit('https://hello.integration.livongo.com')
    }

    click_sign_in_button(){
        cy.log(locators.HomePage.SIGN_IN_BUTTON)
        cy.xpath(locators.HomePage.SIGN_IN_BUTTON).click()
    }

}



export class sign_in_page{

    fill_email(email){
        if(!email){
            email = "autog+"+String((Math.random()*10))+"@livongolabs.com"
        }
        cy.log(Cypress.env('environment'))
        cy.xpath(locators.SignInPage.EMAIL_INPUT).type(email)
    }

    fill_password(password){
        if(!password){
            password = "pP121212"
        }
        cy.xpath(locators.SignInPage.PASSWORD_INPUT).type(password)
    }

    click_sign_in_button(){
        cy.xpath(locators.SignInPage.SIGN_IN_BUTTON).click()
    }

}

export class sign_up_section{


    // insert_first_name(self, first_name="") {
    //     element_locator = "";
    //     try {
    //         if (self.context.registration_version === 'galaxy') {
    //             element_locator = GalaxyMemberRegistrationPageLocators.MEMBER_FIRST_NAME
    //         }
    //         else if (self.context.registration_version === '5'){
    //             element_locator = locators.SignUpSection.FIRST_NAME_INPUT_v5
    //         }
    //         else if(self.context.registration_version === '4') {
    //             element_locator = locators.SignUpSection.FIRST_NAME_INPUT
    //         }
    //     }
    //     finally {
    //             if(first_name === "")
    //         {
    //             first_name = self.context.registration_data.get('firstName')
    //             self.fill_text(element_locator, first_name)
    //             return first_name
    //         }
    //         }
    // }



}





