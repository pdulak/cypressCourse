const figure = '#hovers-content .figure img';
const figcaption = '#hovers-content .figcaption';

class HoversPage {
    hoverOverElement() {
        // cy.get(figure).first().trigger('mouseover');
        cy.get(figcaption).first().should('be.hidden').invoke('show').should('be.visible');
    }

}

export default HoversPage;