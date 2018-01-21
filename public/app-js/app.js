/**
 * Created by murat on 20/01/2018.
 */
var musicPlayerApp = angular.module('musicPlayerApp', [
    'ngRoute',
    'musicPlayerAppControllers',
    'musicPlayerAppServices'
]);

var musicPlayerAppServices = angular.module('musicPlayerAppServices', [
    'LocalStorageModule',
    'restangular'
]);

musicPlayerApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider.
    when('/login', {
        templateUrl: 'parts/login.html',
        controller: 'LoginController'
    }).
    when('/signup', {
        templateUrl: 'parts/signup.html',
        controller: 'SignupController'
    }).
    when('/favorites', {
        templateUrl: 'parts/favorites.html',
        controller: 'FavoriteController'
    }).
    when('/category/:categorySlug', {
        templateUrl: 'parts/category.html',
        controller: 'CategoryController'
    }).
    when('/', {
        templateUrl: 'parts/index.html',
        controller: 'MainController'
    }).
    otherwise({
        redirectTo: '/'
    });

}]);