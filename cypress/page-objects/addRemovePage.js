const addButton = '#addremoveelements-content button';
const elementsAreaButtons = '#elements button';

class AddRemovePage {
    checkIfEmptyArea() {
        cy.get(elementsAreaButtons).should('not.exist');
    }

    addThreeButtons() {
        //w tym miejscu zamiast 3x robic click() to zrób pętle FOR, która będzie ilość wywołań brała z parametru wywołania :)
        cy.get(addButton).click().click().click();
        cy.get(elementsAreaButtons).should('have.length', 3);
    }

    removeAddedButtons() {
        cy.get(elementsAreaButtons).each((e) => {
            cy.wrap(e).click();
        })
    }

    addAndRemoveButtons() {
        this.removeAddedButtons();
        cy.get(addButton).click().click().click();
        cy.get(elementsAreaButtons).first().click();
        cy.get(elementsAreaButtons).should('have.length', 2);
        cy.get(elementsAreaButtons).first().click();
        cy.get(elementsAreaButtons).should('have.length', 1);
        cy.get(elementsAreaButtons).first().click();
        cy.get(elementsAreaButtons).should('not.exist');
    }
}

export default AddRemovePage;
