/* jshint -W117, -W030 */
describe('Core', function() {
    describe('Routes & State', function() {
        var controller;
        var views = {
            four0four: 'app/core/404.html'
        };
        beforeEach(function() {
            module('app', bard.fakeToastr);
            bard.inject('$location', '$rootScope', '$state', '$templateCache');
            $templateCache.put(views.core, '');
        });
        it('should map /404 route to 404 View template', function() {
            expect($state.get('404').templateUrl).to.equal(views.four0four);
        });
        it('of dashboard should work with $state.go', function() {
            $state.go('404');
            $rootScope.$apply();
            expect($state.is('404'));
        });
    });
});
