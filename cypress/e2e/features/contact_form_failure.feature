Feature: Contact Form Error Handling

  Scenario: Form submission fails with 404 error
    Given I visit the Assert Edge website
    When I intercept the email API to return a 404 error
    And I fill out the contact form
    And I submit the form
    Then I should see an error alert with "Failed to send message."