'use strict';
window.REST_URL = 'http://localhost:5000/';

/**
 * @ngdoc service
 * @name frontendApp.menuSrvc
 * @description
 * # menuSrvc
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .service('menuSrvc', function ($http) {
    this.request = function(method,data,purl){
        var result = {}
        if (purl==undefined) purl = ''
        return $http({
            method: method,
            url: window.REST_URL+"menu/"+purl,
            data: data
        });
    }        

    this.GET = function(id){
        //if (id!=undefined) { id+='/'; } else { id=''; }
        
        return this.request('GET',{},'');
    }

    this.POST = function(data){
        return this.request('POST',{data},'');
    }

    this.PUT = function(data,parent_id){
        return this.request('PUT',data,parent_id+'/');
    }
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
