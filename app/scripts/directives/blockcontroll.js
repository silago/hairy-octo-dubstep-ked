'use strict';

/**
 * @ngdoc directive
 * @name keddoApp.directive:blockControll
 * @description
 * # blockControll
 */
angular.module('frontendApp')
  .directive('blockControll', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.append('this is the blockControll directive');
      }
    };
  });
