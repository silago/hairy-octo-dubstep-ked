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
                         method:'POST'
                        },
                       PUT:{
                         method:'PUT'
                        }
                     }

  )
  });
