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
        resource: "=resource",
        block: "=data"
      }
    };
  });
