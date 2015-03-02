'use strict';
/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MainCtrl', function ($scope,$document,$cookieStore,$location,$stateParams,blockRes,catalogRes,pageRes,ngDialog,blocksFactory,authRes,templates,$sce) {

    $scope.meta = {};
    $scope.trust = $sce.trustAsHtml;
     var role_id = $cookieStore.get('role_id');
       if (role_id && role_id != 0) {
           $scope.isLoggined = true;
       }

    function isDone(){
      window.$$ctrlInited--;
      if (window.$$ctrlInited<=0) {
        $scope.htmlReady();
      }

    }

    $scope.findScrollAnchors = function() {
       var anchors = document. getElementsByClassName('scrollAnchor');
       $scope.anchors = anchors;
       console.log(anchors);
    }

    $scope.scrollTo = function(index) {
           var someElement = document.getElementsByClassName('scrollAnchor')[index];
           $document.scrollToElement(someElement);

    }

    if (window.$$ctrlInited == undefined) {
          window.$$ctrlInited = 1;
    } else {
          window.$$ctrlInited++;
    }

    $scope.limit = 10;
    $scope.scroll = function(){
      $scope.limit++;
    }


    //выпилить
    $scope.search=function(q){
    }

    //выпилить
    $scope.getTemplate = function(template) {
      var  folder_prefix='views/';
      var result = folder_prefix+=template;
      return result;
    };

    $scope.title = 'qweqwe';
    $scope.init = function(page_path){
        if (page_path==undefined){  $scope.path = $stateParams.url;    } else {  $scope.path = page_path; }

      pageRes.get({'url':$scope.path}).$promise
      .finally(function(){isDone();})
      .then(function(data){ $scope.page = (!!data.id ? data : {});
                            //$scope.findScrollAnchors();
                            $scope.meta = data.meta;
                          });
    };


});
