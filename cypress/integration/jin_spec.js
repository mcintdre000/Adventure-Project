describe('Testing to see if cypress connects', function () {
    it('returns true', function() {
        expect(true).to.equal(true)
    })
})

describe('Logs user in', function () {
    it('Goes to settings page and inputs data and clicks a button', function() {
        cy.visit('http://localhost:3000/adventures')
        cy.get('#pop').click()
        cy.get('.login-or-register > :nth-child(3) > :nth-child(1)').type('test6');
        cy.get('[type="password"]').type('test6');
        cy.get('[type="sumbit"]').click()
        
        
    })
})
// describe('My Second Test', function () {
//     it('Goes to settings page and inputs data and clicks a button', function() {
//         cy.visit('http://localhost:3000/settings')
//         cy.get('input.setting-bottom-left-onlineID').type('Online ID')
//         cy.get('button.setting-bottom-left-button').click()
//     })

//     describe('My Third Test', () => {
//         it('Accepts input', () => {
//             const text = 'Hello There';
//             cy.visit('http://localhost:3000/settings');
//             cy.get('.setting-bottom-left-onlineID').type( text ).should('have.value', text)

//         })
//     })

//     describe('My Fourth Test', () => {
//         it('Accepts input and clicks save', () => {
//             cy.visit('http://localhost:3000/settings');
//             cy.get('.setting-bottom-left-onlineID').type('Hello Hello');
//             cy.get('.setting-bottom-left-button').click();
//         })
//     })

//     describe('My Fourth Test', () => {
//         it('Logs user in', () => {
//             cy.visit('http://localhost:3000/auth');
//             cy.get(':nth-child(2) > input').type('jin@gmail.com');
//             cy.get(':nth-child(3) > input').type('Abcd1234');
//             cy.get(':nth-child(4) > button').click()
//             cy.url().should('include', 'http://localhost:3000/forum')
//             cy.visit('http://localhost:3000/settings');
//             cy.get('.setting-bottom-left-onlineID').type('Hello Hello');
//             cy.get('.setting-bottom-left-button').click();
//         })
//     })
// })