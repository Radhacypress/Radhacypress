class CreateAccountPage{

    visit(){

        cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')

    }
    fullname(value){

        const field= cy.get("#tblcrtac > tbody > tr:nth-child(3) > td:nth-child(3) > input[type=text]")
      // Variable declre
         field.clear()
         field.type(value)
    }

    rediffemail(value){
        const field = cy.get('[valign="bottom"] > [type="text"]')
        field.clear()
        field.type(value)

    }

    password(value){
        const field = cy.get("#newpasswd")
        field.type(value)

    }
    RetypePassword(value){
        const field = cy.get("#newpasswd1").should('be.visible')
        field.type(value)


    }
    AlternateEmail(value){
        const field = cy.get(':nth-child(1) > [width="185"] > input')
        field.type(value)

    }
    MobileNumber(value){
        const field = cy.get("#mobno")
        field.type(value)

    }
    Day(value){
        const field=cy.get("#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(1)")
        field.select(value)

    }
    Month(value){
        const field=cy.get("#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(2)")
        field.select(value)

    }
    Year(value){
        const field=cy.get("#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(3)")
        field.select(value)

    }
    Gender(value){
        const field = cy.get("input[value='f']")
        field.click(value)

    }
    city(value){
        const field=cy.get("#div_city > table > tbody > tr:nth-child(1) > td:nth-child(3) > select")
        field.select(value)

    }
    verifyBuzz(value){
        const field = cy.get("input[onblur='fieldTrackCaptcha(this);']").should('be.visible')

    }
    SubmitButton(value){
        const field = cy.get("input[type='submit']")
        field.click(value)

    }
}
export default CreateAccountPage