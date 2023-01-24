import Urls from "./urls";

const myAccountLink = "#menu-item-100 a";

class HomePage {

    clickMyAccount() {
        cy.get(myAccountLink).click();
    }

    visit() {
        const urls = new Urls;
        urls.visitHomePage();
    }

}

export default HomePage;