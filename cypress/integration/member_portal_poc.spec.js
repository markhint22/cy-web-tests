 import {Pages} from "../support/pages";

context('Member Portal POC Tests',() => {
    beforeEach(() => {
    })

    it('visit landing page', () => {
        cy.visit('https://hello.integration.livongo.com')
    })


    it('click Sign In button', () => {
        // cy.get('button').contains('Sign In', { matchCase:false }).click()
        new Pages().click_sign_in_button();

    })


    it('fill in email field on login page', () => {
        cy.get('input[id="username"]').type("sadf78sadf79@sadfvsa9d8f.com")
    })

    it('fill in password field on login page', () => {
        cy.get('input[id="password"]').type("pP121212")
    })

    it('click Sign In button', () => {
        cy.get('button').contains('Sign In', { matchCase:false }).click()
    })

})