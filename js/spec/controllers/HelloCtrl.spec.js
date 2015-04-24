describe('HelloCtrl', function() {

    var $scope;

    beforeEach(module('controllers'));

    beforeEach(inject(function($controller, $rootScope) {
        $scope = $rootScope.$new();
        $controller('HelloCtrl', {
            $scope: $scope
        });
    }));

    it('should say Hello World when no argument', function() {
        $scope.hello();
        expect($scope.message).toBe('Hello World');
    });

    it('should say Hello JB when JB as argument', function() {
        $scope.hello('JB');
        expect($scope.message).toBe('Hello JB');
    });
});