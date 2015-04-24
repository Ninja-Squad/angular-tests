angular.module('controllers').controller('HelloCtrl', function($scope) {
    $scope.hello = function(name) {
        var dest = name || 'World';
        $scope.message = 'Hello ' + dest;
    };
});