'use strict'

angular.module('frontendApp')
  .factory('userRes', function ($resource) {
    return $resource(window.RESTurl+'/api/user/',
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
                         params: {}
                        },
                       PUT:{
                         method:'PUT'
                        }
                     }
  )
  });
