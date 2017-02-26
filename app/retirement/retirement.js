'use strict';

angular.module('myApp.retirement', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/retirement', {
    templateUrl: 'retirement/retirement.html',
    controller: 'RetirementCtrl'
  });
}])

.controller('RetirementCtrl', [function() {

}]);