'use strict';

/**
 * @ngdoc function
 * @name keddoApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the keddoApp
 */
angular.module('frontendApp')
  .controller('MapCtrl', function ($scope,$filter,ngDialog,mapRes,cityRes) {

    $scope.init = function(){
       mapRes.GET({}).$promise.then(function(d){$scope.markets = d.data; $scope.makeMap();},function(d){});
       cityRes.GET({}).$promise.then(function(d){$scope.cities  = d.data;},function(d){});
    }

    $scope.focusToLocation = function(){
        $scope.map.setCenter($scope.location);
        $scope.map.setZoom(12);
      }


  $scope.makeMap = function(){
    function deleteMark (e,o){
         var deleteMark = confirm('Удалить отметку?');
         if (deleteMark) {
             var objToFind = {
               position: e.get('target').geometry.getCoordinates(),
               name:     e.get('target').properties.get('hintContent')
               };
             var idInScopeMarkets = searchInMarketsByCoords(objToFind.position);
             $scope.markets.splice(idInScopeMarkets,1);
             $scope.map.geoObjects.remove(e.get('target'));
         }
         e.stopPropagation();
    }

    $scope.map = new ymaps.Map('YMapsID', {
            center: $scope.markets[0].position || [50,50955,30.60891],
            zoom: 12
    });

  };
  ymaps.ready($scope.init);
  });
