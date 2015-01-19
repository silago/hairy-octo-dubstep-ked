'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:EditablecatalogCtrl
 * @description
 * # EditablecatalogCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('EditablecatalogCtrl', function ($scope,$location,$stateParams,$cookieStore,catalogRes) {
      var role_id = $cookieStore.get('role_id');
      if (!role_id || role_id == 0) 
            $location.path("page/index")
      $scope.data =  {} 
      catalogRes.get({}).$promise.then(function(d){$scope.data = d;});

 
      $scope.options = {
        change: function (file) {
            $scope.file = file;
            var u = window.RESTurl+'/api/catalog';
            //file.$preview({}).then(function(d) { /*$scope.filePreview = d;*/ console.log($scope.filePreview); });
            file.$upload(u, {}).then(function(d){},function(d){});
          }
      }
  });
