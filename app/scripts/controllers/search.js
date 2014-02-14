'use strict';

angular.module('bookSearchClientApp')
    .controller('SearchController', ['$rootScope', '$scope', '$location', 'SearchService', function ($rootScope, $scope, $location, searchService) {

        $scope.search = function (query) {
            searchService.query(query).success(function (response) {
                $rootScope.books = response.books.map(function (item) {
                    item.image = 'http://assets.chitanka.info/thumb/book-cover/00/7.max.jpg'; 
                    return item;
                });
                $location.path('/results');
            }).error(function (response) {
                $rootScope.books = [];
                $location.path('/results');
            });
        };

    }]);
