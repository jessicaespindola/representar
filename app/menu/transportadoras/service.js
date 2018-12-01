(function() {

    angular.module('minhaApp')
        .factory('TransportadorasService', TransportadorasService);

        TransportadorasService.$inject = ['$http'];

    function TransportadorasService($http) {

        var _URL = '/transportadoras';

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

        function insert (transportadora) {
            return $http.post(_URL, transportadora)
                .then(function (response) {
                    return response.data;
                });
        }

        function update (transportadora) {
            return $http.put(_URL + '/' + transportadora._id, transportadora)
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