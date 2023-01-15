import HomePage from "../page-objects/homePage";
import DatepickerPage from "../page-objects/datepickerPage";
import BasicauthPage from "../page-objects/basicauthPage";
import FormPage from "../page-objects/formPage";
import KeypressesPage from "../page-objects/keypressesPage";

describe('Module 7 - Homework',() => {
    const homePage = new HomePage();

    beforeEach(() => {
        homePage.visitPage();
    });

    it('should work properly on datepicker', () => {
        homePage.clickDatepickerTab();

        const datepickerPage = new DatepickerPage();
        datepickerPage.checkProperDate();
        datepickerPage.checkInvalidDate();
    });

    it('should disallow login for wrong user and allow for proper user', () => {
        homePage.clickBasicauthTab();

        const basicAuthPage = new BasicauthPage();
        basicAuthPage.checkEmptyForm();
        basicAuthPage.checkInvalidCredentials();
        basicAuthPage.checkValidCredentials();
    })

    it('should disallow empty fields in form and allow filled fields', () => {
      homePage.clickFormTab();

      const formPage = new FormPage();
      formPage.checkEmptyFirstname();
      formPage.checkEmptyLastname();
      formPage.checkFilledForm();
    })

    it('should handle keypress input properly', () => {
        homePage.clickKeypressesTab();

        const keypressPage = new KeypressesPage();
        keypressPage.checkEmptyField();
        keypressPage.checkSingleLetter();
        keypressPage.checkMultipleLetters();
    })
})