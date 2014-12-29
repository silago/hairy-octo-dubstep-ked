'use strict';

/**
 * @ngdoc function
 * @name keddoApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the keddoApp
 */
angular.module('frontendApp')
  .controller('MapCtrl', function ($scope,$filter,ngDialog) {

   $scope.moveMapTo = function(coords){
      $scope.map.setCenter(coords);
   }


  $scope.init = function(){
  $scope.markets = [
                {
                    center: [50.426472, 30.563022],
                    name: "Монумент &quot;Родина-Мать&quot;"
                },
                {
                    center: [50.50955, 30.60791],
                    name: "Ресторан &quot;Калинка-Малинка&quot;"
                },
    ];



    function createMark (item, collection) {
            var placemark = new ymaps.Placemark(item.center, { balloonContent: item.name });
            collection.add(placemark);
    }

    $scope.map = new ymaps.Map('YMapsID', {
            center: [50.443705, 30.530946],
            zoom: 14
    });

    $scope.map.events.add('dblclick',function(e){
        var pos = e.get('coords');
        var name = prompt('Введите имя новой метки');
        var i = {
           center:pos,
           name:name
        }
        $scope.map.geoObjects.add(new ymaps.Placemark(i.center,{balloonContent:i.name}));
        $scope.markets.push(i);
        return false;
    });



   var collection = new ymaps.GeoObjectCollection(null, { preset: 'island#redIcon' });
   $scope.map.geoObjects.add(collection);
   for (var i = 0, l = $scope.markets.length; i < l; i++) {
       createMark($scope.markets[i],collection);
    }



  window.mm = $scope.map;

  };
  ymaps.ready($scope.init);
  window.z = $scope.init;
  });
