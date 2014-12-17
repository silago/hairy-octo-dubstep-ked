'use strict';

/**
 * @ngdoc directive
 * @name keddoApp.directive:block
 * @description
 * # block
 */
angular.module('frontendApp')
  .directive('block', function () {
    return {
      templateUrl: 'views/renderers/block_holder.html',
      replace:true,
      restrict: 'E',
      scope: {
        block: "=data", isEditable:"=isEditable"
      },
      //controller:['$scope','ngDialog',function(){
      controller: ["$scope","ngDialog",function($scope,ngDialog,ngQuill){
        $scope.updateElement = function (params){
          ngDialog.open({template:'views/adm/updateElement.html',data:params});
        }
      }]
    };
  });
