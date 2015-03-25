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
                    if (typeof(item.coords) =='string') {
                    //    item.position=angular.fromJson(item.coords);
                        item.coords = item.coords.split(' ');
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
              // var ik = Object.keys($scope.block.data.countries); 
              //  for (var i = 0; i < ik.length; i++) 
              //  console.log('1__');
              //      console.log(i<ik.length);
              //      console.log(i+'<'+ik.length);
              //      console.log(ik.length);
              //      console.log(ik);
              //      console.log(i);
              //      console.log(ik[i]);
              //      console.log($scope.block.data.countries[i]);
              //      console.log($scope.block.data.countries[ik[i]].cities);
              //      for (var k = 0, kk = Object.keys($scope.block.data.countries[i].cities); k < kk.length; k++) 
              //  console.log('2__');
              //          for (var j = 0, jk = Object.keys($scope.block.data.countries[i].cities[k].shops); j < jk; j++) {
              //  console.log('3__');
              //             
              //              if (typeof($scope.block.data.countries[i].cities[k].shops[j].coords!='object')) {
              //             
              //                  
              //                  //console.log($scope.block.data.countries[i].cities[k].shops[j]);
              //                  $scope.block.data.countries[i].cities[k].shops[j].coords=
              //                  $scope.block.data.countries[i].cities[k].shops[j].coords.replace(/\[^0-9 ]/g,'');
              //              }
              //             createMark($scope.block.data.countries[i].cities[k].shops[j]);
              //    }
              };
              ymaps.ready($scope.prepare);
      }],
      link: function postLink(scope, element, attrs) {
//          alert(1);
        
      //  element.text('this is the ymapwidget directive');
      }
    };
  }]);
