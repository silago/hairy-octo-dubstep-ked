
'use strict'

angular.module('frontendApp')
  .factory('gcatalogRes', function ($resource) {
    return $resource(window.RESTurl+'/api/gcatalog/',
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
