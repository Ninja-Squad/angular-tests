describe('HelloCtrl', function() {

    var $scope, $httpBackend;

    beforeEach(module('controllers'));

    beforeEach(inject(function($controller, $rootScope, _$httpBackend_) {
        $scope = $rootScope.$new();
        $httpBackend = _$httpBackend_;
        $controller('HelloCtrl', {
            $scope: $scope
        });
    }));

    it('should set orgError to false and get org if valid login', function() {
        $scope.orgError = true;

        var org = {
            name: 'Ninja Squad'
        };
        $httpBackend.expectGET('https://api.github.com/orgs/Ninja-Squad').respond(org);

        $scope.showOrg('Ninja-Squad');
        expect($scope.orgError).toBeFalsy();

        $httpBackend.flush();

        expect($scope.org).toEqual(org);
    });

    it('should set orgError to false and get org if invalid login', function() {
        $scope.orgError = false;
        $scope.org = {
            name: 'Ninja Squad'
        };

        $httpBackend.expectGET('https://api.github.com/orgs/Not-Existing').respond(404);

        $scope.showOrg('Not-Existing');

        $httpBackend.flush();

        expect($scope.orgError).toBeTruthy();
        expect($scope.org).toBeFalsy();
    });
});