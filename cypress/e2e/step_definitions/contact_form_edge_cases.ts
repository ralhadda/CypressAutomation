import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I intercept the email API to return a 404 with empty body", () => {
  cy.window().then((win) => {
    cy.stub(win, 'alert').as('alertStub');
  });
  
  cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send-form', {
    statusCode: 404,
    body: {}
  }).as('sendFormRequest');
});

When("I intercept the email API to return a 404 with invalid JSON", () => {
  cy.window().then((win) => {
    cy.stub(win, 'alert').as('alertStub');
  });
  
  cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send-form', {
    statusCode: 404,
    body: 'This is not valid JSON',
    headers: {
      'content-type': 'text/plain'
    }
  }).as('sendFormRequest');
});

When("I intercept the email API to return a delayed 404 error", () => {
  cy.window().then((win) => {
    cy.stub(win, 'alert').as('alertStub');
  });
  
  cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send-form', {
    statusCode: 404,
    body: {
      message: 'Not Found',
      error: 'Endpoint not found'
    },
    delay: 3000 // 3 second delay
  }).as('sendFormRequest');
});

When("I intercept the email API to return a {int} error", (statusCode: number) => {
  cy.window().then((win) => {
    cy.stub(win, 'alert').as('alertStub');
  });
  
  cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send-form', {
    statusCode: statusCode,
    body: {
      message: `HTTP ${statusCode} Error`,
      error: `Error with status code ${statusCode}`
    }
  }).as('sendFormRequest');
});