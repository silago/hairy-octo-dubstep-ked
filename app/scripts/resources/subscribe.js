'use strict'

angular.module('frontendApp')
  .factory('subscribeRes', function ($resource) {
    return $resource(window.RESTurl+'/api/subscribe',
                     {
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
