angular.module('directives').directive('avatar', function() {
    return {
        scope: {
            entity: '=',
            size: '@'
        },
        template: '<img ng-src="{{ entity.avatar_url }}" alt="Avatar de {{ entity.login }}" title="Avatar de {{ entity.login }}" ng-style="style" />',
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