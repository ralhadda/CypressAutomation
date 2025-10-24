Feature: Contact Form Success Handling

  Scenario: Form submission shows success alert
    Given I visit the Assert Edge website
    When I fill out the contact form
    When I submit the form
    Then I should see an alert with "Message sent successfully!"