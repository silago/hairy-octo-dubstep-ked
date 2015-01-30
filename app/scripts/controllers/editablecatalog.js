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
      $scope.getCollections = function() {catalogRes.get({'all':1}).$promise.then(function(d){$scope.collections = d;})};
      $scope.deleteCollection = function(name) {
          catalogRes.DELETE({'collection':name}).$promise.then(function(d){$scope.getCollections();})};
      $scope.activateCollection = function(name) {
          catalogRes.PUT({'collection':name,'set':'active'}).$promise.then(function(d){
          //  $scope.getGroups();
          //  $scope.getItems();
          })};
      $scope.similarModel = false; 
      $scope.getGroups = function(p) {if(p==undefined)p={}; gcatalogRes.get(p).$promise.then(function(d){$scope.groups = d;}); }

      $scope.getItems  = function(p) {if(p==undefined)p={}; gcatalogRes.get(p).$promise.then(function(d){$scope.data = d;}); }
      $scope.chooseCollection = function(v) {
          $scope.getGroups({collection:v});
          $scope.getItems({collection:v,state:'items'});
      }

      $scope.addToSimilar =function(item) {
            if ($scope.similarModel.similar.indexOf(item)==-1)
                $scope.similarModel.similar.push (item);
      }  
      $scope.saveGroup = function (group) {
        gcatalogRes.POST({data:group});
      }
      $scope.deleteFromSimilat =function(item,sim){
            item.similar.splice(item.similar.indexOf(sim),1);
      }
    
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
