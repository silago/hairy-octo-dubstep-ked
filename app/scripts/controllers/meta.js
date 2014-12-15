'use strict';

/**
 * @ngdoc function
 * @name keddoApp.controller:MetaCtrl
 * @description
 * # MetaCtrl
 * Controller of the keddoApp
 */
angular.module('frontendApp')
  .controller('MetaCtrl', function ($scope,pageRes,$routeParams,$location) {
    $scope.path = $location.$$path.replace(/^\/page\//g,'');
        pageRes.get({'url':$scope.path}).$promise.then(function(data){
          if (data.id){
              $scope.meta = data.meta.fromJson();
          }
        },function(data){
          });
  });
