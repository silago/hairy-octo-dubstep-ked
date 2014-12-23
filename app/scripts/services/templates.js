'use strict';

/**
 * @ngdoc service
 * @name keddoApp.templates
 * @description
 * # templates
 * Service in the keddoApp.
 */
angular.module('frontendApp')
  .service('templates', function ($cookieStore) {
    this.getTemplate = function(template) {
      var role_id = $cookieStore.get('role_id') || 0;
      var folder_prefix='';
      if (role_id) {
        folder_prefix='editable_';
      }
      folder_prefix+='views/';
      var result = folder_prefix+=template;
      return result;
    };
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
