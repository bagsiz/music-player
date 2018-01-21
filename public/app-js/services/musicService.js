/**
 * Created by murat on 20/01/2018.
 */
musicPlayerAppServices.factory('musicService', ['Restangular', 'userService', function(Restangular, userService) {

    function getAll(onSuccess, onError){
        Restangular.all('api/songs').getList().then(function(response){

            onSuccess(response);

        }, function(response){

            onError(response);

        });
    }

    function getCategories(onSuccess, onError){
        Restangular.all('api/categories').doGET().then(function(response){
            onSuccess(response);

        }, function(response){

            onError(response);
        });
    }

    function getById(songId, onSuccess, onError){

        Restangular.one('api/songs', songId).get().then(function(response){

            onSuccess(response);

        }, function(response){

            onError(response);

        });

    }

    function toggleFavorites(data, onSuccess, onError){

        Restangular.all('api/songs').post(data).then(function(response){

            onSuccess(response);

        }, function(response){

            onError(response);

        });

    }

    Restangular.setDefaultHeaders({ 'Authorization' : 'Bearer ' + userService.getCurrentToken() });

    return {
        getAll: getAll,
        getCategories: getCategories,
        getById: getById,
        toggleFavorites: toggleFavorites,
    }

}]);