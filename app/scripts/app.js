'use strict';

angular.module('bookSearchClientApp', [
  'ngRoute', 'ui.bootstrap'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchController'
      })
      .when('/results', {
        templateUrl: 'views/results.html',
        controller: 'ResultsController',
        reloadOnSearch: false
      })
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
