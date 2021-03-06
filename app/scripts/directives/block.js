'use strict';

/**
 * @ngdoc directive
 * @name keddoApp.directive:block
 * @description
 * # block
 */
angular.module('frontendApp')
  .directive('block', ["$compile","catalogRes","buyRes",function ($compile,catalogRes,buyRes) {
    return {
      templateUrl: function(elem,attrs){
        /* compile funct mus hel me*/
        var prefix = attrs.prefix || 'views';
        var result = attrs.template || prefix+'/renderers/block_holder.html'
        return result;
      },
      replace:true,
      restrict: 'E',
      scope: true,
      //controller:['$scope','ngDialog',function(){
      controller: ["$scope","ngDialog","$sce",function($scope,ngDialog,$sce,ngQuill){
        $scope.trust = $sce.trustAsHtml;
        $scope.updateElement = function (params){
          ngDialog.open({template:'editable/adm/updateElement.html',data:params});
        }
      }],
      link: function(scope,elem,attrs){
            scope.catalogCollectionTranslate = window.catalogCollectionTranslate;
            scope.catalogRes = catalogRes;
            scope.buyRes = buyRes;
            scope.innerHeight = angular.element(window).height();
            scope.innerWidth = angular.element(window).width();
            scope.f = 'fpp';
        }
    };
  }]);
