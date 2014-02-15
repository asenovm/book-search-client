'use strict';

angular.module('bookSearchClientApp')
    .controller('LoginController', ['$rootScope', '$scope', '$location', '$route', 'SessionService', function ($rootScope, $scope, $location, $route, sessionService) {
        FB.init({
            appId      : '352011688261066',
            status     : true,
            cookie     : true,
            xfbml      : true
        });

        var logout = false;

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
                } else if(!logout) {
                    FB.login();
                }
            });
        };

        $rootScope.logout = function () {
            logout = true;
            FB.logout(function (response) {
                $rootScope.loggedIn = false;
                sessionService.storeLoginInfo(null);
                $rootScope.$apply();
                $location.path('/');
                $route.reload();
            });
        };

        function onLoginSuccessfull (response) {
            $rootScope.loggedIn = true;
            sessionService.storeLoginInfo(response.authResponse.userID);
            $location.path('/search');
            $route.reload();
        }
    }]);
