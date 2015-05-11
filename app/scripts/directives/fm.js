'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:fm
 * @description
 * # fm
 */


angular.module('frontendApp')
  .directive('fm',['$resource','fileRes','$compile', function ($resource,fileRes,$compile) {
    return {
      restrict: 'E',
      scope: {
        dir:'@dir',
        result:'=result',
      },
      template: ''+
                '<div ng-init="f = getFiles(dir);">'+
                '     <a ng-click="f = getFiles(dir);" class="fi-refresh">  </a><br/>'+
                '     <ul style="list-style:none; padding-left:10px;" ng-if="f">'+
                '         <li ng-repeat="file in f.data">'+
                '              <span class="fi-folder" ng-if="file.type==\'dir\'">⊷ <a href   ng-click="showTree($event,\'{{dir}}{{file.path}}/\')"> {{file.path}} </a></span>'+
                '              <span class="fi-photo" ng-if="file.type!=\'dir\'"><a  href ng-click="makeResult(\'{{static_prefix}}{{dir}}{{file.path}}\');" > {{file.path}} </a> <a href="{{static_prefix}}{{dir}}{{file.path}}" target="_blank" class="fi-eye"></a></span>'+ 
                '         </li>'+
                '     </ul>'+
                ' <div>'+
                '',
      link: function postLink(scope, element, attrs) {
      //  [ ]
        /*
           ⊷  root  
               ⊷  home  
                   ⊷  silago  
                    ◉ me.jpg
                    ◉ fox.jpg`
        */
      //  element.text('this is the fm directive');
      },
      controller: ["$scope","fmConfig",function($scope,fmConfig) {
      if (typeof($scope.result) == 'undefined') {
        $scope.result = false;
      }

      $scope.makeResult = function(data) {
        $scope.result = data;
      }
      $scope.showTree = function(e,target) {
            //console.log(e);
            //console.log(target);
            var html = '<fm result="result" dir="'+target+'">huita</fm>';
            console.log(html);
            var content = $compile(html)($scope);
            console.log(content);
            var element = angular.element(e.target); 
            

            //console.log(element);
            var new_fm = new angular.element('<div></div>');
            console.log(new_fm);
            new_fm.append(content);
            element.after(new_fm);
            //new_fm.html('<fm dir="'+target+'"></fm>');
            //$compile(new_fm.contents());
            //element.append(new_fm);
            //console.log(new_fm);
      }
      var d_url = fmConfig.config.destionation_url;
      $scope.static_prefix = fmConfig.config.static_prefix;
      var fr =  $resource(d_url+'/:url/',
                     {
                       url:'@url'
                     },
                     {
                       GET:{
                         method:'GET',
                         withCredentials:true
                       },
                       POST:{
                         method:'POST',
                         params: {},
                         withCredentials:true
                        },
                       DELETE:{
                         method:'DELETE',
                         withCredentials:true
                        },
                       PUT:{
                         method:'PUT'
                        }
                     }
      );
      //alert(fr);
      //window.fr = fr;
      $scope.getFiles = function(url) {
        if (typeof(url) == 'undefined') {
            url = null;
        } else {
            url = encodeURIComponent(encodeURIComponent(url));
        }
        return fr.GET({url:url});
      }      

      //$scope.getFiles = function(){
      //  fileRes.get({}).$promise.then(function(data){ $scope.staticFiles = data.data; });
      //};


      $scope.file = {} //Модель
      $scope.options = {
        change: function (file) {
            var u = window.RESTurl+'/api/files';
            file.$upload(u, $scope.file)
          }
        }

      $scope.init = function(){
        fileRes.get({}).$promise.then(function(data){ $scope.items = data.data; });
      };


      }]
    };
  }]);
