'use strict';

/**
 * @ngdoc function
 * @name keddoApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the keddoApp
 */
angular.module('frontendApp')
  .controller('CatalogCtrl', function ($scope,catalogRes,$stateParams,$state,rateRes,$sce) {
        $scope.trust = $sce.trustAsHtml;
     $scope.catalogCollectionTranslate = window.catalogCollectionTranslate;
     $scope.init= function(params){
        if (params!=undefined) 
        if (params.stateParams!=undefined){
            $stateParams=params.stateParams;
        }
     }
    $scope.encodeTwice = function(data) {
       return encodeURIComponent(encodeURIComponent(data));
    }
    $scope.rate = function(sku,rate) {
            sku = $scope.encodeTwice(sku);
            rateRes.PUT({id:sku,rating:rate});
            return true;
    }
            if (!index) {
                var index = 3;
                $stateParams.target = 'collection';
                $scope.stateParams = $stateParams;
                $scope.data = catalogRes.collections($stateParams); 
                $scope.catalogRes = catalogRes;
            } 

  });
