Feature: Login
  As a user I should be able to log in to the system.

  Scenario: I provide valid credentials
    Given I go to the "Login" page
    And I fill in the login form with details for "nigel@admedo.com"
    Then I should be redirected to the "Campaign List" page
