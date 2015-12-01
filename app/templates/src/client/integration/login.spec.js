/* jshint -W117, -W030 */
describe('Login', function() {
    var emailField, passwordField, submitButton;
    beforeEach(function() {
        browser.setLocation('/');
        browser.executeScript('window.localStorage.clear();');
        emailField = element(by.model('vm.model.email'));
        passwordField = element(by.model('vm.model.password'));
        submitButton = element(by.css('#loginButton'));
        emailField.clear();
        passwordField.clear();
    });
    it('should start from login page', function() {
        expect(browser.getCurrentUrl()).toMatch(/\/login/);
    });
    describe('when submit with no email/password', function() {
        beforeEach(function() {
            submitButton.click();
        });
        it('should show `email required` error', function() {
            var message = element(by.id('login.email.required.message'));
            expect(message.isDisplayed()).toBe.true;
        });
        it('should show `password required` error', function() {
            var message = element(by.id('login.password.required.message'));
            expect(message.isDisplayed()).toBe.true;
        });
    });
    describe('when typed invalid login email', function() {
        it('should show `invalid email` error', function() {
            emailField.sendKeys('invalid.com');
            submitButton.click();
            var message = element(by.id('login.email.invalid.message'));
            expect(message.isDisplayed()).toBe.true;
        });
    });
    describe('when submit with valid but wrong login data', function() {
        beforeEach(function() {
            emailField.sendKeys('wrong@email.com');
            passwordField.sendKeys('pass');
            submitButton.click();
        });
        it('should stay on the login page', function() {
            expect(browser.getCurrentUrl()).toMatch(/\/login/);
        });
        it('should show login failed error', function() {
            var message = element(by.id('login.failed.message'));
            expect(message.isDisplayed()).toBe.true;
        });
    });
    describe('when submit correct login data', function() {
        it('should login and go on the default page', function() {
            emailField.sendKeys('stefano@admedo.com');
            passwordField.sendKeys('password');
            submitButton.click().then(function() {
                expect(browser.getCurrentUrl()).not.toMatch(/\/login/);
            });
        });
    });

});
