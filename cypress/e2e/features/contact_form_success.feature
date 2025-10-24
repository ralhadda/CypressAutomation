Feature: Contact Form Success Handling

  Scenario: Form submission shows success alert
    Given I visit the Assert Edge website
    And I fill out the contact form
    And I submit the form
    Then I should see an alert with "Message sent successfully!"