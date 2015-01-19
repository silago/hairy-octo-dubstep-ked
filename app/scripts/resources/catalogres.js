'use strict'

angular.module('frontendApp')
  .factory('catalogRes', function ($resource) {
    return $resource(window.RESTurl+'/api/catalog/',
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
