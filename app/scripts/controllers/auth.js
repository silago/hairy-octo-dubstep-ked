'use strict';

/**
 * @ngdoc function
 * @name keddoApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the keddoApp
 */
angular.module('frontendApp')
  .controller('AuthCtrl', function ($scope,$location,$cookieStore,authRes) {
    authRes.GET({}).$promise.then(function(data){
      $scope.user = data;
    });

    $scope.logout = function(){
    ///  authRes.DELETE({}).$promise.then( function(d) {$route.reload();});
    }

    $scope.login = function(data) {
      var username = data.username;
      var password = btoa(data.password);
      authRes.POST({data:{username:username,password:password}}).$promise.then(function(d){
          $cookieStore.put('role_id',d.role_id);
          window.c = $cookieStore;
      });
    };
  });
