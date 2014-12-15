'use strict';

/**
 * @ngdoc function
 * @name keddoApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the keddoApp
 */
angular.module('frontendApp')
  .controller('AuthCtrl', function ($scope,$cookieStore,userRes) {
    userRes.GET({}).$promise.then(function(data){
      $scope.user = data;
    });

    window.d = userRes;

    $scope.auth = function(data) {
      var username = data.username;
      var password = btoa(data.password);
      userRes.POST({data:{username:username,password:password}}).$promise.then(function(d){
          $scope.user = d;
          $cookieStore.put('token',d.token);
          window.c = $cookieStore;
      });
    };
  });
