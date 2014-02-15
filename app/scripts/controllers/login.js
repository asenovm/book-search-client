'use strict';

angular.module('bookSearchClientApp')
    .controller('LoginController', ['$rootScope', '$scope', '$location', '$route', 'SessionService', function ($rootScope, $scope, $location, $route, sessionService) {
        FB.init({
            appId      : '352011688261066',
            status     : true,
            cookie     : true,
            xfbml      : true
        });

        $scope.login = function () {
            FB.getLoginStatus(function (response) {
                if(response.status === 'connected') {
                    onLoginSuccessfull(response);
                } else {
                    FB.login();
                }
            });

            FB.Event.subscribe('auth.authResponseChange', function(response) {
                if (response.status === 'connected') {
                    onLoginSuccessfull(response);
                } else {
                    FB.login();
                }
            });
        };

        $rootScope.isLoggedIn = function () {
            return sessionService.getLoginInfo();
        };

        $rootScope.logout = function () {
            FB.logout(function (response) {
                sessionService.storeLoginInfo(null);
                $scope.$apply();
                console.log('logged out');
            });
        };

        function onLoginSuccessfull (response) {
            sessionService.storeLoginInfo(response.authResponse.userID);
            $location.path('/search');
            $route.reload();
        }
    }]);
