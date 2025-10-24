Feature: Contact Form Edge Cases

  Scenario: API returns 404 with empty body
    Given the user is on the Assert Edge website
    And the email API is mocked to return a 404 with empty body
    When the user fills out the contact form
    And the user submits the form
    Then an error alert "Failed to send message." is displayed

  Scenario: API returns 404 with malformed JSON
    Given the user is on the Assert Edge website
    And the email API is mocked to return a 404 with invalid JSON response
    When the user fills out the contact form
    And the user submits the form
    Then an error alert "Failed to send message." is displayed

  Scenario: Slow API response with 404
    Given the user is on the Assert Edge website
    And the email API is mocked to return a delayed 404 error
    When the user fills out the contact form
    And the user submits the form
    Then an error alert "Failed to send message." is displayed

  Scenario Outline: Different HTTP error codes
    Given the user is on the Assert Edge website
    And the email API is mocked to return a <status_code> error
    When the user fills out the contact form
    And the user submits the form
    Then an error alert "Failed to send message." is displayed

    Examples:
      | status_code |
      | 400         |
      | 403         |
      | 404         |
      | 429         |
      | 500         |
      | 502         |
      | 503         |