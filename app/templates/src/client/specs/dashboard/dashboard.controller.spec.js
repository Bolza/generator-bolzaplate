/* jshint -W117, -W030 */
describe('Dashboard', function() {
    var controller, scope;

    beforeEach(module('ui.router'));
    beforeEach(module('app.dashboard'));
    beforeEach(inject(function($injector) {
        var $controller = $injector.get('$controller');
        scope = $injector.get('$rootScope');
        controller = $controller('DashboardController', {
            $scope: scope
        });
    }));
    describe('View', function() {
        it('should be loaded', function() {
            expect(controller).to.be.truthy;
        });
    });
});
