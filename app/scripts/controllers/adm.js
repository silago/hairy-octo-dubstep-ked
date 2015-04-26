'use strict';

/**
 * @ngdoc function
 * @name keddoApp.controller:AdmCtrl
 * @description
 * # AdmCtrl
 * Controller of the keddoApp
 */
angular.module('frontendApp')
  .controller('AdmCtrl', function ($scope,pageRes) {
    $scope.pages = pageRes.GET({});

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
