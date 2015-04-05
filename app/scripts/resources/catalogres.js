'use strict'

angular.module('frontendApp')
  .factory('catalogRes', function ($resource) {
    return $resource(window.RESTurl+'/api/catalog/:target/:segment/:type/:sku/',
                     {
                       id:'@id',
                       target:'@target',
                       type:'@type',
                       collection:'@collection',
                       sku:'@sku'
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
                       DELETE:{
                         method:'DELETE'
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
