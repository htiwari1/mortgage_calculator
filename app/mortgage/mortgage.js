'use strict';

angular.module('myApp.mortgage', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/mortgage', {
            templateUrl: 'mortgage/mortgage.html',
            controller: 'MortgageCtrl'
        });
    }])

    .controller('MortgageCtrl', function ($scope) {
        var defaultAnswer = "Monthy Payment: N/A";
        $scope.payment = defaultAnswer;
        $scope.save = function () {
            $scope.$broadcast('show-errors-check-validity');

            if ($scope.userForm.$valid) {
                var d = (Math.pow((1 + $scope.user.interest / 1200), parseInt($scope.user.term)) - 1) / ($scope.user.interest / 1200 * (Math.pow(1 + $scope.user.interest / 1200, parseInt($scope.user.term))))
                var payment = $scope.user.amount / d;
                $scope.payment = "Monthy Payment: " + payment;
            }

            else {
                $scope.payment = defaultAnswer;
            }
        };

        $scope.reset = function () {
            $scope.$broadcast('show-errors-reset');
            $scope.user = {amount: '', interest: '', term: ''};
            $scope.payment = defaultAnswer;
        }

    })

