'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:FileCtrl
 * @description
 * # FileCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('FileCtrl', function ($scope,fileRes) {

    $scope.file = {} //Модель
    $scope.options = {
      //Вызывается для каждого выбранного файла
      change: function (file) {
          //В file содержится информация о файле
          console.log('//Загружаем на сервер');

          var u = window.RESTurl+'/api/files';
          file.$upload(u, $scope.file)
        }
      }


    $scope.init = function(){
      fileRes.get({}).$promise.then(function(data){ $scope.items = data.data; });
    };


    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
