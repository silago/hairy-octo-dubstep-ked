'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:BasectrlCtrl
 * @description
 * # BasectrlCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('BasectrlCtrl', function ($scope,menuSrvc) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
