'use strict'

angular.module('frontendApp')
  .factory('pageRes', function ($resource) {
    return $resource(window.RESTurl+'/api/page/:url',
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
