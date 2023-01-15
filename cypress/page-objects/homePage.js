import Urls from "./urls";

const inputsHeader = '#inputs-header';
const checkboxHeader = '#checkbox-header';
const dropdownListHeader = '#dropdownlist-header';
const hoversHeader = '#hovers-header';
const datepickerHeader = '#datepicker-header';
const basicAuthHeader = '#basicauth-header';
const formHeader = '#form-header';
const keyPressesHeader = '#keypresses-header';
const ddHeader = '#draganddrop-header';
const addRemoveHeader = '#addremoveelements-header';
const statusCodesHeader = '#statuscodes-header';
const iframeHeader = '#iframe-header';

class HomePage {

    clickInputsTab() {
        cy.get(inputsHeader).click();
    }

    clickCheckboxTab() {
        cy.get(checkboxHeader).click();
    }

    clickDropdownListTab() {
        cy.get(dropdownListHeader).click();
    }

    clickHoversTab() {
        cy.get(hoversHeader).click();
    }

    clickDatepickerTab() {
        cy.get(datepickerHeader).click();
    }

    clickBasicauthTab() {
        cy.get(basicAuthHeader).click();
    }

    clickFormTab() {
        cy.get(formHeader).click();
    }

    clickKeypressesTab() {
        cy.get(keyPressesHeader).click();
    }

    clickDragAndDropTab() {
        cy.get(ddHeader).click();
    }

    clickAddRemoveTab() {
        cy.get(addRemoveHeader).click();
    }

    clickStatuscodesTab() {
        cy.get(statusCodesHeader).click();
    }

    clickIframeTab() {
        cy.get(iframeHeader).click();
    }

    visitPage() {
        const url = new Urls();
        url.visitHomePage();
    }

}

export default HomePage;