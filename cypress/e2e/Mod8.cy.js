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

    //
    // had to use 'beforeEach' instead of 'before' because 'this' context is cleaned between tests and I don't want to use
    // deep Mocha context (storing in 'Cypress' object)
    //
    beforeEach(function(){
       cy.fixture('shopUsers.json').as('userData');
       cy.fixture('shopProducts.json').as('productData');
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

    it('Should go successfully through shopping cart add and remove actions', function(){
        const productToTest = this.productData.hoodieWithZipper;

        homePage.visit();
        homePage.addProductToCart(productToTest);
        homePage.clickGoToCartFromProductButton();
        cartPage.checkIfProductInCart(productToTest);
        cartPage.removeProductFromCart(productToTest);
        cartPage.checkIfCartEmpty();
    });

    it('Should process order successfully', function(){
        const productToTest = this.productData.hoodieWithZipper;

        homePage.visit();
        homePage.addProductToCart(productToTest);
        homePage.clickGoToCartFromProductButton();
        cartPage.checkIfProductInCart(productToTest);
        cartPage.clickCheckoutButton();
        orderPage.fillAllRequiredFields();
        orderPage.clickFinishOrder();
        orderPage.checkOrderFinished();
        orderPage.checkIfProductOnOrderSummary(productToTest);
    })

})