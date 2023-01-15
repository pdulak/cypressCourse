const firstName = '#fname';
const firstNameInvalid = '#fname:invalid';
const lastName = '#lname';
const lastNameInvalid = '#lname:invalid';
const submitButton = '#formSubmitButton';

class FormPage {
    checkEmptyFirstname() {
        cy.get(firstName).clear();
        cy.get(submitButton).click();
        cy.get(firstNameInvalid).should('exist');
    }

    checkEmptyLastname() {
        cy.get(lastName).clear();
        cy.get(submitButton).click();
        cy.get(lastNameInvalid).should('exist');
    }

    checkFilledForm() {
        cy.get(firstName).clear().type('First');
        cy.get(lastName).clear().type('Last');
        cy.get(submitButton).click();
        cy.on('window:alert', (alertMessage) => {
            expect(alertMessage).to.contains('success');
        })
    }
}

export default FormPage;