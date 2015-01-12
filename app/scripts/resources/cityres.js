'use strict'

angular.module('frontendApp')
  .factory('cityRes', function ($resource) {
    return $resource(window.RESTurl+'/api/city',
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
