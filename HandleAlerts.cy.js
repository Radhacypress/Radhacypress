Cypress.on('uncaught:exception',(err,runnable) =>{
    return false
    })

describe('Handle Alerts ', () => {

    beforeEach(() => {
      // Navigate to the website
      cy.visit('https://demo.automationtesting.in/Alerts.html');
    });
  
    it('Handle JavaScript Alert', () => {
      cy.contains('Alert with OK').click();
  
      cy.get('button[onclick="alertbox()"]').click();
  
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('I am an alert box!');
      });
    });
  
    it('Handle JavaScript Confirm (OK)', () => {
      
      cy.contains('Alert with OK & Cancel').click();
  
      cy.get('button[onclick="confirmbox()"]').click();
  
      cy.on('window:confirm', (confirmText) => {
        expect(confirmText).to.equal('Press a Button !');
        return true; 
      });
  
      cy.xpath("//p[@id='demo']").should('have.text', 'You pressed Ok');
    });
  
    it('Handle JavaScript Confirm (Cancel)', () => {
  
      cy.contains('Alert with OK & Cancel').click();
  
      cy.get('button[onclick="confirmbox()"]').click();
  
      cy.on('window:confirm', (confirmText) => {
        expect(confirmText).to.equal('Press a Button !');
        return false;
      });
  
  
      cy.get('#demo').should('have.text', 'You Pressed Cancel');
    });
  
    it('Handle Prompt Alert (with input)', () => {
      cy.contains('Alert with Textbox').click();
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('Leela');
      });
      cy.get('button[onclick="promptbox()"]').click();
      cy.get('#demo1').should('have.text', 'Hello Leela How are you today');
    });
  });