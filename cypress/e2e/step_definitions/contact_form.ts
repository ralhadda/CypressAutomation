import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the Assert Edge website", () => {
  cy.visit("https://www.assertedge.com");
});

When("I fill out the contact form", () => {
  cy.get('input[name="name"]').type('Test User');
  cy.get('input[name="email"]').type('test@example.com');
  cy.get('textarea[name="message"]').type('This is a test message');
});

When("I submit the form", () => {
  cy.contains('button', 'Send', { matchCase: false }).click();
  cy.wait('@sendFormRequest');
});

Then("I should see an error message", () => {
  cy.contains('error', { matchCase: false }).should('be.visible');
});

Then("I should see an error alert with {string}", (expectedMessage: string) => {
  cy.get('@alertStub').should('have.been.calledOnce');
  cy.get('@alertStub').should('have.been.calledWith', expectedMessage); 
});

Then("I should see an alert with {string}", (expectedMessage: string) => {
  cy.get('@alertStub').should('have.been.calledOnce');
  cy.get('@alertStub').should('have.been.calledWith', expectedMessage); 
});