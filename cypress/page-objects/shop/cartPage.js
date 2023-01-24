import { products } from "./homePage";

const productName = ".product-name";
const removeIcon = "a.remove[data-product_id='[PRODUCT_ID']";
const cartEmptyInfo = "p.cart-empty.woocommerce-info";
const checkoutButton = ".wc-proceed-to-checkout a";

class CartPage {

    checkIfProductInCart(product){
        cy.get(productName).contains(product.name).should('exist');
    }

    checkIfProductNotInCart(product){
        cy.get(productName).contains(product.name).should('not.exist');
    }

    checkIfHoodieInCart(){
        this.checkIfProductInCart(products.hoodieWithZipper);
    }

    checkIfHoodieNotInCart(){
        this.checkIfProductNotInCart(products.hoodieWithZipper);
    }

    removeProductFromCart(product){
        cy.get(removeIcon.replace("[PRODUCT_ID", product.id)).click();
    }

    removeHoodkieFromCart() {
        this.removeProductFromCart(products.hoodieWithZipper);
    }

    checkIfCartEmpty() {
        cy.get(cartEmptyInfo).should('exist');
    }

    clickCheckoutButton() {
        cy.get(checkoutButton).click();
    }

}

export default CartPage;