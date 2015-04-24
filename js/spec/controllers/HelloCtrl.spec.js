describe('HelloCtrl', function() {

    var $scope, $q, github;

    beforeEach(module('controllers'));

    beforeEach(inject(function($controller, $rootScope, _$q_, _github_) {
        $scope = $rootScope.$new();
        $q = _$q_;
        github = _github_;
        $controller('HelloCtrl', {
            $scope: $scope
        });
    }));

    it('should set orgError to false and get org if valid login', function() {
        $scope.orgError = true;

        var org = {
            name: 'Ninja Squad'
        };
        spyOn(github, 'getOrganization').and.returnValue($q.when(org));

        $scope.showOrg('Ninja-Squad');
        
        expect($scope.orgError).toBeFalsy();

        $scope.$apply();

        expect($scope.org).toEqual(org);
    });

    it('should set orgError to false and get org if invalid login', function() {
        $scope.orgError = false;
        $scope.org = {
            name: 'Ninja Squad'
        };

        spyOn(github, 'getOrganization').and.returnValue($q.reject());

        $scope.showOrg('Not-Existing');

        $scope.$apply();

        expect($scope.orgError).toBeTruthy();
        expect($scope.org).toBeFalsy();
    });
});