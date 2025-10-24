import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is on the Assert Edge website", () => {
  cy.visit("https://www.assertedge.com");
});