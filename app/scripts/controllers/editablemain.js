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
            pageRes.POST({url:$scope.path,data:data}).$promise.then(function(data){
               $scope.page = data;
        },function(data){ alert('something go wrong');});
    }

    $scope.savePage = function(data){
            if ($scope.page.id == undefined){
            var dialog = ngDialog.open({template:'editable/adm/pageCreate.html'});
              dialog.closePromise.then(function(d) {
                var new_page_data = d.value;
                pageRes.PUT({url:$scope.path,data:new_page_data}).$promise.then(function(a){
                  $scope.savePageData(data);
                });
              });
            } else {
               $scope.savePageData(data);
            }
    }


    $scope.getTemplate = templates.getTemplate;
    $scope.init = function(page_path){
        if (page_path==undefined){  $scope.path = $stateParams.url;    } else {  $scope.path = page_path; }
        pageRes.get({'url':$scope.path}).$promise.then(function(data){ $scope.page = (!!data.id ? data : {subitems:[]}); });
    };
});
