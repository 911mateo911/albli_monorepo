describe('albli-ui: MainHero component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mainhero--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to MainHero!');
    });
});
