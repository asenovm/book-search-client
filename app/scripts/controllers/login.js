'use strict';

angular.module('bookSearchClientApp')
    .controller('LoginController', ['$scope', '$location', function ($scope, $location) {
        FB.init({
            appId      : '352011688261066',
            status     : true,
            cookie     : true,
            xfbml      : true
        });

        $scope.login = function () {
            FB.getLoginStatus(function (response) {
                if(response.status === 'connected') {
                    $location.path('/search');
                } else {
                    FB.login();
                }
            });

            FB.Event.subscribe('auth.authResponseChange', function(response) {
                if (response.status === 'connected') {
                    $location.path('/search');
                } else {
                    FB.login();
                }
            });
        };
    }]);
