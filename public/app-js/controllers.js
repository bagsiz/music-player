/**
 * Created by murat on 20/01/2018.
 */
var musicPlayerAppControllers = angular.module('musicPlayerAppControllers', []);

musicPlayerAppControllers.controller('LoginController', ['$scope', '$http', '$location', 'userService', function ($scope, $http, $location, userService) {
    scope.login = function() {
        userService.login(
            $scope.email, $scope.password,
            function(response){
                $location.path('/');
            },
            function(response){
                alert('Something went wrong with the login process. Try again later!');
            }
        );
    }

    $scope.email = '';
    $scope.password = '';

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
                alert('Something went wrong with the signup process. Try again later.');
            }
        );
    }
    $scope.name = '';
    $scope.email = '';
    $scope.password = '';

    if(userService.checkIfLoggedIn())
        $location.path('/');
}]);

musicPlayerAppControllers.controller('MainController', ['$scope', '$http', function ($scope, $http) {

}]);