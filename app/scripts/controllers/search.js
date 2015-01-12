'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('SearchCtrl', function ($scope,$http,$stateParams) {
    $scope.data = [];
    var search_query = $stateParams.queryString;
    $scope.search_query=search_query;
    $scope.toJson = angular.toJson;
    $http.post(window.RESTurl+'/api/search',{data:search_query}).success(function(data,status){
      $scope.data = data; console.log('err');
      window.d = data;
    }).error(function(){console.log('ok');});

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
