'use strict';

angular.module('bookSearchClientApp')
    .controller('ResultsController', ['$scope', 'SearchService', 'SessionService', function ($scope, searchService, sessionService) {
      
        $scope.markAsRelevant = function (book, $event) {
            searchService.markAsRelevant(book, sessionService.getLoginInfo()).success(function (response) {
                $($event.target).text('Добавено успешно');
            }).error(function (response) {
                $($event.target).text('Грешка при добавянето');
            });
        };
    }]);
