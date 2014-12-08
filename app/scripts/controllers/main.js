'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MainCtrl', function ($scope,$location,$routeParams,blockRes,pageRes) {

    $scope.pageRes =pageRes;

    $scope.init = function(){
        $scope.path = encodeURIComponent(encodeURIComponent($location.$$path));
        $scope.pageRes = pageRes;
        //$scope.w = angular.fromJson;
        window.rp = $routeParams;

        //$scope.page = pageRes.get({'url':$scope.path});
      if ($scope.page==[])
        $scope.page = {id:undefined,url:$routeParams.pageName, subitems:[]}



        $scope.info = "loaded";
        $scope.blockRes = blockRes;
        window.menu = $scope.menu = blockRes.GET({'id':1});
        /* $scope.data = {'center':
                            {id:0,
                            type:'bgvideo',
                            data:{
                                    'imgsrc':'zimages/bgwebm.jpg',
                                    'src'   :'images/bg.webm',
                                 },
        subitems: [

        {id:2,type:'html',data:{'html':''}},
        {id:0,type:'photo',data:{'src':'static/1.jpg'}},{id:1,type:'photo',data:{'src':'static/2.jpg'}}

  ]
                     }
        }; */
    };





 $scope.trash = [];
 $scope.list1 = {'subitems':[]};
 $scope.list2 = [];
   // $scope.saveMenu = function(data){
   //     menuSrvc.request('POST',angular.toJson(data),'').success(function(data){
   //         //$scope.menu = data;
   //         $scope.info = 'menu saved';
   //     });
   // };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
