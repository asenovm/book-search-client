'use strict';

angular.module('bookSearchClientApp')
    .controller('ResultsController', ['$rootScope', '$scope', function ($rootScope, $scope) {
      
      $scope.setActive = function(idx) {
        $scope.slides[idx].active=true;
      }
    }]);
