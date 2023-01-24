import MyAccountPage from "../page-objects/shop/myAccountPage";
import HomePage from "../page-objects/shop/homePage";
import CartPage from "../page-objects/shop/cartPage";
import { faker } from "@faker-js/faker";

describe('Mod 8 tests', () => {
    const homePage = new HomePage();
    const myAccountPage = new MyAccountPage();
    const cartPage = new CartPage();

    before(function(){
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

    xit('should fail login when using wrong credentials', function(){
        myAccountPage.visitPage();
        myAccountPage.fillUsernameField(faker.internet.email());
        myAccountPage.fillPasswordField(faker.internet.password());
        myAccountPage.clickLoginButton();
        myAccountPage.checkLoginErrorVisibility();
    });

    it('Should test shopping cart process', function(){
        homePage.visit();
        homePage.addHoodieToCart();
        homePage.clickGoToCartFromProductButton();
        cartPage.checkIfHoodieInCart();
        cartPage.removeHoodkieFromCart();
        cartPage.checkIfCartEmpty();
    });

})