const dropdownList = '#dropdown';

class DropdownListPage {
    chooseFirstOption(){
        cy.get(dropdownList).select('Option 1').should('have.value', '1');
    }

    chooseSecondOption(){
        cy.get(dropdownList).select('Option 2').should('have.value', '2');
    }
}

export default DropdownListPage;