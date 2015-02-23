'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:EditablecatalogCtrl
 * @description
 * # EditablecatalogCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('EditablecatalogCtrl', function ($scope,$location,$stateParams,$cookieStore,catalogRes,gcatalogRes,$sce) {
        $scope.saveCollection = function(data){
           catalogRes.POST({'target':'collection',data:data}); 
        }


        $scope.trust = $sce.trustAsHtml;
      var role_id = $cookieStore.get('role_id');
      if (!role_id || role_id == 0) 
            $location.path("page/index")
      $scope.data =  {} 
      $scope.collectionToEdit = false;
      $scope.getCollections = function() {catalogRes.get({'all':1}).$promise.then(function(d){$scope.collections = d;})};
      $scope.deleteCollection = function(name) {
          catalogRes.DELETE({'collection':name}).$promise.then(function(d){$scope.getCollections();})};
      $scope.activateCollection = function(name) {
          catalogRes.PUT({'collection':name,'set':'active'}).$promise.then(function(d){
            $scope.getCollections();
          //  $scope.getGroups();
          //  $scope.getItems();
          })};
      $scope.similarModel = false; 
      $scope.getGroups = function(p) {if(p==undefined)p={}; gcatalogRes.get(p).$promise.then(function(d){$scope.groups = d;}); }
      $scope.getItems  = function(p) {if(p==undefined)p={}; gcatalogRes.get(p).$promise.then(function(d){$scope.data = d;}); }

      $scope.chooseCollection = function(v) {
          $scope.collectionToEdit = v;
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
            gcatalogRes.PUT({data:{info:$scope.tmpInfo,items:$scope.tmpGroup}}).$promise.then(function(d){
                $scope.chooseCollection($scope.collectionToEdit);
            }); 
            $scope.tmpGroup = [];
      }
      $scope.getCollections();
      $scope.catalogUploadStatus = '';
      $scope.options = {
        change: function (file) {
            $scope.file = file;
            var u = window.RESTurl+'/api/catalog?season='+$scope.catalogUploadSeason;
            file.$upload(u, {}).then(function(d){
                    /*$scope.data = d;*/
                    $scope.getCollections();
                    $scope.catalogUploadStatus = 'Файл успешно загружен';
                },function(d){$scope.catalogUploadStatus = 'Произошла ошибка при загрузке файла каталога';});
          }
      }

      $scope.data = catalogRes.collections({'target':'collection'}); 


  });
