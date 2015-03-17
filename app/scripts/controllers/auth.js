'use strict';

/**
 * @ngdoc function
 * @name keddoApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the keddoApp
 */
angular.module('frontendApp')
  .controller('AuthCtrl', function ($scope,$location,$cookieStore,authRes) {
    $scope.init = function() {
      authRes.GET({}).$promise.then(function(data){
        $scope.user = data;
      });
    }
    $scope.logout = function(){
      $scope.error = '';
      authRes.DELETE({}).$promise.then( function(d) {$scope.init(); },function(d){$scope.error = 'Ошибка выхода.'; });
    }

    $scope.login = function(data) {
      $scope.error = '';
      if (!data.username) {
       $scope.error = 'Не задано имя пользователя.';
       return;
      }
      if (!data.password) {
       $scope.error = 'Не задан пароль.';
       return;
      }
      var username = data.username;
      var password = btoa(data.password);

      authRes.POST({data:{username:username,password:password}})
      .$promise
      .then(
        function(d){  if (!!d.role_id) $cookieStore.put('role_id',d.role_id); else $scope.error='Введенные вами данные не верны.';  $scope.init();  },
        function(d){ $scope.error='Ошибка входа.'; }
      );
    };
  });
