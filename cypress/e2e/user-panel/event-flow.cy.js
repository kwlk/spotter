context('Event flow', () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/user-panel");
  })

  describe('Form elements', () => {
    it('add - edit - delete', () => {
      cy.get('input[id="event-title"]').clear({force:true}).type("Title of event 1");
      cy.get('input[id="event-address"]').clear({force:true}).type("Address");
      cy.get('input[id="event-date"]').type("2023-02-15", {force:true});
      cy.get('textarea[id="event-description"]').clear({force:true}).type("Description");
      cy.get('button').contains('Add').click({force:true});

      cy.get('table tbody').should('contain.text', "Title of event 1");

      cy.get('table tbody tr').contains("Title of event 1").last().click({force: true});

      cy.get('input[id="event-title"]').clear({force:true}).type("Title of event 2");
      cy.get('button').contains('Save').click({force:true});

      cy.get('table tbody').should('contain.text', "Title of event 2");

      cy.get('table tbody tr').contains("Title of event 2").siblings().find('button').click({force:true});

      cy.get('table tbody').should('not.contain.text', "Title of event 2");
    })
  })
})
