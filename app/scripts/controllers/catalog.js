'use strict';

/**
 * @ngdoc function
 * @name keddoApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the keddoApp
 */
angular.module('frontendApp')
  .controller('CatalogCtrl', function ($scope) {
     console.log('init ctrl');
     $scope.data = [
       {'id':0,'alias':'man','title':'Мужская коллекция'},
       {'id':1,'alias':'woman','title':'Женская коллекция'},
       {'id':2,'alias':'kid','title':'Детская коллекция'},
       ]
  });
