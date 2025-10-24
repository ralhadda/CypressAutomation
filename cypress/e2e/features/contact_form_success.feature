Feature: Contact Form Success Handling

  Scenario: Form submission shows success alert
    Given the user is on the Assert Edge website
    When the user fills out the contact form
    And the user submits the form
    Then a success alert "Message sent successfully!" is displayed