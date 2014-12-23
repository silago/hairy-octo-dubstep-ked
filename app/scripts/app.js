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
        views: {
          'content':   {templateUrl:   'views/main.html',controller:'MainCtrl'},
          'topMenu':   {templateUrl:   'views/ul_block.html',controller:'MainCtrl'},
        }
      })
    .state('editpages', {
        url:'/page/:url/edit',
        views: {
          'content':   {templateUrl:   'editable/main.html',controller:'EditablemainCtrl'},
          'topMenu':   {templateUrl:   'editable/ul_block.html',controller:'EditablemainCtrl'},
          'rightMenu': {templateUrl:   'editable/adm/menu.html',controller:'EditablemainCtrl'}
        }
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
