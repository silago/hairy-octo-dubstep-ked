'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:SubscribeCtrl
 * @description
 * # SubscribeCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('SubscribeCtrl', function ($scope,$stateParams,subscribeRes) {
    $scope.birthday = {};
    $scope.email =  ''; 
    $scope.gender = '';
    $scope.city= '';
    $scope.email = $stateParams.email;        
    $scope.subscribe = function(data){
        subscribeRes.PUT({'data':data});
        return true;
    }
    $scope.isFormValid = function(data) {

         console.log(data.birthday) 
         console.log($scope.isEmailValid(data.email))
         console.log(data.email)
         console.log(data.gender)
         console.log(data.city)

        if ( (data.birthday) && 
             ($scope.isEmailValid(data.email)) &&
             (data.email) && 
             (data.gender) &&
             (data.city)
            )
            return true;
        return false;
    }

    $scope.isEmailValid = function(email) { 
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    } 

    $scope.days = function(Y,M) {
                var result=[1,2,3];
                if (!Y || !M) return result;
                var days = 32 - new Date(Y, M, 32).getDate();
                for (var i=1; i<=days; i++)
                  result.push(i);
                return result;
    }

    $scope.years = function(){
        var curr_year = (new Date()).getFullYear();
        var max_year = curr_year - 10;
        var min_year = curr_year - 90;
        var result = [];
        for (var i = min_year; i<=max_year; i++) {
            result.push(i);
        } 
        return result;
    }
    


    
  });
