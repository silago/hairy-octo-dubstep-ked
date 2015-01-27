'use strict';

/**
 * @ngdoc function
 * @name keddoApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the keddoApp
 */
angular.module('frontendApp')
  .controller('CatalogCtrl', function ($scope,catalogRes,$stateParams,$state) {
     $stateParams.target = 'collection';
     $scope.stateParams = $stateParams;
     $scope.data = catalogRes.collections($stateParams); 
  });
