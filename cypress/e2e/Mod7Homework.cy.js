import HomePage from "../page-objects/homePage";
import DatepickerPage from "../page-objects/datepickerPage";
import BasicauthPage from "../page-objects/basicauthPage";

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
})