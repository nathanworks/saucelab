Feature: Add to Cart Functionality

  Scenario: User adds a product to the cart
    Given the user is logged <username> and <password> in and on the products page
    When the user clicks "Add to Cart"
    Then the button label should change to "Remove"
    And the cart icon should show "1" item

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
