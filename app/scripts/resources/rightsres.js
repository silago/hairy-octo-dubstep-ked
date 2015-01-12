'use strict'

angular.module('frontendApp')
  .factory('rightsRes', function ($resource) {
    return $resource(window.RESTurl+'/api/rights/:id',
                     {
                       id:'@id'
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
