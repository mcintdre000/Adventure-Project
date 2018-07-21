describe('My Second Test', function () {
    it('Goes to settings page and inputs data and clicks a button', function() {
        cy.visit('http://localhost:3000/adventures')
       
        
        
    })
})

describe('Adams First Test', function () {
    it('Can Login in to profile page', function() {
        cy.visit('http://localhost:3000/adventures')
        cy.get('.burger > svg').click()
        cy.get(':nth-child(3) > .Links').click()
        cy.get('.login > :nth-child(1)').click()
        cy.get('.login > :nth-child(1)').type('Dreier14')
        cy.get('[type="password"]').type('ajb357');
        cy.get('[type="sumbit"]').click()
        cy.get('.buttons > a').click()
        cy.get('[placeholder="Adam"]').type('Swag')
        cy.get('button.inputfile').click()
    })
})