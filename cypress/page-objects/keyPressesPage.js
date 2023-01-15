const inputField = '#target';
const resultArea = '#keyPressResult';

class KeyPressesPage {
    checkEmptyField() {
        cy.get(inputField).clear();
        cy.get(resultArea).should('contain.text', 'You entered: DELETE');
    }

    checkSingleLetter() {
        cy.get(inputField).clear().type('A');
        cy.get(resultArea).should('contain.text', 'You entered: A');
    }

    checkMultipleLetters() {
        cy.get(inputField).clear().type('ABC');
        cy.get(resultArea).should('contain.text', 'You entered: C');
    }
}

export default KeyPressesPage;