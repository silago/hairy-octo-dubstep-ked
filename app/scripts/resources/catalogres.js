'use strict'

angular.module('frontendApp')
  .factory('catalogRes', function ($resource) {
    return $resource(window.RESTurl+'/api/catalog/:target/:collection/:segment/:group_id/',
                     {
                       id:'@id',
                       target:'@target'
                     },
                     {
                       collections:{
                         method:'GET',
                       },
                       sections:{
                         method:'GET',
                       },
                       items:{
                         method:'GET',
                          
                       },
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
