describe('My First Test', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(true)
    })
  })

describe('My Second Test', function () {
    it('Goes to Adventures page and clicks filter by region/location to check for responses', function() {
        cy.visit('http://localhost:3000/adventures')
        cy.get('.App > :nth-child(2) > :nth-child(2)').click()
        cy.get('select').select('Alaska')
        cy.get(':nth-child(3) > button').click()
        cy.contains('Campbell Tract')
        cy.get(':nth-child(4) > button').click()
        cy.contains('Desert Classic')
        // cy.get('.burger > svg').click()
        // cy.get(':nth-child(3) > .Links').click()
        // cy.get(':nth-child(3) > .Links').click()
        // cy.get('.logs > :nth-child(3) > a').click({ force: true })
        // cy.url().should('include', 'http://localhost:3000/register')
        // cy.get('.login-or-register > :nth-child(3) > :nth-child(1)').type('drew');
        // cy.get('[type="password"]').type('d');
        // cy.get('[type="sumbit"]').click()
        // cy.get('')
        
    })
})

