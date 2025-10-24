Feature: Contact Form Success Handling
   
  @integration
  Scenario: Form submission shows success alert with real API call
    Given the user is on the Assert Edge website
    When the user fills out the contact form
    And the user submits the form without mocking the API
    Then a success alert "Message sent successfully!" is displayed