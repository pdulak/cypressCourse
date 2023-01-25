import MyAccountPage from "../page-objects/shop/myAccountPage";
import HomePage from "../page-objects/shop/homePage";
import { faker } from "@faker-js/faker";

describe('Mod 8 Login tests', () => {
    const homePage = new HomePage();
    const myAccountPage = new MyAccountPage();

    //
    // had to use 'beforeEach' instead of 'before' because 'this' context is cleaned between tests and I don't want to use
    // deep Mocha context (storing in 'Cypress' object)
    //
    beforeEach(function(){
        cy.fixture('shopUsers.json').as('userData');
    });

    it('should login successfully using proper credentials', function(){
        homePage.visit();
        homePage.clickMyAccount();
        myAccountPage.fillUsernameField(this.userData.correct.email);
        myAccountPage.fillPasswordField(this.userData.correct.password);
        myAccountPage.clickLoginButton();
        myAccountPage.checkMyAccountNavVisibility();
    });

    it('should fail login when using wrong credentials', function(){
        myAccountPage.visitPage();
        myAccountPage.fillUsernameField(faker.internet.email());
        myAccountPage.fillPasswordField(faker.internet.password());
        myAccountPage.clickLoginButton();
        myAccountPage.checkLoginErrorVisibility();
    });

})