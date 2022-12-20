describe('Module 5 homework scenario', () => {
    it('visits Cypress course page and saves screenshot', function(){
        cy.visit('https://fabrykatestow.pl');
        cy.get('span').contains('POKAŻ CZEGO SIĘ NAUCZĘ').first().click();
        cy.get('section[data-id=2d7d28f4]').scrollIntoView();
        // screenshot of the whole page
        cy.screenshot('whole-page');
        // screenshot of the element
        cy.get('section[data-id=2d7d28f4]').screenshot('kto-nauczy-screenshot');
    })
})