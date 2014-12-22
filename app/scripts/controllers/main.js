'use strict';
/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MainCtrl', function ($scope,$location,$stateParams,blockRes,pageRes,ngDialog,blocksFactory) {
    $scope.init = function(page_path){
        if (page_path==undefined){  $scope.path = $stateParams.url;    } else {  $scope.path = page_path; }
        pageRes.get({'url':$scope.path}).$promise.then(function(data){ $scope.page = (!!data.id ? data : {}); });
    };

});
