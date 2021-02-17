 import {landing_page, sign_in_page} from "../support/pages";

context('Member Portal Tests',() => {
    beforeEach(() => {
    })

    it('visit landing page', () => {
        const landingPage = new landing_page()
        landingPage.visit_landing_page();
    })


    it('click Sign In button', () => {
        const page = new landing_page()
        page.click_sign_in_button();
    })


    it('fill in email field on login page', () => {
        const page = new sign_in_page()
        page.fill_email()
    })

    it('fill in password field on login page', () => {
        const page = new sign_in_page()
        page.fill_password()
    })

    it('click Sign In button', () => {
        const page = new sign_in_page()
        page.click_sign_in_button()
    })

})