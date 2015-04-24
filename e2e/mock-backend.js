angular.module('app').requires.push('mock-backend');
angular.module('mock-backend', ['ngMockE2E']).run(function($httpBackend) {
    $httpBackend.whenGET('https://api.github.com/orgs/notExistingNotExistingNotExisting').respond(404, {error: 'not found'});

    var org = {
        login: 'Ninja-Squad',
        name: 'Ninja Squad',
        avatar_url: 'https://avatars.githubusercontent.com/u/1610007?v=3',
        blog: 'http://ninja-squad.com'
    }

    $httpBackend.whenGET('https://api.github.com/orgs/Ninja-Squad').respond(org);

    var members = [
        {
            "login": "acrepet",
            "avatar_url": "https://avatars.githubusercontent.com/u/544206?v=3"
        },
        {
            "login": "cexbrayat",
            "avatar_url": "https://avatars.githubusercontent.com/u/411874?v=3"
        },
        {
            "login": "clacote",
            "avatar_url": "https://avatars.githubusercontent.com/u/750715?v=3"
        },
        {
            "login": "jnizet",
            "avatar_url": "https://avatars.githubusercontent.com/u/1608223?v=3"
        },
        {
            "login": "NinjaBot",
            "avatar_url": "https://avatars.githubusercontent.com/u/2470400?v=3"
        }
    ];

    $httpBackend.whenGET('https://api.github.com/orgs/Ninja-Squad/members').respond(members);

    $httpBackend.when('GET', function() {return true;}).passThrough();
});