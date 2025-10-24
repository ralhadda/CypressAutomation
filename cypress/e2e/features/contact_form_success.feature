Feature: Contact Form Success Handling

  Scenario: Form submission shows success alert
    Given the user is on the Assert Edge website
    And the email API is mocked to return a 200 with empty body
    When the user fills out the contact form
    And the user submits the form
    Then a success alert "Message sent successfully!" is displayed