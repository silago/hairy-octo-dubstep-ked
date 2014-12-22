'use strict';

/**
 * @ngdoc function
 * @name keddoApp.controller:CommonCtrl
 * @description
 * # CommonCtrl
 * Controller of the keddoApp
 */
angular.module('keddoApp')
  .controller('CommonCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
