/**
 * Created by murat on 20/01/2018.
 */
var musicPlayerAppControllers = angular.module('musicPlayerAppControllers', []);

musicPlayerAppControllers.controller('LoginController', ['$scope', '$http', '$location', 'userService', function ($scope, $http, $location, userService) {
    $scope.login = function() {
        userService.login(
            $scope.email, $scope.password,
            function(response){
                $location.path('/');
            },
            function(response){
                $scope.errorMessage = response;
            }
        );
    }

    $scope.email = '';
    $scope.password = '';
    $scope.errorMessage = '';

    if(userService.checkIfLoggedIn())
        $location.path('/');
}]);

musicPlayerAppControllers.controller('SignupController', ['$scope', '$location', 'userService', function ($scope, $location, userService) {
    $scope.signup = function() {
        userService.signup(
            $scope.name, $scope.email, $scope.password,
            function(response){
                $location.path('/');
            },
            function(response){
                $scope.errorMessage = response;
            }
        );
    }
    $scope.name = '';
    $scope.email = '';
    $scope.password = '';
    $scope.errorMessage= '';
    
    if(userService.checkIfLoggedIn())
        $location.path('/');
}]);

musicPlayerAppControllers.controller('MainController', ['$scope', '$location', 'userService', 'musicService', function ($scope, $location, userService, musicService) {

    if(!userService.checkIfLoggedIn()) {
        $location.path('/login');
    } else {
        $scope.logout = function(){
            userService.logout();
            $location.path('/login');
        }

        $scope.init = function(){

            musicService.getCategories(function(response){

                $scope.categories = response;

            }, function(){
                alert('Some errors occurred while communicating with the service. Try again later.');
            });

        }

        $scope.categories = [];

        $scope.init();
    }
}]);