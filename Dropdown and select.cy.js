describe('Dropdown and Selectbox Test', () => {
    it('Selects an option from the dropdown', () => {
      
      cy.visit('https://www.ironspider.ca/forms/dropdowns.htm');
  

      cy.get('select#select-Dropdown Menus')  
        .select('With cream')           
        .should('have.value', 'With cream');
    });
  });
  