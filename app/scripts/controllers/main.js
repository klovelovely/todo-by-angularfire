'use strict';

/**
 * @ngdoc function
 * @name todoByAngularfireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoByAngularfireApp
 */
angular.module('todoByAngularfireApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
