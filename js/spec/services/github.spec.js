describe('github service', function() {
    var $httpBackend, github;

    beforeEach(module('services'));
    beforeEach(inject(function(_$httpBackend_, _github_) {
        github = _github_;
        $httpBackend = _$httpBackend_;
    }));

    it('should return existing organization', function() {
        var org = {
            name: 'Ninja Squad'
        };
        var members = [
            {
                login: 'jnizet'
            }
        ];
        $httpBackend.expectGET('https://api.github.com/orgs/Ninja-Squad').respond(org);
        $httpBackend.expectGET('https://api.github.com/orgs/Ninja-Squad/members').respond(members);
        
        var result = null;

        github.getOrganization('Ninja-Squad').then(function(data) {
            result = data;
        });

        $httpBackend.flush();
        expect(result).toEqual({
            name: 'Ninja Squad',
            members: [
                {
                    login: 'jnizet'
                }
            ]
        });
    });

    it('should return failed promise if not existing org', function() {
        $httpBackend.expectGET('https://api.github.com/orgs/Ninja-Squad').respond(404);

        var result = null;
        var error = false;
        github.getOrganization('Ninja-Squad').then(function(data) {
            result = data;
        }, function() {
            error = true;
        });

        $httpBackend.flush();

        expect(error).toBeTruthy();
    });
});