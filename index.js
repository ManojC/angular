(function() {

    'use strict';

    angular.module('angular-demo', [])
        .controller('MainController', ['$scope', function($scope) {
            $scope.name = "Manoj Chalode";
            $scope.address = "Flat 30/4, Roeburn Hall, Preston PR2 2QQ";
        }])
        .directive('nameDirective', function() {
            return {
                templateUrl: function (element, attr) {
                	return 'templates/'+ attr.address +'-template.html';
                },
                restrict: 'AE'
            };
        });
})();
