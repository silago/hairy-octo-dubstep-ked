'use strict'

angular.module('frontendApp')
  .factory('pageRes', function ($resource) {
    return $resource(window.RESTurl+'/api/rate/:id/:rating',
                     {
                       id:'@url',
                       rating:'@rating'
                     },
                     {
                       PUT:{
                         withCredentials:true,
                         method:'PUT'
                        }
                     }
  )
  });
