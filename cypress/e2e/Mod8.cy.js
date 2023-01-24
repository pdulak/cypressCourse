import MyAccountPage from "../page-objects/shop/myAccountPage";
import HomePage from "../page-objects/shop/homePage";
import CartPage from "../page-objects/shop/cartPage";
import OrderPage from "../page-objects/shop/orderPage";
import { faker } from "@faker-js/faker";

describe('Mod 8 tests', () => {
    const homePage = new HomePage();
    const myAccountPage = new MyAccountPage();
    const cartPage = new CartPage();
    const orderPage = new OrderPage();

    before(function(){
       cy.fixture('shopUsers.json').as('userData');
    });

    xit('should login successfully using proper credentials', function(){
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

    xit('Should go successfully through shopping cart add and remove actions', function(){
        homePage.visit();
        homePage.addHoodieToCart();
        homePage.clickGoToCartFromProductButton();
        cartPage.checkIfHoodieInCart();
        cartPage.removeHoodkieFromCart();
        cartPage.checkIfCartEmpty();
    });

    it('Should process order successfully', function(){
        homePage.visit();
        homePage.addHoodieToCart();
        homePage.clickGoToCartFromProductButton();
        cartPage.checkIfHoodieInCart();
        cartPage.clickCheckoutButton();
        orderPage.fillAllRequiredFields();
        orderPage.clickFinishOrder();
        orderPage.checkOrderFinished();
    })

})