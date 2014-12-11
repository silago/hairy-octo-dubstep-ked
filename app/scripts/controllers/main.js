'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MainCtrl', function ($scope,$location,$routeParams,blockRes,pageRes,ngDialog,blocksFactory) {
    $scope.itemsStack = blocksFactory.get();
    $scope.pageRes =pageRes;

    $scope.createElement = function (){
      ngDialog.open({template:'views/adm/createElement.html'});
    }

    $scope.savePageData = function(data){

            pageRes.POST({url:$scope.path,data:data}).$promise.then(function(data){
               $scope.page = data;
        },function(data){ alert('something go wrong');});
    }
    $scope.savePage = function(data){
            if ($scope.page.id == undefined){
            var dialog = ngDialog.open({template:'views/adm/pageCreate.html'});
              dialog.closePromise.then(function(d) {
                // this must also save meta and update news
                $scope.savePageData(data);
              });
            } else {
               $scope.savePageData(data);
            }
    }
    $scope.init = function(){
        $scope.path = $routeParams.pageLocation;
        $scope.pageRes = pageRes;
        $scope.page = {};
        pageRes.get({'url':$scope.path}).$promise.then(function(data){
          if (data.id){
              $scope.page = data;
          } else {
              $scope.page = {'url':pageRes, subitems : [], meta:[{'description':''},{'keywords':''}] };
          }
        },function(data){

          $scope.page = {'url':pageRes, subitems : [], meta:[{'description':''},{'keywords':''}] };
          });


        $scope.info = "loaded";
        $scope.blockRes = blockRes;
        $scope.menu = blockRes.GET({'id':1});
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
