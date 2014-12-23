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
      templateUrl: function(elem,attrs){
        console.log(attrs);
        var prefix = attrs.template || 'views/';
        var result = attrs.template || prefix+'renderers/block_holder.html'
        return result;
      },
      replace:true,
      restrict: 'E',
      scope: {
        block: "=data", isEditable:"=isEditable"
      },
      //controller:['$scope','ngDialog',function(){
      controller: ["$scope","ngDialog",function($scope,ngDialog,ngQuill){
        $scope.updateElement = function (params){
          ngDialog.open({template:'editable/adm/updateElement.html',data:params});
        }
      }]
    };
  });
