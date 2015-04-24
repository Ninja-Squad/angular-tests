describe('avatar directive', function() {

    var largeElement, smallElement, $scope;

    beforeEach(module('directives'));

    beforeEach(inject(function($compile, $rootScope) {
        $scope = $rootScope;
        $scope.entity = {
            login: 'Ninja-Squad',
            avatar_url: 'https://avatars.githubusercontent.com/u/1610007?v=3'
        };

        largeElement = $compile('<avatar entity="entity"></avatar>')($scope);
        smallElement = $compile('<avatar entity="entity" size="small"></avatar>')($scope);
        
        $scope.$digest();
    }));

    it('should display a large image', function() {
        var image = largeElement.find('img');
        expect(image.attr('alt')).toBe('Avatar de Ninja-Squad');
        expect(image.attr('title')).toBe('Avatar de Ninja-Squad');
        expect(image.css('width')).toBe('50px');
        expect(image.css('height')).toBe('50px');
        expect(image.attr('src')).toBe('https://avatars.githubusercontent.com/u/1610007?v=3');
    });

    it('should display a small image', function() {
        var image = smallElement.find('img');
        expect(image.css('width')).toBe('25px');
        expect(image.css('height')).toBe('25px');
    });
});
