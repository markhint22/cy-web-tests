
export class HomePage{
    static SIGN_IN_BUTTON = "//button[contains(text(),'Sign in')]";
}

export class SignInPage {
    static EMAIL_INPUT = "//input[@id='username']";
    static PASSWORD_INPUT = "//input[@id='password']";
    static SIGN_IN_BUTTON = "//button[contains(text(),'Sign in')]";
}


export class SignUpSection {
    static ERROR_MSG = "//span[contains(text(),'An error occurred while trying to submit your information.')]";
    static FIRST_NAME_INPUT_v5 = "//*[@id='FIRST_NAME']";
    static FIRST_NAME_INPUT = "//*[@id='get-started-input-firstname']";
    static LAST_NAME_INPUT = "//*[@id='get-started-input-lastname']";
    static LAST_NAME_INPUT_v5 = "//*[@id='LAST_NAME']"
    static DOB_MONTH_INPUT = "//*[@id='get-started-input-month']";
    static DOB_MONTH_INPUT_v5 = "//*[@id='month_BIRTH_DATE']";
    static DOB_DAY_INPUT = "//*[@id='get-started-input-day']";
    static DOB_DAY_INPUT_v5 = "//*[@id='day_BIRTH_DATE']";
    static DOB_YEAR_INPUT = "//*[@id='get-started-input-year']";
    static DOB_YEAR_INPUT_v5 = "//*[@id='year_BIRTH_DATE']";
    static ZIPCODE_INPUT = "//*[@id='shipping-zip-code']";
    static ZIPCODE_INPUT_v5 = "//*[@id='ZIP']";
    static ZIPCODE_INPUT_SHIPPING_v5 = "//*[@id='zip']";
    static ZIPCODE_INPUT_UPSELL = "//*[@id='ZIP']";
    static EMAIL_INPUT = "//*[@id='get-started-input-email']";
    static EMAIL_INPUT_v5 = "//*[@id='EMAIL']";
    static PASSWORD_INPUT = "//*[@id='get-started-input-password']";
    static PASSWORD_INPUT_v5 = "//*[@id='PASSWORD']";
    static AGREEMENT_CHECKBOX = "//label[@for='get-started-terms-and-conditions']";
    static AGREEMENT_CHECKBOX_v5 = "//*[@id='TERMS_AND_CONDITIONS']";
    static UNDER_THIRTEEN_CHECKBOX_v5 = "//*[@id='REGISTERING_UNDER_13']";
    static CVS_AGREEMENT_CHECKBOX = "//input[@id='consent-input-cvs']";
    static SUBMIT_BUTTON = "//button[contains(text(),'Submit')]";
    static PROMO_CODE_BANNER_TEXT = "//*[@class='get-started-banner ng-scope']";
    static AGREEMENT_ERROR_TEXT = "//*[contains(text(),'Please accept the terms and conditions']";
    static PAGE_HEADER_TEXT = "//div[contains(text(),'Let's Start with the Basics')]";
    static CLIENT_CODE_SELECT = "//*[@id='coverage-input-promocode']";
    static PARENT_EMAIL_ADDRESS_INPUT = "//*[@id='get-started-input-parent-email']";
    static PARENT_EMAIL_ADDRESS_INPUT_V5 = "//*[@id='GUARDIAN_EMAIL']";
    static PARENT_FIRST_NAME_INPUT = "//*[@id='get-started-input-parent-firstname']";
    static PARENT_FIRST_NAME_INPUT_V5 = "//*[@id='GUARDIAN_FIRST_NAME']";
    static PRIVO_CONSENT_COMPLETED_BUTTON = "//button[contains(text(),'completed the PRIVO consent process')]";
    static VALIDATION_INFO_BOX = "//div[@class='info-box-title']";
    static SUPPORTED_REGION_CHECKBOX_V5 = "//*[@id='SUPPORTED_REGION']";
}
