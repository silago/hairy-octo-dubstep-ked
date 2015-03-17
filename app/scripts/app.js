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
    'angular-crop',
    'angular-flexslider',
    'viewhead',
    'xeditable'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {


    $urlRouterProvider.otherwise('/ru/page/index');
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
        ,'rightMenu': {templateUrl:   'editable/adm/menu.html',controller:'EditablemainCtrl'}
      }
    })
    .state('subscribe',{
      url:'/subscribe/:email',
      views: {
        'content':   {templateUrl:   'views/subscribe/subscribe.html',     controller:'SubscribeCtrl'},
        'topMenu':   {templateUrl:   'views/ul_block.html', controller:'MainCtrl'},
        'bottomMenu':{templateUrl:   'views/block.html',    controller:'MainCtrl'}
      }
    })
    .state('policy',{
    url:'/help-topics-privacy_policy.html',
      views: {
        'content':   {templateUrl:   'views/subscribe/info.html',     controller:'SubscribeCtrl'},
        'topMenu':   {templateUrl:   'views/ul_block.html', controller:'MainCtrl'},
        'bottomMenu':{templateUrl:   'views/block.html',    controller:'MainCtrl'}
      }
    })
    .state('pages', {
        url:'/{lang}/page/:url',
        views: {
          'content':   {templateUrl:   'views/main.html',     controller:'MainCtrl'},
          'topMenu':   {templateUrl:   'views/ul_block.html', controller:'MainCtrl'},
          'bottomMenu':{templateUrl:   'views/block.html',    controller:'MainCtrl'}
        }
      })
    .state('editpages', {
        url:'/{lang}/page/:url/edit',
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
          'content':   {templateUrl:   'editable/map.html',      controller:'EditablemapCtrl'},
          'topMenu':   {templateUrl:   'editable/ul_block.html', controller:'EditablemainCtrl'},
          'bottomMenu':{templateUrl:   'editable/block.html',    controller:'EditablemainCtrl'}
        ,'rightMenu': {templateUrl:   'editable/adm/menu.html',controller:'EditablemainCtrl'}
        }
    })
    .state('users',{
      url:'/users',
        views:{
          'content':   {templateUrl:   'editable/users.html',      controller:'UserCtrl'},
          'topMenu':   {templateUrl:   'editable/ul_block.html', controller:'EditablemainCtrl'},
          'bottomMenu':{templateUrl:   'editable/block.html',    controller:'EditablemainCtrl'}
        ,'rightMenu': {templateUrl:   'editable/adm/menu.html',controller:'EditablemainCtrl'}
        }
    })
    .state('editcatalog',{
      url:'/catalog/edit/',
        views:{
          'content':   {templateUrl:   'editable/catalog/catalog.html',      controller:'EditablecatalogCtrl'},
          'topMenu':   {templateUrl:   'editable/ul_block.html', controller:'EditablemainCtrl'},
          'bottomMenu':{templateUrl:   'editable/block.html',    controller:'EditablemainCtrl'}
        ,'rightMenu': {templateUrl:   'editable/adm/menu.html',controller:'EditablemainCtrl'}
        }
    })
    .state('editcataloggroup',{
      url:'/cataloggroup/edit/',
        views:{
          'content':   {templateUrl:   'editable/catalog/segment.html',      controller:'EditablecatalogCtrl'},
          'topMenu':   {templateUrl:   'editable/ul_block.html', controller:'EditablemainCtrl'},
          'bottomMenu':{templateUrl:   'editable/block.html',    controller:'EditablemainCtrl'}
        ,'rightMenu': {templateUrl:   'editable/adm/menu.html',controller:'EditablemainCtrl'}
        }
    })
.state('catalog',{
      url:'/catalog/',
        views:{
          'content':   {
                            templateUrl:   'views/catalog/catalog.html',
                            controller:'CatalogCtrl',
                        },
          'topMenu':   {templateUrl:   'views/ul_block.html', controller:'MainCtrl'},
          'bottomMenu':{templateUrl:   'views/block.html',    controller:'MainCtrl'}
        }
})
.state('catalog.segment', {
    url:':segment/',
    templateUrl: 'views/catalog/segment.html',
    controller:  'CatalogCtrl',
})
.state('catalog.segment.type',{
      url:':type/',
      templateUrl:   'views/catalog/type.html',
      controller:'CatalogCtrl'
})
.state('catalog.segment.type.group', {
    url:':sku/',
    templateUrl: 'views/catalog/group.html',
    controller:  'CatalogCtrl'
})
.state('catalog.segment.collection.group.item', {
    url:':item/',
    templateUrl: 'views/catalog/item.html',
    controller:  'CatalogCtrl'
})

.state('editableblog',{
      url:'/blog/edit',
        views:{
          'content':   {
                            templateUrl:   'editable/blog/blog.html',
                            controller:'EditableblogCtrl',
                        },
          'topMenu':   {templateUrl:   'views/ul_block.html', controller:'EditablemainCtrl'},
          'bottomMenu':{templateUrl:   'views/block.html',    controller:'EditablemainCtrl'},
          'rightMenu': {templateUrl:   'editable/adm/menu.html',controller:'EditablemainCtrl'}
        }
})
.state('editableblog.category', {
    url:'/:category/',
    templateUrl: 'editable/blog/category.html',
    controller:  'EditableblogCtrl'
})
.state('blog',{
      url:'/blog/',
        views:{
          'content':   {
                            templateUrl:   'views/blog/blog.html',
                            controller:'BlogCtrl',
                        },
          'topMenu':   {templateUrl:   'views/ul_block.html', controller:'MainCtrl'},
          'bottomMenu':{templateUrl:   'views/block.html',    controller:'MainCtrl'}
        }
})
.state('blog.category', {
    url:':category/',
    templateUrl:'views/blog/category.html',
    controller:'BlogCtrl'
})
.state('blog.category.block', {
    url:':alias/:id/',
    templateUrl:'views/blog/block.html',
    controller:'BlogCtrl'
})
.state('auth',{
        url:'/auth',
        views: {
          'content': {
            templateUrl:'views/auth.html',
            controller: 'AuthCtrl'
          }}
      })

  }).config(function($compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|javascript|mailto|file):/);
});
