'use strict';

/**
 * @ngdoc function
 * @name keddoApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the keddoApp
 */
angular.module('frontendApp')
  .controller('UserCtrl', function ($scope,userRes,rightsRes,$cookieStore) {

   var role_id = $cookieStore.get('role_id');
   if (!role_id || role_id == 0) {
        $location.path("page/index")
   }

    $scope.addUser = function(u){
      userRes.PUT(u).$promise.then(function(data){
        $scope.data = data;
      },function(data){});
      u = undefined;
    }

    $scope.saveModRights = function() {
      rightsRes.POST({'id':1,'data':$scope.rights}).$promise.then(function(data){ if (data){  $scope.rights = data; } },function(data){ });
    }

    $scope.updateUser = function(u){
      userRes.POST(u).$promise.then(function(d){$scope.data=d; u = undefined;},function(d){u = undefined;});
    }

    $scope.init = function(){
      /* magic number (1) : ---moderator */
      userRes.get({}).$promise.then(function(data){ if (data){  $scope.data = data; } },function(data){ });
      rightsRes.get({id:1}).$promise.then(function(data){ if (data){  $scope.rights = data; } },function(data){ });
    };
    //userRes.POST({url:$scope.path,data:data}).$promise.then(function(data){
    //
    //});

    //    $scope.awesomeThings = [
    //      'HTML5 Boilerplate',
    //      'AngularJS',
    //      'Karma'
    //    ];
  });
