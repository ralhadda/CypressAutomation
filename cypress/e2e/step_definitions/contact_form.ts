import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// User actions
When("the user fills out the contact form", () => {
  cy.get('input[name="name"]').type('Test User');
  cy.get('input[name="email"]').type('test@example.com');
  cy.get('textarea[name="message"]').type('This is a test message');
});

When("the user submits the form without mocking the API", () => {
  cy.contains('button', 'Send', { matchCase: false }).click();
});

When("the user submits the form", () => {
  cy.contains('button', 'Send', { matchCase: false }).click();
  cy.wait('@sendFormRequest');
});

// Assertions - what is displayed
Then("an error alert {string} is displayed", (expectedMessage: string) => {
  cy.get('@alertStub').should('have.been.calledOnce');
  cy.get('@alertStub').should('have.been.calledWith', expectedMessage);
});

Then("a success alert {string} is displayed", (expectedMessage: string) => {
  cy.get('@alertStub').should('have.been.calledOnce');
  cy.get('@alertStub').should('have.been.calledWith', expectedMessage);
});

Given("the email API is mocked to return a 200 with empty body", () => {
  cy.window().then((win) => {
    cy.stub(win, 'alert').as('alertStub');
  });
  
  cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send-form', {
    statusCode: 200,
    body: {}
  }).as('sendFormRequest');
});

// API mocking setup
Given("the email API is mocked to return a 404 with empty body", () => {
  cy.window().then((win) => {
    cy.stub(win, 'alert').as('alertStub');
  });
  
  cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send-form', {
    statusCode: 404,
    body: {}
  }).as('sendFormRequest');
});

Given("the email API is mocked to return a 404 with invalid JSON response", () => {
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

Given("the email API is mocked to return a delayed 404 error", () => {
  cy.window().then((win) => {
    cy.stub(win, 'alert').as('alertStub');
  });
  
  cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send-form', {
    statusCode: 404,
    body: {
      message: 'Not Found',
      error: 'Endpoint not found'
    },
    delay: 3000
  }).as('sendFormRequest');
});

Given("the email API is mocked to return a {int} error", (statusCode: number) => {
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