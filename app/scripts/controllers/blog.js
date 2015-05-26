'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp') 
  .controller('BlogCtrl', function ($scope,blogRes,$stateParams,$state,$window) {
        var offset = 0;
        var limit  = 1;
        $scope.categories = blogRes.categories({'categories':'*'});
        $scope.page = blogRes.GET($stateParams); 
        $scope.window = $window;
        $scope.loadMore = function() {
            if ($stateParams.alias) 
                return false;
            if (typeof($scope.page.subitems)=='undefined') 
                return false;
            offset++;
            var params = $stateParams;
            params.offset = offset;
            blogRes.GET(params).$promise.then(function(data){
                $scope.page.subitems = $scope.page.subitems.concat(data.subitems);
            });
        }
  });
