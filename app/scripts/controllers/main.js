'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MainCtrl', function ($scope,menuSrvc) {

    $scope.init = function(){
        $scope.info = "loaded";
        menuSrvc.request('GET',{},'').success(function(data){
            $scope.menu = data;
        });
    }    
 $scope.trash = [];
 $scope.list1 = {'subitems':[]};
$scope.list2 = [];
    $scope.saveMenu = function(data){
        menuSrvc.request('POST',angular.toJson(data),'').success(function(data){
            //$scope.menu = data;
            $scope.info = 'menu saved';
        });
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
