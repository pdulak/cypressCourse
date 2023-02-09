import Httpstat from "../page-objects/httpstat";

describe('Async tests', () => {
    const httpstat = new Httpstat();

    it('should check status code', async function(){
        const status = await httpstat.checkStatusCode(200);
        expect(status).to.equal(200);
    });

})