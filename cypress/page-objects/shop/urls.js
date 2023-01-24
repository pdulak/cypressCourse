const homepageUrl = '/';
const myAccountUrl='/?page_id=9';
class Urls {
    visitHomePage() {
        cy.visit(homepageUrl);
    }

    visitMyAccountPage() {
        cy.visit(myAccountUrl);
    }
}

export default Urls;