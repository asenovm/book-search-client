'use strict';

angular.module('bookSearchClientApp', [
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/search.html',
        controller: 'SearchController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
