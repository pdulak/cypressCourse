import InputPage from "../page-objects/inputPage";
import CheckboxPage from "../page-objects/checkboxPage";
import HomePage from "../page-objects/homePage";
describe('Mod 7 tests', () => {

    beforeEach(() => {
        const homePage = new HomePage();
        homePage.visitPage();
    });

    it('should work properly on inputs', () => {
        const homePage = new HomePage();
        homePage.clickInputsTab();

        const inputPage = new InputPage();
        inputPage.typeNumberIntoField();
        inputPage.typeLettersIntoField();
    })

    it('should work properly on checkboxes', () => {
        const homePage = new HomePage();
        homePage.clickCheckboxTab();

        const checkboxPage = new CheckboxPage();
        checkboxPage.checkFirstCheckbox();
        checkboxPage.uncheckLastCheckbox();
    })

})