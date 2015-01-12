'use strict'

angular.module('frontendApp')
  .factory('mapRes', function ($resource) {
    return $resource(window.RESTurl+'/api/map',
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
