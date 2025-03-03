

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
require('cypress-xpath');

describe('web responsive test', function () {


    it('Desktop view - amazon', function () {
        cy.visit("https://www.amazon.in/")
        cy.title().should('eq', 'Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
        cy.url().should('include', 'amazon')
        cy.get("#twotabsearchtextbox").should('be.visible').type('shoes')
        cy.get("#nav-search-submit-button").should('be.visible').click({ force: true })
    })


    it('ipad Mini View Test', function () {
        cy.viewport('ipad-mini','landscape')
        cy.visit("https://www.amazon.in/")
        cy.title().should('eq', 'Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
        cy.url().should('include', 'amazon')
        cy.get('#twotabsearchtextbox').scrollIntoView().should('be.visible')
        cy.get("#twotabsearchtextbox").should('be.visible').type('shoes')
        cy.get("#nav-search-submit-button").should('be.visible').click({ force: true })
    })


    it('ipad- swiggy site', function () {
        cy.viewport(768, 1024)
        cy.visit('https://www.swiggy.com/')
        cy.title().should('eq', "Order Food & Groceries. Discover the best restaurants. Swiggy it!")
        cy.url().should('include', 'swiggy')
        cy.get('#location').type('madurai')
        cy.xpath("//span[normalize-space()='madurai, Tamil Nadu, India']").click({ force: true })
    })

    it('iphone-x view -swiggy site', function () {
        cy.viewport(375, 812)
        cy.visit('https://www.swiggy.com/')
        cy.title().should('eq', "Order Food & Groceries. Discover the best restaurants. Swiggy it!")
        cy.url().should('include', 'swiggy')
        cy.get('#location').type('madurai')
        cy.xpath("//span[normalize-space()='madurai, Tamil Nadu, India']").click({ force: true })
 })


    it('samsung s10 view -test', function () {
        cy.viewport(1280, 800)
        cy.visit('https://www.swiggy.com/')
        cy.title().should('eq', "Order Food & Groceries. Discover the best restaurants. Swiggy it!")
        cy.url().should('include', 'swiggy')
        cy.get('#location').type('Madurai')
        cy.xpath("//span[normalize-space()='madurai, Tamil Nadu, India']").click({ force: true })
    })
})
