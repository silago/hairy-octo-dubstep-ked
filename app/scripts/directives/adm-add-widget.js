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
      templateUrl: 'editable/adm/createElementForm.html',
      controller: ["$scope","blocksFactory", function($scope,blocksFactory){

        $scope.file = {}
        $scope.options = {
          change: function (file) {
            file.$upload('http://localhost:5000/api/files', $scope.file)
            }
          }


        console.log('init controller');
        $scope.addBlock = function(i){
          var i_local = {}
          i_local.data = {};
          i_local.subitems = [];
          i_local.type = i.type;
          for (var d in i.data){
             i_local.data[d] = i.data[d];
          }
          blocksFactory.push(i_local);
        }

      }]

      }
  });
