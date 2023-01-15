const iframe = 'iframe';
const button1 = '#simpleButton1';
const button2 = '#simpleButton2';
const resultArea = '#whichButtonIsClickedMessage';

class IframePage {
    pullIframeContents() {
        return cy.get(iframe)
            .its('0.contentDocument.body')
            .then(cy.wrap);
    }

    clickFirstButton() {
        let iframeTest = this.pullIframeContents();

        iframeTest.find(button1).click();

        // update contents of iframe to retrieve proper values from result area
        iframeTest = this.pullIframeContents();

        iframeTest.find(resultArea).should('have.text', 'Button 1 was clicked!');
    }

    clickSecondButton() {
        let iframeTest = this.pullIframeContents();

        iframeTest.find(button2).click();

        // update contents of iframe to retrieve proper values from result area
        iframeTest = this.pullIframeContents();

        iframeTest.find(resultArea).should('have.text', 'Button 2 was clicked!');
    }
}

export default IframePage;