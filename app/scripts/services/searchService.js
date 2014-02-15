'use strict';

angular.module('bookSearchClientApp').service('SearchService', ['$http', function ($http) {

    var SERVER_URL = 'http://localhost:8080',
        searchQuery;

    this.query = function (query, userId) {
        searchQuery = query;
        return $http.post(SERVER_URL + '/search', { 'q': query, 'userId': userId });
    };

    this.markAsRelevant = function (book, userId) {
        return $http.post(SERVER_URL + '/relevant', { 'userId': userId, 'book': book.title, 'query': searchQuery });
    };

    this.isMarkedAsRelevant = function (book, userId) {
        return $http({
            url: SERVER_URL + '/relevant',
            method: 'GET',
            params: {
                userId: userId,
                book: book.title,
                query: searchQuery
            }
        });
    };

}]);
