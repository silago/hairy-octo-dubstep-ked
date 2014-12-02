'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MainCtrl', function ($scope,menuSrvc) {

    $scope.init = function(){
        $scope.info = "loaded";
        $scope.menu = [{'id':1,'title':'Menu Item 1','url':'#','subitems':[{'id':2,'title':'sub','url':'#'}]}];
        $scope.data = {'center':
                            {id:0,
                            type:'bgvideo',
                            data:{
                                    'imgsrc':'images/bgwebm.jpg',
                                    'src'   :'images/bg.webm',
                                 },
                            subitems: []
                     }
        };
    };
        /*
        menuSrvc.request('GET',{},'').success(function(data){
            $scope.menu = data;
        });
        */
 

    
    
    
 $scope.trash = [];
 $scope.list1 = {'subitems':[]};
 $scope.list2 = [];
    $scope.saveMenu = function(data){
        menuSrvc.request('POST',angular.toJson(data),'').success(function(data){
            //$scope.menu = data;
            $scope.info = 'menu saved';
        });
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
