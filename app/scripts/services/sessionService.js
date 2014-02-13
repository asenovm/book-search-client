'use strict';

angular.module('bookSearchClientApp').service('SessionService', [function () {

    this.storeLoginInfo = function (userId) {
        this.userId = userId;
    };

}]);
