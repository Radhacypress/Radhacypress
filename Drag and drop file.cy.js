Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('DragAndDrop', function(){
    it('DemoDragTesting - Drag image React', function(){
        cy.visit("https://demo.automationtesting.in/Static.html");
        cy.url().should('include','automationtesting');
        cy.get('#react').should('be.visible');
        cy.get('#react').drag('#droparea').then((success) => {
            assert.isTrue(success);
        });
    });

    it('DemoDragTesting - Drag image JavaScript', function(){
        cy.visit("https://demo.automationtesting.in/Static.html");
        cy.url().should('include','automationtesting');
        cy.get('#javascript').should('be.visible');
        cy.get('#javascript').drag('#droparea').then((success) => {
            assert.isTrue(success);
        });
    });

    it('DemoDragTesting - Drag image Vue', function(){
        cy.visit("https://demo.automationtesting.in/Static.html");
        cy.url().should('include','automationtesting');
        cy.get('#vue').should('be.visible');
        cy.get('#vue').drag('#droparea').then((success) => {
            assert.isTrue(success);
        });
    });
});
