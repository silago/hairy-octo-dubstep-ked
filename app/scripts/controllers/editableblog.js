'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:EditableblogCtrl
 * @description
 * # EditableblogCtrl
 * Controller of the frontendApp
 */

angular.module('frontendApp') 
  .controller('EditableblogCtrl', function ($scope,blogRes,$stateParams,$state) {
        $scope.categories = blogRes.categories({'categories':'*'});
        $scope.page = blogRes.GET($stateParams); 

        $scope.saveCategories = function(data){
           blogRes.POST(data); 
        }

        $scope.changeCategory - function(){

        }

        $scope.savePage = function(indata){
                var data= indata;
                blogRes.POST({category:$stateParams.category,data:data}).$promise.then(function(data){
                 $scope.page = data;
            },function(data){ alert('something go wrong');});
        }
  });
