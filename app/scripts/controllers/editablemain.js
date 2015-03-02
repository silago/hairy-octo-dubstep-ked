'use strict';
/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('EditablemainCtrl', function ($scope,$location,$stateParams,$cookieStore,blockRes,pageRes,ngDialog,blocksFactory,authRes,templates) {
   $scope.RESTurl = window.RESTurl;
   document.body.style.MozUserSelect="none";
   var role_id = $cookieStore.get('role_id');
   if (!role_id || role_id == 0) {
        $location.path("page/index")
   }

  $scope.sortableOptions = {
    containment: '#sortable-container'
  };

   $scope.itemsStack = blocksFactory.get();
   window.stack = $scope.itemsStack;
   $scope.pageRes =  pageRes;
   $scope.blockRes = blockRes;
   $scope.createElement = function (){
      ngDialog.open({template:'editable/adm/createElement.html'});
    }

    $scope.savePageData = function(data){
            //$scope.page.subitems  = data.subitems;
            pageRes.POST({url:$scope.path,data:data}).$promise.then(function(data){
               $scope.page = data;
        },function(data){ alert('something go wrong');});
    }
    $scope.editMeta = function(){
            console.log('going to edit meta');
            $scope.path = $stateParams.url;
            console.log('path='+$stateParams.url);
            
            pageRes.get({'url':$scope.path}).$promise.then(function(data){
                    var p = data;
                    if (data.meta)
                        var meta = angular.fromJson(data.meta);
                    else var meta = {};
                     var dialog = ngDialog.open({template:'editable/adm/pageCreate.html',data:{'meta':meta}});
                     dialog.closePromise.then(function(d) {
                       //var new_page_data = d.value;
                       console.log(d.value);
                       p.meta = d.value.meta;
                       p.asNews = d.value.asNews;
                        console.log(p);
                       $scope.savePageData(p);
                     });
            //    }
            
            });

    }

    $scope.savePage = function(){
            if ($scope.page.id == undefined){
             $scope.editMeta();
            } else {
               $scope.savePageData($scope.page);
            }
    }


    $scope.getTemplate = templates.getTemplate;
    $scope.init = function(page_path){
        if (page_path==undefined){  $scope.path = $stateParams.url;    } else {  $scope.path = page_path; }
        pageRes.get({'url':$scope.path}).$promise.then(function(data){console.log(data);  $scope.page = (!!data.id ? data : {subitems:[]});
        if (!!$scope.page.meta) {$scope.page.meta = angular.fromJson($scope.page.meta);}

 });
    
};
});
