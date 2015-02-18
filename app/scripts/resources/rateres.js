'use strict'

angular.module('frontendApp')
  .factory('rateRes', function ($resource) {
    return $resource(window.RESTurl+'/api/rate/:id/:rating',
                     {
                       id:'@id',
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
