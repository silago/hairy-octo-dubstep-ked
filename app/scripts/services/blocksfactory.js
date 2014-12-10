'use strict';

/**
 * @ngdoc service
 * @name keddoApp.blocksFactory
 * @description
 * # blocksFactory
 * Service in the keddoApp.
 */
angular.module('frontendApp')
  .service('blocksFactory', function () {
      this.blocks = [];
      this.push = function(val){
        this.blocks.push(val);
        return this.blocks;
      }
      this.get    = function(){
         return this.blocks;
      }
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
