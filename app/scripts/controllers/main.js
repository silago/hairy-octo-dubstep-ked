'use strict';
/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MainCtrl', function ($scope,$cookieStore,$location,$stateParams,blockRes,pageRes,ngDialog,blocksFactory,authRes,templates) {

    $scope.getTemplate = function(template) {
      var role_id = $cookieStore.get('role_id') || 0;
      var folder_prefix='';
      if (role_id) {
        folder_prefix='editable/';
      } else {
        folder_prefix='views/';
      }

      var result = folder_prefix+=template;
      return result;
    };

    $scope.init = function(page_path){
        if (page_path==undefined){  $scope.path = $stateParams.url;    } else {  $scope.path = page_path; }

        pageRes.get({'url':$scope.path}).$promise.then(function(data){ $scope.page = (!!data.id ? data : {}); });
    };
});
