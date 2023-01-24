const url = 'https://jsonplaceholder.typicode.com/';

describe('jsonplaceholder tests', () => {
    it('should connect to jsp and update post', function() {
        cy.request(`${url}posts/1`).then((response) => {
            const result = response.body;
            expect(result.title).to.contain('sunt aut facere');

            result.body = 'new post body';

            cy.request({
                method: 'put',
                url: `${url}posts/1`,
                body: JSON.stringify(result),
                headers: { 'Content-type': 'application/json; charset=UTF-8' }
            }).then((response) => {
                const result = response.body;
                expect(result.body).to.contain('new post body');
            });
        })
    })

    it('should connect to jsp and delete post', function() {
        cy.request(`${url}posts/2`).then((response) => {
            const result = response.body;
            expect(result.title).to.contain('qui est esse');

            cy.request({
                method: 'delete',
                url: `${url}posts/2`,
            }).then((response) => {
                expect(response.status).to.equal(200);

                cy.request(`${url}posts`).then((response) => {
                    const posts = response.body;
                    expect(posts.length).to.gt(0);

                    const filteredPosts = posts.filter((post) => {
                        return post.id === 2;
                    })

                    // this will NOT pass, because jsonplaceholder is NOT really removing posts
                    expect(filteredPosts.length).to.eq(0);
                })
            });
        })
    })
})