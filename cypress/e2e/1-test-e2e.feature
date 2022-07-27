Feature: Test the product page

  Scenario: I can navigate on the single product page
    Given I visit the catalog page
    When I go inside the first product
    Then I see the product image