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
      controller: ["$scope","blocksFactory","fileRes", function($scope,blocksFactory,fileRes){


      $scope.file = {} //Модель
      $scope.filePreview = {}
      //$scope.saveFiles = function() {

      //}
      $scope.options = {
        change: function (file) {
            var u = window.RESTurl+'/api/files';
            file.$preview({}).then(function(d) { $scope.filePreview = d; console.log(d); });
            //file.$upload(u, $scope.file).then(function(d){ $scope.getStaticFiles();},function(d){});
          }
        }

      $scope.getStaticFiles = function(){
        fileRes.get({}).$promise.then(function(data){ $scope.staticFiles = data.data; });
      };

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
