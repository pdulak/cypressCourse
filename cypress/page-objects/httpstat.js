class Httpstat {

    async checkStatusCode(code) {
        const requestUrl = "http://httpstat.us/" + code;
        const response = await cy.request({  url: requestUrl });
        return response.status;
    };

}

export default Httpstat;