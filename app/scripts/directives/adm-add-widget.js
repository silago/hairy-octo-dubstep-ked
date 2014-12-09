'use strict';

/**
 * @ngdoc directive
 * @name keddoApp.directive:admAddWidget
 * @description
 * # admAddWidget
 */
angular.module('frontendApp')
  .directive('admWidget', function () {
    //model = something;
    //hint  = something;
    return {
      scope:{item:'=item', type:'@itemType'},
      replace:true,
      templateUrl: 'views/adm/createElementForm.html'
      }
  });
