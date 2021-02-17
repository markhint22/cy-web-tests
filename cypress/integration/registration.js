 import {landing_page, sign_in_page} from "../support/pages";

context('Registration 5 Tests',() => {
    beforeEach(() => {
    })

    it('visit landing page', () => {
        const landingPage = new landing_page()
        landingPage.visit_landing_page();
    })


})