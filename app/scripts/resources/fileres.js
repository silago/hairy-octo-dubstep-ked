'use strict'
angular.module('frontendApp')
  .factory('fileRes', function ($resource) {
    return $resource(window.RESTurl+'/api/files',
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
  )
  });
