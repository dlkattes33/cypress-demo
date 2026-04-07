describe('Google', () => {
  it('loads the homepage', () => {
    cy.visit('https://google.com')
    cy.get('input[name="q"]').should('be.visible')
  })
})