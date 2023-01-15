import HomePage from "../page-objects/homePage";
import DatepickerPage from "../page-objects/datepickerPage";
import BasicAuthPage from "../page-objects/basicAuthPage";
import FormPage from "../page-objects/formPage";
import KeyPressesPage from "../page-objects/keyPressesPage";
import DragAndDropPage from "../page-objects/dragAndDropPage";
import AddRemovePage from "../page-objects/addRemovePage";
import StatusCodesPage from "../page-objects/statusCodesPage";
import IframePage from "../page-objects/iframePage";

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

    xit('should disallow login for wrong user and allow for proper user', () => {
        homePage.clickBasicauthTab();

        const basicAuthPage = new BasicAuthPage();
        basicAuthPage.checkEmptyForm();
        basicAuthPage.checkInvalidCredentials();
        basicAuthPage.checkValidCredentials();
    })

    xit('should disallow empty fields in form and allow filled fields', () => {
      homePage.clickFormTab();

      const formPage = new FormPage();
      formPage.checkEmptyFirstname();
      formPage.checkEmptyLastname();
      formPage.checkFilledForm();
    })

    xit('should handle keypress input properly', () => {
        homePage.clickKeypressesTab();

        const keypressPage = new KeyPressesPage();
        keypressPage.checkEmptyField();
        keypressPage.checkSingleLetter();
        keypressPage.checkMultipleLetters();
    })

    xit('should handle drag and drop', () => {
        homePage.clickDragAndDropTab();

        const ddPage = new DragAndDropPage();
        ddPage.dragToTheSamePlace();
        ddPage.dragToTheOtherColumn();
    })

    xit('should handle "add button" area properly', () => {
        homePage.clickAddRemoveTab();

        const addRemovePage = new AddRemovePage();
        addRemovePage.checkIfEmptyArea();
        addRemovePage.addThreeButtons();
        addRemovePage.addAndRemoveButtons();
    })

    it('should request and get propper status codes', () => {
        homePage.clickStatuscodesTab();

        const statuscodesPage = new StatusCodesPage();
        statuscodesPage.checkStatusCodesLinks();
    })

    it('should handle buttons in iFrame', () => {
       homePage.clickIframeTab();

       const iframePage = new IframePage();
       iframePage.clickFirstButton();
       iframePage.clickSecondButton();
    });
})