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
    var lang = $stateParams.lang;
    if (lang=='') lang = 'ru';
    //var parts = window.location.hash.split('?');
    //if (parts.length == 2) {
    //    parts = parts[1].split("&");
    //    var $_GET = {};
    //    for (var i = 0; i < parts.length; i++) {
    //        var temp = parts[i].split("=");
    //        $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
    //    }
    //    var lang = $_GET['lang'];
    //} else {
    //    var lang = 'ru';
    //}

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
            pageRes.POST({url:$scope.path,data:data,lang:lang}).$promise.then(function(data){
               $scope.page = data;
        },function(data){ alert('something go wrong');});
    }
    $scope.editMeta = function(){
            $scope.path = $stateParams.url;
            
            pageRes.get({'url':$scope.path,lang:lang}).$promise.then(function(data){
                    var p = data;
                    if (data.meta)
                        var meta = angular.fromJson(data.meta);
                    else var meta = {};
                     var dialog = ngDialog.open({template:'editable/adm/pageCreate.html',data:{'meta':meta}});
                     dialog.closePromise.then(function(d) {
                       //var new_page_data = d.value;
                       p.meta = d.value.meta;
                       p.asNews = d.value.asNews;
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
        pageRes.get({'url':$scope.path,lang:lang}).$promise.then(function(data){console.log(data);  $scope.page = (!!data.id ? data : {subitems:[]});
        if (!!$scope.page.meta) {$scope.page.meta = angular.fromJson($scope.page.meta);}

 });
    
};
});
