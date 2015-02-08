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

    $scope.prepare = function(){
       mapRes.GET({}).$promise.then(function(d){
            $scope.markets = d.data;
            cityRes.GET({}).$promise.then(function(d){
                $scope.cities  = d.data;
                    $scope.map = new ymaps.Map('YMapsID', {
                            center: $scope.markets[0].position || [50,50955,30.60891],
                            zoom: 12
                    });
                    $scope.makeMap();
            },function(d){});
        },function(d){});
    }

    $scope.focusToLocation = function(location){
        $scope.map.setCenter(location.position);
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


    function createMark (item) {
            var placemark = new ymaps.Placemark(item.position, { hintContent:item.name, showHintOnHover:true });
            $scope.map.geoObjects.add(placemark);//new ymaps.Placemark(i.position,{balloonContent:i.name}));
    }

    for (var i = 0, l = $scope.markets.length; i < l; i++) {
         createMark($scope.markets[i]);
    }

  };
  ymaps.ready($scope.prepare);
  // $scope.makeMap();
  });
