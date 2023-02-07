context('Actions', () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/user-panel");
  })

  describe('Form elements', () => {
    it('should contain appropriate title', () => {
      cy.get('h2').should('contain.text', "Add or Edit")
    })

    it('should contain a form', () => {
      let labels = cy.get('label');
      labels.should('contain.text', "Title")
        .and('contain.text', 'Address')
        .and('contain.text', 'Date')
        .and('contain.text', 'Description')
    })

    it('should contain form buttons', () => {
      let labels = cy.get('button');
      labels.should('contain.text', "Add")
        .and('contain.text', 'Cancel')
    })
  })

  describe('Table elements', () => {
    it('should contain appropriate table labels', () => {
      cy.get('table thead').find('th').should('contain.text', "Title")
        .and('contain.text', 'Description')
        .and('contain.text', 'Address')
        .and('contain.text', 'Date')
        .and('contain.text', 'Action')
    })

    it('should contain at least one event', () => {
      cy.get('table tbody tr').should('have.length.at.least', 1)
    })

    it('should contain form button', () => {
      cy.get('table tbody tr td').last().should('have.text', "Delete")
    })
  })
})
