import Urls from "./urls";

const usernameField = "#username";
const passwordField = "#password";
const loginButton = "button[name=login]";
const myAccountNavMenu = ".woocommerce-MyAccount-navigation";
const loginErrorMessage = "ul.woocommerce-error[role=alert]";

class MyAccountPage {

    fillUsernameField(value) {
        cy.get(usernameField).type(value);
    }

    fillPasswordField(value) {
        cy.get(passwordField).type(value);
    }

    clickLoginButton() {
        cy.get(loginButton).click();
    }

    checkMyAccountNavVisibility() {
        cy.get(myAccountNavMenu).should('be.visible');
    }

    checkLoginErrorVisibility() {
        cy.get(loginErrorMessage).should('be.visible');
    }

    visitPage() {
        const urls = new Urls();
        urls.visitMyAccountPage();
    }

}

export default MyAccountPage;