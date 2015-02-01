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
     $scope.init= function(params){
        if (params!=undefined) 
        if (params.stateParams!=undefined){
            $stateParams=params.stateParams;
        }
     }
            if (!index) {
                var index = 3;
                $stateParams.target = 'collection';
                $scope.stateParams = $stateParams;
                $scope.data = catalogRes.collections($stateParams); 
                $scope.catalogRes = catalogRes;
            } 

  });
