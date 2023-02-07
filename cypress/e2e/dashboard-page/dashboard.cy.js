

describe('dashboard spec', () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/events");
  })

  it('Title is displayed correctly', () => {
    cy.get('h1').should('contain.text', "Map of Events")
  })

  it('has a positive amount of events', () => {
    let eventCards = cy.get('.card-body');
    eventCards.should('have.length.at.least', 1);
  })

  describe('After clicking on an event', () => {
    let eventCard;
    let eventDetails;

    beforeEach(() => {
      eventCard = cy.get('.card-body').first();
      eventCard.click({force:true});
      eventDetails = cy.get('.event-details').scrollIntoView();

    })

    it('should see correct details descriptions', () => {
      eventDetails.should('be.visible');
      eventDetails.should('contain.text', 'Description')
        .and('contain.text', 'Address')
        .and('contain.text', 'City')
        .and('contain.text', 'Date')

    })

    it('should see correct details', () => {      let title = eventCard.find('p');
      let address = eventCard.find('p').select(1);
      let date = eventCard.find('.text-muted');

      eventDetails.should('be.visible');
      eventDetails.should('contain.text', title)
        .and('contain.text', address)
        .and('contain.text', date);

    })
  })
})
