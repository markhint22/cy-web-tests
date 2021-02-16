import HomePageLocators from "./locators";

export class Pages{
    click_sign_in_button(){
        const homePage = new HomePageLocators()
        cy.log(homePage.SIGN_IN_BUTTON)
        cy.xpath(homePage.SIGN_IN_BUTTON).click()
        //cy.get('button').contains('Sign In', { matchCase:false }).click()
        //cy.xpath("//button[contains(text(),'Sign in')]").click()
    }
}

