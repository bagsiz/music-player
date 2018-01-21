/**
 * Created by murat on 20/01/2018.
 */
var musicPlayerAppControllers = angular.module('musicPlayerAppControllers', ['ngAudio']);

musicPlayerAppControllers.controller('LoginController', ['$scope', '$http', '$location', 'userService',
    function ($scope, $http, $location, userService) {
    $scope.login = function() {
        userService.login(
            $scope.email, $scope.password,
            function(response){
                $location.path('/');
            },
            function(response){
                $scope.errorMessage = response.data.errorMessage;
            }
        );
    }

    $scope.email = '';
    $scope.password = '';
    $scope.errorMessage = '';

    if(userService.checkIfLoggedIn())
        $location.path('/');
}]);

musicPlayerAppControllers.controller('SignupController', ['$scope', '$location', 'userService',
    function ($scope, $location, userService) {
    $scope.signup = function() {
        userService.signup(
            $scope.name, $scope.email, $scope.password,
            function(response){
                $location.path('/');
            },
            function(response){
                $scope.errorMessage = response.data.errorMessage;
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

musicPlayerAppControllers.controller('CategoryController', ['$scope', '$location', 'userService', 'musicService',
    '$routeParams', '$parse', 'ngAudio',
    function ($scope, $location, userService, musicService, $routeParams, $parse, ngAudio) {

        $scope.logout = function(){
            userService.logout();
            $location.path('/login');
        }

        if(!userService.checkIfLoggedIn())
            $location.path('/');

        $scope.getCategory = function () {
            musicService.getCategory($routeParams.categorySlug,function (response) {
                $scope.category = response;

                for(i in $scope.category.songs) {
                    $scope.category.songs[i].audio = ngAudio.load('categories/'+$scope.category.songs[i].slug)
                }
            })
        }
        $scope.go = function ( path ) {
            $location.path( path );
        };

        // Add to favorites
        $scope.addToFavorite = function (songId) {
            musicService.addToFavorite(songId);
        }

        $scope.getCategory();

    }]);

musicPlayerAppControllers.controller('FavoriteController', ['$scope', '$location', 'userService', 'musicService',
    '$routeParams', '$parse', 'ngAudio',
    function ($scope, $location, userService, musicService, $routeParams, $parse, ngAudio) {

        $scope.logout = function(){
            userService.logout();
            $location.path('/login');
        }
        if(!userService.checkIfLoggedIn())
            $location.path('/');

        $scope.getFavorites = function () {
            musicService.getFavorites(function (response) {
                $scope.favorites = response;
                if($scope.favorites.length > 0) {
                    for(i in $scope.favorites) {
                        $scope.favorites[i].audio = ngAudio.load('categories/'+$scope.favorites[i].file.slug)
                    }
                }
            })
        }
        $scope.getFavorites();

        $scope.removeFavorite = function(songId) {
            musicService.removeFavorite(songId);
            $scope.getFavorites();
        }

        $scope.go = function ( path ) {
            $location.path( path );
        };
    }]);

musicPlayerAppControllers.controller('MainController', ['$scope', '$location', 'userService', 'musicService',
        function ($scope, $location, userService, musicService) {

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
                        //alert('Some errors occurred while communicating with the service. Try again later.');
                    });

                }

                $scope.go = function ( path ) {
                    $location.path( path );
                };

                $scope.categories = [];

                $scope.init();
            }
        }]);
