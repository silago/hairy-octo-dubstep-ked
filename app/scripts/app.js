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
    'mm.foundation',
    'infinite-scroll',
    'oi.file',
    'youtube-embed',
    'ng',
    'seo',
    'duScroll',
    'angular-crop'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {


    $urlRouterProvider.otherwise('/page/index');
    $stateProvider
    .state('search',{
      url:'/search/:queryString',
      views: {
        'content':   {templateUrl:   'views/search.html',   controller:'SearchCtrl'},
        'topMenu':   {templateUrl:   'views/ul_block.html', controller:'MainCtrl'},
        'bottomMenu':{templateUrl:   'views/block.html',    controller:'MainCtrl'}
      }
    })
    .state('fm',{
      url:'/fm',
      views: {
        'content':   {templateUrl:   'editable/files.html',     controller:'FileCtrl'},
        'topMenu':   {templateUrl:   'editable/ul_block.html', controller:'MainCtrl'},
        'bottomMenu':{templateUrl:   'editable/block.html',    controller:'MainCtrl'}
      }
    })
    .state('pages', {
        url:'/page/:url',
        views: {
          'content':   {templateUrl:   'views/main.html',     controller:'MainCtrl'},
          'topMenu':   {templateUrl:   'views/ul_block.html', controller:'MainCtrl'},
          'bottomMenu':{templateUrl:   'views/block.html',    controller:'MainCtrl'}
        }
      })
    .state('editpages', {
        url:'/page/:url/edit',
        views: {
          'content':   {templateUrl:   'editable/main.html',controller:'EditablemainCtrl'},
          'topMenu':   {templateUrl:   'editable/ul_block.html',controller:'EditablemainCtrl'},
          'bottomMenu':{templateUrl:   'editable/block.html',   controller:'EditablemainCtrl'},
          'rightMenu': {templateUrl:   'editable/adm/menu.html',controller:'EditablemainCtrl'}
        }
      })
    .state('map', {
        url:'/map',
        views:{
          'content':   {templateUrl:   'views/map.html',     controller:'MapCtrl'},
          'topMenu':   {templateUrl:   'views/ul_block.html', controller:'MainCtrl'},
          'bottomMenu':{templateUrl:   'views/block.html',    controller:'MainCtrl'}
        }
    })
    .state('editmap', {
        url:'/map/edit',
        views:{
          'content':   {templateUrl:   'editable/map.html',      controller:'MapCtrl'},
          'topMenu':   {templateUrl:   'editable/ul_block.html', controller:'EditablemainCtrl'},
          'bottomMenu':{templateUrl:   'editable/block.html',    controller:'EditablemainCtrl'}
        }
    })
    .state('users',{
      url:'/users',
        views:{
          'content':   {templateUrl:   'editable/users.html',      controller:'UserCtrl'},
          'topMenu':   {templateUrl:   'editable/ul_block.html', controller:'EditablemainCtrl'},
          'bottomMenu':{templateUrl:   'editable/block.html',    controller:'EditablemainCtrl'}
        }
    })
    .state('editcatalog',{
      url:'/catalog/edit',
        views:{
          'content':   {templateUrl:   'editable/catalog.html',      controller:'EditablecatalogCtrl'},
          'topMenu':   {templateUrl:   'editable/ul_block.html', controller:'EditablemainCtrl'},
          'bottomMenu':{templateUrl:   'editable/block.html',    controller:'EditablemainCtrl'}
        }
    }).
      state('auth',{
        url:'/auth',
        views: {
          'content': {
            templateUrl:'views/auth.html',
            controller: 'AuthCtrl'
          }}
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
