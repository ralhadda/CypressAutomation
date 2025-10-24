import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the Cypress website", () => {
  cy.visit("https://www.cypress.io");
});

Then('I should see {string}', (text: string) => {
  cy.contains(text).should("be.visible");
});