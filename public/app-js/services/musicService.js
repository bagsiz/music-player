/**
 * Created by murat on 20/01/2018.
 */
musicPlayerAppServices.factory('musicService', ['Restangular', 'userService', function(Restangular, userService) {
    // This service provides all necessary functions for sounds api
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
    
    function getCategory(categorySlug, onSuccess, onError) {
        Restangular.one('api/category/'+categorySlug).get().then(function (response) {
            onSuccess(response);

        }, function(response){

            onError(response);
        })
    }

    function addToFavorite(songId) {
        Restangular.all('api/addToFavorite').post({'songId':songId});
    }
    
    function removeFavorite(songId, onSuccess, onError) {
        Restangular.all('api/removeFavorite').post({'songId':songId}).then(function (response) {
            onSuccess(response);

        }, function(response){

            onError(response);
        })
    }

    function getFavorites(onSuccess, onError) {
        Restangular.all('api/favorites').doGET().then(function(response){
            onSuccess(response);

        }, function(response){

            onError(response);

        });
    }

    Restangular.setDefaultHeaders({ 'Authorization' : 'Bearer ' + userService.getCurrentToken() });

    return {
        getAll: getAll,
        getCategories: getCategories,
        getCategory:getCategory,
        addToFavorite:addToFavorite,
        removeFavorite:removeFavorite,
        getFavorites:getFavorites
    }

}]);