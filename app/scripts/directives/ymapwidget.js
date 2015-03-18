'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:ymapwidget
 * @description
 * # ymapwidget
 */
angular.module('frontendApp')
  .directive('ymapwidget', function () {
    return {
      templateUrl: 'views/renderers/ymapwidget.html',
      scope:true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
//          alert(1);
        
      //  element.text('this is the ymapwidget directive');
      }
    };
  });
