Feature: Contact Form Error Handling

  Scenario: Form submission fails with 404 error
    Given the user is on the Assert Edge website
    And the email API is mocked to return a 404 error
    When the user fills out the contact form
    And the user submits the form
    Then an error alert "Failed to send message." is displayed