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
            return rate;//true;
    }
    var return_what_exist = function(obj,vals) {
        var result = '';
        for (var i in vals) {
            if (typeof(obj[vals[i]])!='undefined' && obj[vals[i]]!='*') {
            result = obj[vals[i]];
            break;
            }
        };
        return result;
    } 

    $scope.meta = {};
    $scope.meta.title       = return_what_exist($stateParams,['name','type','segment']);
    $scope.meta.keywords    = return_what_exist($stateParams,['name','type','segment']);
    $scope.meta.description = return_what_exist($stateParams,['name','type','segment']);
            if (!index) {
                var index = 3;
                $stateParams.target = 'collection';
                $scope.stateParams = $stateParams;
                console.log($stateParams);
                catalogRes.collections($stateParams).$promise.then(
                    function(data){
                        $scope.data=data;
                        if (typeof(data.data.name)!='undefined') 
                            $scope.meta.title = data.data.data.name;
                    }
                ); 
                $scope.catalogRes = catalogRes;
            } 

  });
