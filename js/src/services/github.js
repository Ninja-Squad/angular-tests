angular.module('services').factory('github', function($http) {
    var getOrganization = function(login) {
        return $http.get('https://api.github.com/orgs/' + login).then(function(orgResponse) {
            var org = orgResponse.data;
            return $http.get('https://api.github.com/orgs/' + login + '/members').then(function(membersResponse) {
                org.members = membersResponse.data;
                return org;
            });
        });
    };

    return {
        getOrganization: getOrganization
    };
});