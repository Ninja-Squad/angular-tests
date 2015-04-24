angular.module('directives').directive('avatar', function() {
    return {
        scope: {
            entity: '=',
            size: '@'
        },
        templateUrl: 'partials/avatar.html',
        link: function(scope) {
            var px = 50;
            if (scope.size === "small") {
                px = 25;
            }
            scope.style = {
                width: px + 'px',
                height: px + 'px'
            };
        }
    };
});