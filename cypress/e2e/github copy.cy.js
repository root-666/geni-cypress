import 'cypress-iframe';

describe('template spec', () => {
    it('passes', () => {
        cy.visit(' http://genihunt-build.s3-website-eu-west-1.amazonaws.com/')
        //LOGIN STATUS 

        // assertion on url

        cy.url().should('eq', 'http://genihunt-build.s3-website-eu-west-1.amazonaws.com/')
        // page tittle verification 
        cy.title().should('include', 'GeniHunt')
        cy.wait(3000)

        cy.get(':nth-child(1) > .div-input > div > .form-control').type('18pwcse1718@uetpeshawar.edu.pk{enter}')
        cy.get('.mt-1 > .div-input > div > .form-control').type('Yahya1234@{enter}')
        cy.wait(5000)
        //SAVED SEARCHES
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('.subscription').click()
        cy.get('.subs-button-buy > button').click()

        // SEARCH QUERY
        // search 

        cy.get(':nth-child(1) > .nav-link').click()
        cy.get('.search-input-nav').type('squarex{enter}')

        // subscription testing
        cy.get('.subscription > a').click()
        cy.get('.subs-button-buy > button').click()

        cy.wait(3000)
        // inserting wrong card number 
        // Switch to the Stripe Element Card Input iframe


        const getStripeIFrameDocument = () => {
            return cy.checkElementExists(`iframe[name^="__privateStripeFrame5956"]`).iframeCustom()
          }
          
          it('Can enter card payment details', () => {
              getStripeIFrameDocument().find('input[data-elements-stable-field-name="cardNumber"]').type('4000058260000005')
            getStripeIFrameDocument().find('input[data-elements-stable-field-name="cardExpiry"]').type(CARD_DETAILS.cardExpiry)
            getStripeIFrameDocument().find('input[data-elements-stable-field-name="cardCvc"]').type(CARD_DETAILS.cardCvc)
          


        });

        // Verify successful payment or any additional assertions
        // cy.get('.confirmation-message').should('contain', 'Payment Successful');


        //profile settings 
        //cy.get('.icons > img').click()
        //cy.get('[href="/profile"] > .profile-content > span').click()
        //cy.reload(true)
        //cy.go('back')
        //cy.go('back')
        //cy.get(':nth-child(1) > .nav-link').click()
        //cy.wait(3000)
        //cy.get('.search-input-nav').type('squarex{enter}')
        //cy.get('.comp-save > button').click()
        //cy.get(':nth-child(2) > .nav-link').click()
        //cy.get('#select0').click()
        // cy.get('.export').click()
        //cy.get('div.export-item > span').click()
        //cy.get('.export').click()
        // cy.get('.share-item > span').click()
        //cy.wait(5000)
        //cy.get('.share-input > input').type('myaya4455@gmail.com{enter}')
        //cy.get('textarea').type('testing 101')
        //cy.get('.pdf > .file-label').click()
        // cy.get('.share-btn > :nth-child(2)').click()



    })
})