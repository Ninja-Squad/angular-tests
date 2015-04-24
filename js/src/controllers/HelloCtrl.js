angular.module('controllers').controller('HelloCtrl', function($scope, github) {
    $scope.showOrg = function(login) {
        $scope.orgError = false;
        $scope.org = null;
        github.getOrganization(login).then(function(org) {
            $scope.org = org;
        }).catch(function() {
            $scope.org = null;
            $scope.orgError = true;
        })
    };
});