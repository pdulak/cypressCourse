const usernameField = '#ba_username';
const passField = '#ba_password';
const formSubmitButton = '#basicauth-content button';
const resultArea = '#loginFormMessage';
const loginResultArea = '#loggedInMessage';

class BasicAuthPage {
    checkEmptyForm() {
        cy.get(usernameField).clear();
        cy.get(passField).clear();
        cy.get(formSubmitButton).click();
        cy.get(resultArea).should('contain.text', 'Invalid credentials');
    }

    checkInvalidCredentials() {
        cy.get(usernameField).clear().type('dummy');
        cy.get(passField).clear().type('credentials');
        cy.get(formSubmitButton).click();
        cy.get(resultArea).should('contain.text', 'Invalid credentials');
    }

    checkValidCredentials() {
        cy.get(usernameField).clear().type('admin');
        cy.get(passField).clear().type('admin');
        cy.get(formSubmitButton).click();
        cy.get(loginResultArea).should('contain.text', 'You are logged in!');
    }

}

export default BasicAuthPage;