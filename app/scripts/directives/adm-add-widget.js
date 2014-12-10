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
      templateUrl: 'views/adm/createElementForm.html',
      controller: ["$scope","blocksFactory", function($scope,blocksFactory){
        console.log('init controller');
        $scope.addBlock = function(item){
          console.log('adding blocks');
          console.log(item);
          blocksFactory.push(item);
        }

      }]

      }
  });
