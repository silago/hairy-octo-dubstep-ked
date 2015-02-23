'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp') 
  .controller('BlogCtrl', function ($scope,blogRes,$stateParams,$state) {
        $scope.categories = blogRes.categories({'categories':'*'});
        $scope.page = blogRes.GET($stateParams); 
  });
