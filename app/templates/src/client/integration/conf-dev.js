/* jshint -W117, -W030 */
exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',
    specs: ['*.spec.js'],
    baseUrl: 'http://localhost:4444',
    onPrepare: function() {
        var SpecReporter = require('jasmine-spec-reporter');
        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));
        browser.manage().window().setSize(1224, 1000);
        protractor.helpers = require('./helpers.js');
        protractor.serverUrl = 'http://localhost:4000/#!/';
        browser.get(protractor.serverUrl);
    },
    jasmineNodeOpts: {
        print: function() {}
    }
};
