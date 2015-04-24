angular.module('controllers').controller('HelloCtrl', function($scope, $http) {
    $scope.showOrg = function(login) {
        $scope.orgError = false;
        $scope.org = null;
        $http.get('https://api.github.com/orgs/' + login).success(function(data) {
            $scope.org = data;
        }).error(function() {
            $scope.org = null;
            $scope.orgError = true;
        })
    };
});