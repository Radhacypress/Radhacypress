describe('OrangeHRM HOmePage', () =>
     {
    it('should load the page and verify the title-positive test', () => {
      // Visit the URL and wait for the page to load
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.wait(2000); // Wait for 2 seconds before making assertions (adjust as needed)
  
      // Verify the title
      cy.title().should('eq', 'OrangeHRM');
    });
    it('should load the page and verify the title-negative test', () => {
        // Visit the URL and wait for the page to load
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.wait(2000); // Wait for 2 seconds before making assertions (adjust as needed)
    
        // Verify the title
        cy.title().should('eq', 'OrangeHRM54');
      });
  });
