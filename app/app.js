'use strict';

// Declare app level module which depends on views, and components
angular.module('ngApp-facebook', [
  'ngRoute',
  'ngApp-facebook.view1',
  'ngApp-facebook.view2',
  'ngApp-facebook.facebook'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/facebook'});
}]);
