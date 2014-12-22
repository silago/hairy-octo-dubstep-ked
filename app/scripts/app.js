'use strict';
window.RESTurl = 'http://localhost:5000';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ngDragDrop',
    'wysiwyg.module',
    'ngResource',
    'ngDialog',
    'ngQuill',
    'ui.sortable',
    'mm.foundation'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/page/index');
    $stateProvider
    .state('pages', {
        url:'/page/:url',
        templateUrl: 'views/main.html',
      controller: 'MainCtrl'
      }).
    state('users',{
      url:'/users',
      templateUrl:'views/users.html',
      controller: 'UserCtrl'
    }).
      state('auth',{
        url:'/auth',
        templateUrl:'views/auth.html',
        controller: 'AuthCtrl'
      }).
    state('catalog',{
      url:'/:group',
      templateUrl:'views/catalog.html',
      controller: 'CatalogCtrl'}).
    state('catalog.item',{
      url:'/:item',
      templateUrl: 'views/catalog.html',
      controller: function($scope){
    }})

  }).config(function($compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|javascript|mailto|file):/);
});
