'use strict';

angular.module('bookSearchClientApp').service('SearchService', ['$http', function ($http) {

    var SERVER_URL = 'http://localhost:8080';

    this.query = function (query) {
        return $http.post(SERVER_URL + '/search', { 'q': query });
    };

    this.markAsRelevant = function (book, userId) {
        return $http.post(SERVER_URL + '/relevant', { 'userId': userId, 'book': book.title });
    };

}]);
