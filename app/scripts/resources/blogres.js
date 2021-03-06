'use strict'

angular.module('frontendApp')
  .factory('blogRes', function ($resource) {
    return $resource(window.RESTurl+'/api/blog/:category/:alias/:id',
                     {
                       category:'@category', 
                       alias:'@alias',
                       id:'@id'
                     },
                     {
                       categories:{
                         method:'GET',
                         data:{
                            categories:'*'
                         }
                       },
                       DELETE:{
                         method:'DELETE'
                       },
                       GET:{
                         method:'GET',
                         data:{
                            offset:'0'
                         },
                         params:{
                            offset:'0'
                         } 
                       },
                       POST:{
                         category:'@category', 
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
