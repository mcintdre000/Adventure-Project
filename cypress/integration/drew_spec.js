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
    })
})

describe('My Third Test', function () {
    it('Logs user in, goes to Adventures page, clicks an adventure, checks an adventure as a goal, and goes to Profile page to view goals section', function() {
        cy.visit('http://localhost:3000/adventures')
        cy.get('.burger > svg').click()
        cy.get(':nth-child(3) > .Links').click()
        cy.get('.login-or-register > :nth-child(3) > :nth-child(1)').type('drew1')
        cy.get('.logger').type('drew1')
        cy.get('[type="sumbit"]').click()
        cy.get('.burger > svg').click()
        cy.get(':nth-child(3) > .Links').click()
        cy.get('[href="/adventure/Slickhorn Canyon"] > .photo').click()
        cy.get(':nth-child(1) > input').check()
        cy.get('.burger > svg').click()
        cy.get(':nth-child(2) > .Links').click()
        cy.contains('Slickhorn Canyon')
    })
})

