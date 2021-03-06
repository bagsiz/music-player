/**
 * Created by murat on 20/01/2018.
 */
musicPlayerAppServices.factory('userService', ['$http', 'localStorageService', function($http, localStorageService) {
    // This service provides all necessary functions for user api
    function checkIfLoggedIn() {

        if(localStorageService.get('musicPlayerToken'))
            return true;
        else
            return false;

    }

    function signup(name, email, password, onSuccess, onError) {

        $http.post('/auth/signup',
            {
                name: name,
                email: email,
                password: password
            }).
        then(function(response) {
            localStorageService.set('musicPlayerToken', response.data);
            onSuccess(response);

        }, function(response) {

            onError(response);

        });

    }

    function login(email, password, onSuccess, onError){

        $http.post('/auth/login',
            {
                email: email,
                password: password
            }).
        then(function(response) {

            localStorageService.set('musicPlayerToken', response.data);
            onSuccess(response);

        }, function(response) {

            onError(response);

        });

    }

    function logout(){

        localStorageService.remove('musicPlayerToken');

    }

    function getCurrentToken(){
        return localStorageService.get('musicPlayerToken');
    }

    return {
        checkIfLoggedIn: checkIfLoggedIn,
        signup: signup,
        login: login,
        logout: logout,
        getCurrentToken: getCurrentToken
    }

}]);