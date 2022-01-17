describe('site', () => {
  beforeEach(() => {
    // navigate to an example article
    cy.visit('http://localhost:3000/post')
  });

  it('should render the title of the article', () => {
    cy.get('h1').contains('Posts')
    cy.get('h1').should('contain', 'Posts');
  });

});