(function() {

    angular.module('minhaApp')
        .factory('PedidosService', PedidosService);

        PedidosService.$inject = ['$http'];

    function PedidosService($http) {

        var _URL = '/pedidos';

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

        function insert (pedido) {
            return $http.post(_URL, pedido)
                .then(function (response) {
                    return response.data;
               });
        }

        function update (pedido) {
            return $http.put(_URL + '/' + pedido._id, pedido)
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
