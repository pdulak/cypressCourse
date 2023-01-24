const productName = ".product-name";
const removeIcon = "a.remove[data-product_id='[PRODUCT_ID']";
const cartEmptyInfo = "p.cart-empty.woocommerce-info";
const checkoutButton = ".wc-proceed-to-checkout a";

class CartPage {

    checkIfProductInCart(product){
        cy.get(productName).contains(product.name).should('exist');
    }

    removeProductFromCart(product){
        cy.get(removeIcon.replace("[PRODUCT_ID", product.id)).click();
    }

    checkIfCartEmpty() {
        cy.get(cartEmptyInfo).should('exist');
    }

    clickCheckoutButton() {
        cy.get(checkoutButton).click();
    }

}

export default CartPage;