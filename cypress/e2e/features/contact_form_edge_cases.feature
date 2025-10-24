Feature: Contact Form Edge Cases

  Scenario: API returns 404 with empty body
    Given I visit the Assert Edge website
    When I intercept the email API to return a 404 with empty body
    And I fill out the contact form
    And I submit the form
    Then I should see an error alert with "Failed to send message."

  Scenario: API returns 404 with malformed JSON
    Given I visit the Assert Edge website
    When I intercept the email API to return a 404 with invalid JSON
    And I fill out the contact form
    And I submit the form
    Then I should see an error alert with "Failed to send message."

  Scenario: Slow API response with 404
    Given I visit the Assert Edge website
    When I intercept the email API to return a delayed 404 error
    And I fill out the contact form
    And I submit the form
    Then I should see an error alert with "Failed to send message."

  Scenario Outline: Different HTTP error codes
    Given I visit the Assert Edge website
    When I intercept the email API to return a <status_code> error
    And I fill out the contact form
    And I submit the form
    Then I should see an error alert with "Failed to send message."

    Examples:
      | status_code |
      | 400         |
      | 403         |
      | 404         |
      | 429         |
      | 500         |
      | 502         |
      | 503         |