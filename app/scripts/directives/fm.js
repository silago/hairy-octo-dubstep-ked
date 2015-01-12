'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:fm
 * @description
 * # fm
 */
angular.module('frontendApp')
  .directive('fm', function () {
    return {
      templateUrl: 'editable/files.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the fm directive');
      },
      controller: ["$scope","fileRes",function($scope,files) {

      $scope.file = {} //Модель
      $scope.options = {
        change: function (file) {
            var u = window.RESTurl+'/api/files';
            file.$upload(u, $scope.file)
          }
        }

      $scope.init = function(){
        fileRes.get({}).$promise.then(function(data){ $scope.items = data.data; });
      };


      }]
    };
  });
