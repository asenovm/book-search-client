'use strict';

angular.module('bookSearchClientApp').directive('containerSize', ['$timeout', function ($timeout) {
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {
            var $cover = $('img');
            $cover.load(function () {
                element.width($cover.width()).height($cover.height());
            });
        }
    };
}]);
