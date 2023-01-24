describe('First scenario', () => {
    it('visits home page and clicks top menu button', function(){
        cy.visit('https://fabrykatestow.pl');
        cy.get('#menu-item-923 a').click();
        cy.url().should('eq', 'https://fabrykatestow.pl/ciekawostki/');
    })
})