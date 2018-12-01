(function() {

    angular.module('minhaApp')
        .factory('PrepostosService', PrepostosService);

        PrepostosService.$inject = ['$http'];

    function PrepostosService($http) {

        var _URL = '/prepostos';

        function findAll () {
            return $http.get(_URL)
                .then(function (response) {
                    return response.data;
                });
        }

        function findById (id) {
            return $http.get(_URL + '/' + id)
                .then(function (response) {
                    return response.data;
                });
        }

        function insert (preposto) {
            return $http.post(_URL, preposto)
                .then(function (response) {
                    return response.data;
                });
        }

        function update (preposto) {
            return $http.put(_URL + '/' + preposto._id, preposto)
                .then(function (response) {
                    return response.data;
                });
        }

        function remove (id) {
            return $http.delete(_URL + '/' + id);
        }

        return {
            findAll: findAll,
            findById: findById,
            insert :insert,
            update: update,
            remove: remove
        };
    }
})();