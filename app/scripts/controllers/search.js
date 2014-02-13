'use strict';

angular.module('bookSearchClientApp')
    .controller('SearchController', ['$scope', 'SearchService', function ($scope, searchService) {

        $scope.search = function (query) {
            searchService.query(query);
        };

    }]);
