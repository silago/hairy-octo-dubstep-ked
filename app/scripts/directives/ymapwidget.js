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
                    if (typeof(item.coords) =='string') {
                        item.coords = item.coords.split(' ');
                    }
                    if (item.coords.length == 1) {
                        item.coords = item.coords[0].split(',');
                    }
                    item.coords[0]=item.coords[0].replace(/[^\d.]/g,'');
                    item.coords[1]=item.coords[1].replace(/[^\d.]/g,'');
                        if (item.type=='firm')
                            var placemark = new ymaps.Placemark(item.coords, {balloonContent: item.description,hintContent: item.name},{iconImageHref: 'images/crown.png',
    iconLayout: 'default#image',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]

});
                        else
                            var placemark = new ymaps.Placemark(item.coords, {balloonContent: item.description,hintContent: item.name},{iconImageHref: 'images/crown.png'});
                        $scope.map.geoObjects.add(placemark);//new ymaps.Placemark(i.position,{balloonContent:i.name}));
                }

                angular.forEach($scope.block.data.countries,function($country,$country_key) {
                    angular.forEach($country.cities,function($city,$city_key) {
                        angular.forEach($city.shops,function($shop,$shop_key){
                            //$shop.coords = $shop.coords.replace(/\[^0-9 ]/g,'');
                            createMark($shop);
                        });
                    });
                });
              };
              ymaps.ready($scope.prepare);
      }],
      link: function postLink(scope, element, attrs) {
//          alert(1);
        
      //  element.text('this is the ymapwidget directive');
      }
    };
  }]);
