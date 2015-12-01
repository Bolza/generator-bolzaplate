'use strict';

var chai = require('chai');

var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = function() {

    var page_name_map = {
        "Home": '/#!/',
        "Login": '/#!/login',
        "Campaign List": '/#!/campaigns'
    };

    function pageUrl(name) {
        return browser.baseUrl + page_name_map[name];
    }

    this.Given(/^I go to the "([^"]*)" page$/, function (pageName, next) {
        browser.get(pageUrl(pageName)).then(next);
        return;
    });

    this.Then(/^I should be redirected to the "([^"]*)" page$/, function (pageName, next) {
        var re = new RegExp("^" + pageUrl(pageName) + "$");
        expect(browser.getCurrentUrl()).eventually.to.match(re).and.notify(next);
    });

    this.Then(/^the title should equal "([^"]*)"$/, function (text, next) {
        expect(browser.getTitle()).to.eventually.equal(text).and.notify(next);
    });
};
