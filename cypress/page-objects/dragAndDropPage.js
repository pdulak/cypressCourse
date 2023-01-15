const colA = '#column-a';
const colB = '#column-b';
const columnsHeadersAll = '.columns header';

class DragAndDropPage {
    dragToTheSamePlace() {
        const dataTransfer = new DataTransfer();

        cy.get(colA).trigger('dragstart', {
            dataTransfer
        });

        cy.get(colA).trigger('drop', {
            dataTransfer
        })

        cy.get(columnsHeadersAll).first().should('contain.text', 'A');
    }

    dragToTheOtherColumn() {
        const dataTransfer = new DataTransfer();

        cy.get(colA).trigger('dragstart', {
            dataTransfer
        });

        cy.get(colB).trigger('drop', {
            dataTransfer
        })

        cy.get(columnsHeadersAll).first().should('contain.text', 'B');
    }
}

export default DragAndDropPage;