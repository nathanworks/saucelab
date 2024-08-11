Feature: The Internet Guinea Pig Website

  Scenario: User login with valid credentials
    Given the user is on login page
    When the user input <username> and <password> and click 'Login" button
    Then the user should be redirected to the products page
    And the user should see a list of products

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
