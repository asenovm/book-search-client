'use strict';

angular.module('bookSearchClientApp')
    .controller('SearchController', ['$rootScope', '$scope', '$location', 'SearchService', function ($rootScope, $scope, $location, searchService) {

        $scope.search = function (query, $event) {
            var $button = $($event.target);

            $button.button('loading');
            searchService.query(query).success(function (response) {
                $rootScope.books = response.books.map(function (item) {
                    item.image = 'http://assets.chitanka.info/thumb/book-cover/00/0.200.png'; 
                    return item;
                });
                $location.path('/results');
                $button.button('reset');
            }).error(function (response) {
                $rootScope.books = [];
                $location.path('/results');
                $button.button('reset');
            });
        };

    }]);
