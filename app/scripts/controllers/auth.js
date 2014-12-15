'use strict';

/**
 * @ngdoc function
 * @name keddoApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the keddoApp
 */
angular.module('frontendApp')
  .controller('AuthCtrl', function ($scope,userRes) {
    userRes.GET({}).$promise.then(function(data){
      $scope.user = data;
    });


    $scope.auth = function(data) {
      var username = data.username;
      var password = btoa(data.password);
      userRes.POST({data:{username:username,password:password}});
    };
  });
