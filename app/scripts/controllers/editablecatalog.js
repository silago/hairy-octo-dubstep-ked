'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:EditablecatalogCtrl
 * @description
 * # EditablecatalogCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('EditablecatalogCtrl', function ($scope,$location,$stateParams,$cookieStore,catalogRes,gcatalogRes) {
      var role_id = $cookieStore.get('role_id');
      if (!role_id || role_id == 0) 
            $location.path("page/index")
      $scope.data =  {} 
      i
      $scope.getCollections = function() {catalogRes.get({'target':'collection'}).$promise.then(function(d){$scope.collections = d;})};
      
      catalogRes.get({}).$promise.then(function(d){$scope.data = d;});
      gcatalogRes.get({}).$promise.then(function(d){$scope.groups = d;});
      $scope.groups = {};
    
      $scope.tmpInfo  = '';
      $scope.tmpGroup = []; // item indexciest
    
      $scope.groupItems = function() {
            gcatalogRes.PUT({data:{info:$scope.tmpInfo,items:$scope.tmpGroup}}).$promise.then(function(d){$scope.groups = d}); 
            $scope.tmpGroup = [];
      }

      $scope.getCollections();

      $scope.options = {
        change: function (file) {
            $scope.file = file;
            var u = window.RESTurl+'/api/catalog';
            file.$upload(u, {}).then(function(d){$scope.data = d },function(d){});
          }
      }
  });
