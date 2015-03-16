'use strict';

/**
 * @ngdoc function
 * @name keddoApp.controller:EditablemapCtrl
 * @description
 * # EditablemapCtrl
 * Controller of the keddoApp
 */
angular.module('frontendApp')
  .controller('EditablemapCtrl', function ($scope,$filter,ngDialog,mapRes,cityRes,$cookieStore,$window) {
    var parts = window.location.hash.split('?');
    if (parts.length == 2) {
        parts = parts[1].split("&");
        var $_GET = {};
        for (var i = 0; i < parts.length; i++) {
            var temp = parts[i].split("=");
            $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
        }
        var lang = $_GET['lang'];
    } else {
        var lang = 'ru';
    }
    console.log(lang);


   var role_id = $cookieStore.get('role_id');
   if (!role_id || role_id == 0) {
        $location.path("page/index")
   }

    $scope.save= function(){
            mapRes.POST({data:$scope.markets}).$promise.then(function(data){
        },function(data){ alert('something go wrong');});

            cityRes.POST({data:$scope.cities}).$promise.then(function(data){
        },function(data){ alert('something go wrong');});
    }

    $scope.prepare= function(){
       mapRes.GET({}).$promise.then(function(d){
            $scope.markets = d.data; 
            cityRes.GET({}).$promise.then(function(d){$scope.cities  = d.data;
                $scope.makeMap();
            },function(d){});
        },function(d){});
    }

    $scope.focusToLocation = function(location){
        $scope.map.setCenter(location.position);
        $scope.map.setZoom(12);
        
      }

    function searchInMarketsByCoords(coords){
      var scopeMarkets = $scope.markets;
      for (var i=0; i<scopeMarkets.length; i++) {
        if (scopeMarkets[i].position == coords) {
          return i;
        }
      }
      return -1;

    }

    function mapDialog(pos){
            var dialog = ngDialog.open({template:'editable/adm/mapDialog.html',scope:$scope});
            dialog.closePromise.then(function(d) {
              var mark_data = d.value;
              console.log(mark_data);
              if (mark_data.type=='city') {
                 createCityMark(pos,mark_data.label);
              } else if (mark_data.type == 'market') {
                 createMarketMark(pos,mark_data.label,mark_data.address,mark_data.city_id);
              }
              //var new_page_data = d.value;
            });
    }

    $scope.deleteCity = function() {
      for (var i=0; i<$scope.cities.length; i++) {
        if ($scope.cities[i].position == $scope.location.position) {
          $scope.cities.splice(i,1);
          return i;
        }
      }
      return -1;
    }

    function createMarketMark(position,label,city_id) {
      var i = {position:position,name:label,address:address,city_id:city_id};
      $scope.map.geoObjects.add(new ymaps.Placemark(i.position,{balloonContent:i.address,hintContent:i.name}));
      $scope.markets.push(i);
    }

    function createCityMark(position,label) {
      var i = {position:position,name:label};
      $scope.cities.push(i);
    }
    function deleteMark (e,o){
         var dm = confirm('Удалить отметку?');
         if (dm) {
             var objToFind = {
               position: e.get('target').geometry.getCoordinates(),
               };
             var idInScopeMarkets = searchInMarketsByCoords(objToFind.position);
             console.log(idInScopeMarkets);
             $scope.markets.splice(idInScopeMarkets,1);
             $scope.map.geoObjects.remove(e.get('target'));
         }
         window.__e = e;
         window.__m = $scope.map;
         e.stopPropagation();
    }

    function createMark (item) {
            var placemark = new ymaps.Placemark(item.position, { 
                    // hintContent:item.name, showHintOnHover:true
                    balloonContent: item.address,
                    hintContent: item.name, 
             });
            placemark.events.add('click', function(e,o){
              deleteMark(e,o);
            });
            $scope.map.geoObjects.add(placemark);//new ymaps.Placemark(i.position,{balloonContent:i.name}));
            //collection.add(placemark);
    }
  $scope.makeMap = function(){

        $scope.map = new ymaps.Map('YMapsID', {
                center: ($scope.markets[0] ? $scope.markets[0].position : [50,50955,30.60891]),
                zoom: 12
        });

    $scope.map.events.add('dblclick',function(e){
        e.stopPropagation();
        var pos = e.get('coords');
        console.log(pos);;
        mapDialog(pos);
        e.stopPropagation();

    });



    for (var i = 0, l = $scope.markets.length; i < l; i++) {
         createMark($scope.markets[i]);
    }

  };
  ymaps.ready($scope.prepare);
  });
