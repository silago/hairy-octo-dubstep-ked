'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MainCtrl', function ($scope,$location,$routeParams,blockRes,pageRes,ngDialog) {

    $scope.pageRes =pageRes;

    $scope.createElement = function (){
      ngDialog.open({template:'views/adm/createElement.html'});
    }


    $scope.init = function(){
        $scope.path = $routeParams.pageLocation;
        $scope.pageRes = pageRes;
        pageRes.get({'url':$scope.path}).$promise.then(function(data){
          if (data.id == undefined) {
            $scope.page = {'url':pageRes, subitems : [], meta:[{'description':''},{'keywords':''}] }
          }
          else $scope.page = data;
        });
        //$scope.w = angular.fromJson;

        //$scope.page = pageRes.get({'url':$scope.path});
        //if ($scope.page==[])
        //$scope.page = {id:undefined,url:$routeParams.pageName, subitems:[]}


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
