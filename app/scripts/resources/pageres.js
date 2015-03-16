'use strict'

angular.module('frontendApp')
  .factory('pageRes', function ($resource) {
    return $resource(window.RESTurl+'/api/page/:url/',
                     {
                       url:'@url',
                       lang:'@lang'
       //alert(1);
                     },
                     {
                       GET:{
                         withCredentials:true,
                         method:'GET'
                       },
                       POST:{
                         withCredentials:true,
                         method:'POST'
                        },
                       PUT:{
                         withCredentials:true,
                         method:'PUT'
                        }
                     }
  )
  });
