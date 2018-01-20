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
        templateUrl: 'partials/login.html',
        controller: 'LoginController'
    }).
    when('/signup', {
        templateUrl: 'partials/signup.html',
        controller: 'SignupController'
    }).
    when('/', {
        templateUrl: 'partials/index.html',
        controller: 'MainController'
    }).
    otherwise({
        redirectTo: '/'
    });

}]);