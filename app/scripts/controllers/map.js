'use strict';

/**
 * @ngdoc function
 * @name keddoApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the keddoApp
 */
angular.module('frontendApp')
  .controller('MapCtrl', function ($scope,$filter,ngDialog,mapRes,cityRes,$window) {

    $scope.prepare = function(){
       //alert(1);
       ymaps.ready(function() {
      mapRes.GET({}).$promise.then(function(d){
           $scope.markets = d.data;
           cityRes.GET({}).$promise.then(function(d){
               $scope.cities  = d.data;
                    $scope.map = new ymaps.Map('YMapsID', {
                            center: [0,0],
                            zoom: 12
                    });
                    $scope.makeMap();
            },function(d){});
        },function(d){});
    });}

    $scope.focusToLocation = function(location){
        if (typeof(location.position!='object')) {
            location.position=angular.fromJson(location.position);
       //     location.position=location.position.reverse();
            //var placemark = new ymaps.Placemark(location.position, { hintContent:location.name, showHintOnHover:true });
            //$scope.map.geoObjects.add(placemark);//new ymaps.Placemark(i.position,{balloonContent:i.name}));
        }
        $scope.map.setCenter(location.position);
        $scope.map.setZoom(12);
        
      }


  $scope.makeMap = function(){
    function createMark (item) {
        if (typeof(item.position!='object')) {
            item.position=angular.fromJson(item.position);
        //    item.position=item.position.reverse();
        }
            var placemark = new ymaps.Placemark(item.position, { hintContent:item.name, showHintOnHover:true });
            $scope.map.geoObjects.add(placemark);//new ymaps.Placemark(i.position,{balloonContent:i.name}));
    }

    for (var i = 0, l = $scope.markets.length; i < l; i++) {
         createMark($scope.markets[i]);
         console.log('createMark for'+$scope.markets[i].position);
    }
    $scope.focusToLocation

  };
  ymaps.ready($scope.prepare);

  // $scope.makeMap();
  });
