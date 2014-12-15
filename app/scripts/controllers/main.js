'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MainCtrl', function ($scope,$location,$routeParams,blockRes,pageRes,ngDialog,blocksFactory) {
    $scope.itemsStack = blocksFactory.get();
    $scope.pageRes =  pageRes;
    $scope.blockRes = blockRes;
    //$scope.topMenu =  blockRes.GET({alias:'::topMenu'});
    $scope.page = {};

    /*
      $scope.topMenu = {};
      $scope.
    */

    $scope.createElement = function (){
      ngDialog.open({template:'views/adm/createElement.html'});
    }

    $scope.savePageData = function(data){
            pageRes.POST({url:$scope.path,data:data}).$promise.then(function(data){
               $scope.page = data;
        },function(data){ alert('something go wrong');});
    }

    $scope.savePage = function(data){
            if ($scope.page.id == undefined){
            var dialog = ngDialog.open({template:'views/adm/pageCreate.html'});
              dialog.closePromise.then(function(d) {
                var new_page_data = d.value;
                pageRes.PUT({url:$scope.path,data:new_page_data}).$promise.then(function(a){
                  $scope.savePageData(data);
                });
              });
            } else {
               $scope.savePageData(data);
            }
    }

    $scope.init = function(page_path){
      if (page_path==undefined){
        $scope.path = $routeParams.pageLocation;
      } else {
        $scope.path = page_path;
      }

        pageRes.get({'url':$scope.path}).$promise.then(function(data){
          if (data.id){
              $scope.page = data;
          } else {
              $scope.page = {'url':pageRes, subitems : [], meta:[{'description':''},{'keywords':''}] };
          }
        },function(data){

          $scope.page = {'url':pageRes, subitems : [], meta:[{'description':''},{'keywords':''}] };
          });
    };
  });
