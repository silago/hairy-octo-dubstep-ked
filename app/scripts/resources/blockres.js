'use strict'

angular.module('frontendApp')
  .factory('blockRes', function ($resource) {
    return $resource(window.RESTurl+'/api/block/:method/:id',
                     {
                       id:'@id'
                     },
                     {
                       GET:{
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
