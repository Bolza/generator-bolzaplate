/* jshint -W117, -W030 */
exports.doLogin = function () {
    browser.setLocation('/login');
    var emailField = element(by.model('vm.model.email'));
    var passwordField = element(by.model('vm.model.password'));
    var submitButton = element(by.css('#loginButton'));
    emailField.sendKeys('stefano@admedo.com');
    passwordField.sendKeys('password');
    submitButton.click();
};
exports.createLineItem = function () {
    protractor.helpers.doLogin();
    browser.setLocation('/campaigns');
    var campaign = element(by.repeater('item in vm.list').row(0));
    var button = campaign.element(by.id('addLineItem'));
    button.click();

    var createButton = element(by.css('#createLineItemButton'));
    createButton.isPresent().then(function () {
        createButton.click();
    });
};
exports.scrollTo = function(elemFinder) {
    var promise = browser.executeScript(function(elem) {
        elem.scrollIntoView(false);
    }, elemFinder);
    return promise;
};
afterAll(function(){
    browser.driver.quit();
});
beforeEach(function() {
    jasmine.addMatchers({
        toHaveClass: function() {
            return {
                compare: function(actual, expected) {
                    return {
                        pass: actual.getAttribute('class').then(function(classes) {
                            return classes.split(' ').indexOf(expected) !== -1;
                        })
                    };
                }
            };
        },
        notToHaveClass: function() {
            return {
                compare: function(actual, expected) {
                    return {
                        pass: actual.getAttribute('class').then(function(classes) {
                            return classes.split(' ').indexOf(expected) === -1;
                        })
                    };
                }
            };
        },
    });
});
