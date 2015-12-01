'use strict';

var defaultProtractorBaseUrl = 'http://localhost:4000';
var defaultSeleniumUrl = 'http://localhost:4444/wd/hub';
var defaultBullseyeApiBaseUrl = 'http://localhost:3000';

var protractorBaseUrl = process.env['PROTRACTOR_BASE_URL'] ? process.env['PROTRACTOR_BASE_URL'] : defaultProtractorBaseUrl;
var seleniumUrl = process.env['SELENIUM_URL'] ? process.env['SELENIUM_URL'] : defaultSeleniumUrl;
var bullseyeApiBaseUrl = process.env['BULLSEYE_API_BASE_URL'] ? process.env['BULLSEYE_API_BASE_URL'] : defaultBullseyeApiBaseUrl;

exports.config = {
    params: {
        // TODO: check why we need this here, it may only be needed in the config/config.js.template file
        bullseyeApiBaseUrl: bullseyeApiBaseUrl
    },
    baseUrl: protractorBaseUrl,
    seleniumAddress: seleniumUrl,
    framework: 'cucumber',
    specs: [
        'features/*.feature'
    ],
    capabilities: {
        browserName: 'chrome'
    },
    cucumberOpts: {
        require: 'features/steps/*_steps.js',
        format: 'pretty'
    }
};
