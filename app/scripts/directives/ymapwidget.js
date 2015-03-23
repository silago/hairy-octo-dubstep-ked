'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:ymapwidget
 * @description
 * # ymapwidget
 */
angular.module('frontendApp')
  .directive('ymapwidget',['$window', function ($window) {
    return {
      templateUrl: 'views/renderers/ymapwidget.html',
      scope:true,
      restrict: 'E',
      controller: ["$scope",function($scope){
                function geo() {
                    if (navigator.geolocation) {        navigator.geolocation.getCurrentPosition(setPosition);
                    } else { console.log('no geolocation available'); setPosition(false);  }
                }
                
                function setPosition(position) {
                    var coords = [55.7522200,37.6155600];
                    if(position) {
                       coords = [position.coords.latitude, position.coords.longitude];
                    } else { }
                    $scope.focusToLocation(coords);
                 }

                $scope.prepare = function(){
                   ymaps.ready(function() {
                    //  mapRes.GET({}).$promise.then(function(d){
                    //       $scope.markets = d.data;
                    //       cityRes.GET({}).$promise.then(function(d){

                    //           $scope.cities  = d.data;
                    //                $scope.map = new ymaps.Map('YMapsID', {
                    //                        center: [0,0],
                    //                        zoom: 12
                    //                });
                    //                $scope.makeMap();
                    //                geo();
                    //        },function(d){});
                    //    },function(d){});

                                  $scope.map = new ymaps.Map('YMapsID', {
                                          center: [0,0],
                                          zoom: 12
                                  });
                                  $scope.makeMap();
                                  geo();
                    });}

                $scope.focusToLocation = function(coords){
                    if (typeof(coords!='object')) {
                        coords=angular.fromJson(coords);
                    }
                    $scope.map.setCenter(coords);
                    $scope.map.setZoom(12);
                    
                  }


              $scope.makeMap = function(){
                function createMark (item) {
                    console.log(item);
                    if (typeof(item.coords!='object')) {
                    //    item.position=angular.fromJson(item.coords);
                    item.coords = item.coords.split(' ');
                    }
                        var placemark = new ymaps.Placemark(item.coords, {
                                balloonContent: item.description,
                                hintContent: item.name, 
                            });
                        $scope.map.geoObjects.add(placemark);//new ymaps.Placemark(i.position,{balloonContent:i.name}));
                }

                for (var i = 0, il = $scope.block.data.countries.length; i < il; i++) 
                    for (var k = 0, kl = $scope.block.data.countries[i].cities.length; k < kl; k++) 
                        for (var j = 0, jl = $scope.block.data.countries[i].cities[k].shops.length; j < jl; j++) {
                           createMark($scope.block.data.countries[i].cities[k].shops[j]);
                  }
              };
              ymaps.ready($scope.prepare);
      }],
      link: function postLink(scope, element, attrs) {
//          alert(1);
        
      //  element.text('this is the ymapwidget directive');
      }
    };
  }]);
