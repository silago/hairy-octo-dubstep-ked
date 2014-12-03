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
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the block directive');
      }
    };
  });
