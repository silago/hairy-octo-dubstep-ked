'use strict';

/**
 * @ngdoc function
 * @name keddoApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the keddoApp
 */
angular.module('frontendApp')
  .controller('UserCtrl', function ($scope,userRes) {
    $scope.addUser = function(u){
      userRes.PUT(u).$promise.then(function(data){
        $scope.data = data;
      },function(data){});
      u = undefined;
    }

    $scope.updateUser = function(u){
      userRes.POST(u).$promise.then(function(d){$scope.data=d; u = undefined;},function(d){u = undefined;});
    }

    $scope.init = function(){
        userRes.get({}).$promise.then(function(data){
          if (data){
              $scope.data = data;
          } else {
              //$scope.data = {'url':pageRes, subitems : [], meta:[{'description':''},{'keywords':''}] };
          }
        },function(data){
            //$scope.data = {'url':pageRes, subitems : [], meta:[{'description':''},{'keywords':''}] };
          });
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
