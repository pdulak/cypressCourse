const datepicker = '#datepicker-content input';
const datepickerInvalid = datepicker + ':invalid';

class DatepickerPage {
    checkProperDate() {
        cy.get(datepicker).clear;
        cy.get(datepicker).type('2020-01-01').should('have.value', '2020-01-01');
        cy.get(datepickerInvalid).should('not.exist');
    }

    checkInvalidDate() {
        cy.get(datepicker).clear;
        cy.get(datepicker).type('2022-11-21');
        cy.get(datepickerInvalid).should('exist');
    }
}

export default DatepickerPage;