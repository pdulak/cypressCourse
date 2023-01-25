import HomePage from "../page-objects/shop/homePage";
import CartPage from "../page-objects/shop/cartPage";
import OrderPage from "../page-objects/shop/orderPage";

describe('Mod 8 Cart tests', () => {
    const homePage = new HomePage();
    const cartPage = new CartPage();
    const orderPage = new OrderPage();

    //
    // had to use 'beforeEach' instead of 'before' because 'this' context is cleaned between tests and I don't want to use
    // deep Mocha context (storing in 'Cypress' object)
    //
    beforeEach(function(){
       cy.fixture('shopProducts.json').as('productData');
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