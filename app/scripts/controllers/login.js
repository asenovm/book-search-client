'use strict';

angular.module('bookSearchClientApp')
    .controller('LoginController', function ($scope) {
        FB.init({
            appId      : '352011688261066',
            status     : true,
            cookie     : true,
            xfbml      : true
        });

        $scope.login = function () {
            FB.Event.subscribe('auth.authResponseChange', function(response) {
                if (response.status === 'connected') {
                } else if (response.status === 'not_authorized') {
                  FB.login();
                } else {
                  FB.login();
                }
            });
        };
    });
