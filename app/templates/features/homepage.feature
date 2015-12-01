Feature: Homepage
  As a user I should not be able to see the homepage unless I am logged in.

  Scenario: I am not logged in
    Given I go to the "Home" page
    Then I should be redirected to the "Login" page
