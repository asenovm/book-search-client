'use strict';

angular.module('bookSearchClientApp').service('SearchService', ['$http', function ($http) {

    this.query = function (query) {
        $http({
            method: 'GET',
            url: 'http://localhost:8080/search',
            params: {
                'q': query
            }
        }).success(function (response) {
            console.dir(response);
        }).error(function (response) {
            console.dir(response);
        });
    };

}]);
