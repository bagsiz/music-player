/**
 * Created by murat on 20/01/2018.
 */
var musicPlayerApp = angular.module('musicPlayerApp', [
    'ngRoute',
    'musicPlayerAppControllers'
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
    when('/', {
        templateUrl: 'parts/index.html',
        controller: 'MainController'
    }).
    otherwise({
        redirectTo: '/'
    });

}]);