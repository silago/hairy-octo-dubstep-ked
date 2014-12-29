'use strict'

angular.module('frontendApp')
  .factory('authRes', function ($resource) {
    return $resource(window.RESTurl+'/api/auth/',
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
                         withCredentials:true,
                         method:'PUT'
                        }
                     }
  )
  });
