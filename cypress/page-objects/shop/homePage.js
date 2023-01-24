import Urls from "./urls";

const myAccountLink = "#menu-item-100 a";
const newProductArea = "div[data-block-name='woocommerce/product-new'";
const checkCartFromProductLevel = "a.added_to_cart.wc-forward";
const addToCartLocatorBase = "a[data-product_id='[PRODUCT_ID]']";
export const products = {
    hoodieWithZipper : {
        name: "Hoodie with Zipper",
        id: 51,
    },
    sunglasses : {
        name: "Sunglasses",
        id: 49
    },
    polo : {
        name: "Polo",
        id: 53
    }
}

class HomePage {

    clickMyAccount() {
        cy.get(myAccountLink).click();
    }

    addProductToCart(product){
        cy.get(newProductArea).within(()=>{
            cy.get(addToCartLocatorBase.replace("[PRODUCT_ID]", product.id)).click();
        });
    }

    addHoodieToCart() {
        this.addProductToCart(products.hoodieWithZipper);
    }

    clickGoToCartFromProductButton() {
        cy.get(newProductArea).within(()=> {
            cy.get(checkCartFromProductLevel).click();
        });
    }

    visit() {
        const urls = new Urls;
        urls.visitHomePage();
    }

}

export default HomePage;