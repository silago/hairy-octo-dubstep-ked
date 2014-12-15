'use strict'

angular.module('frontendApp')
  .factory('userRes', function ($resource) {
    return $resource(window.RESTurl+'/api/user/',
                     {
                       url:'@url'
                     },
                     {
                       GET:{
                         method:'GET'
                       },
                       POST:{
                         method:'POST'
                        },
                       PUT:{
                         method:'PUT'
                        }
                     }
  )
  });
