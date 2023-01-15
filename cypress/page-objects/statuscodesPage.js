const links = '#statuscodes-content a';

class StatuscodesPage {
    checkStatusCodesLinks() {
        cy.get(links).each((e) => {
            const url = e.attr('href');
            const expectedStatus = parseInt(url.split("/").pop());
            cy.request({
                url: url,
                failOnStatusCode: false
            }).then((response) => {
                if (expectedStatus === 305) {
                    // in fact it returns 200 and redirects
                    expect(response.status).to.equal(200);
                    expect(response.redirects.length).to.equal(1);
                } else {
                    expect(response.status).to.equal(expectedStatus);
                }
            })
        });
    }
}

export default StatuscodesPage;