'use strict';

var chai = require('chai');

var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = function() {

    // Log in with given email and password
    // preconditions: we are on login page
    function logIn(email, password) {
        // TODO: add check that we are on login page and fail callback otherwise?

        protractor.promise.controlFlow().execute(function() {
            var emailField = element(by.model('vm.model.email'));
            var passwordField = element(by.model('vm.model.password'));
            var submitButton = element(by.css('#loginButton'));
            emailField.clear();
            passwordField.clear();
            emailField.sendKeys(email);
            passwordField.sendKeys(password);
            submitButton.click();
        });

        return;
    }

    this.Given(/^I fill in the login form with details for "([^"]*)"$/, function (email, next) {
        logIn(email, "password");
        next();
    });
};
