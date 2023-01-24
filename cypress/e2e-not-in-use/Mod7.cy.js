import InputPage from "../page-objects/inputPage";
import CheckboxPage from "../page-objects/checkboxPage";
import HomePage from "../page-objects/homePage";
import DropdownListPage from "../page-objects/dropdownListPage";
import HoversPage from "../page-objects/hoversPage";
describe('Mod 7 tests', () => {
    const homePage = new HomePage();

    beforeEach(() => {
        homePage.visitPage();
    });

    it('should work properly on inputs', () => {
        homePage.clickInputsTab();

        const inputPage = new InputPage();
        inputPage.typeNumberIntoField();
        inputPage.typeLettersIntoField();
    })

    it('should work properly on checkboxes', () => {
        homePage.clickCheckboxTab();

        const checkboxPage = new CheckboxPage();
        checkboxPage.checkFirstCheckbox();
        checkboxPage.uncheckLastCheckbox();
    })

    it('should work properly on dropdowns', () => {
        homePage.clickDropdownListTab();

        const dropdownListPage = new DropdownListPage();
        dropdownListPage.chooseFirstOption();
        dropdownListPage.chooseSecondOption();
    })

    it('shold work properly on hovers', () => {
        homePage.clickHoversTab();

        const hoversPage = new HoversPage();
        hoversPage.hoverOverElement();
    })

})