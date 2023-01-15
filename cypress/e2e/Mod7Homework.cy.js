import HomePage from "../page-objects/homePage";
import DatepickerPage from "../page-objects/datepickerPage";

describe('Module 7 - Homework',() => {
    const homePage = new HomePage();

    beforeEach(() => {
        homePage.visitPage();
    });

    it('should work properly on datepicker', () => {
        homePage.clickDatepickerTab();

        const datepickerPage = new DatepickerPage();
        datepickerPage.checkProperDate();
        datepickerPage.checkInvalidDate();
    });
})