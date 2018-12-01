(function() {

    angular.module('minhaApp')
        .factory('ProdutosService', ProdutosService);

        ProdutosService.$inject = ['$http'];

    function ProdutosService($http) {

        var _URL = '/produtos';

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
        // function findAllOver (id) {
        //     return $http.get(_URL + '/' + id)
        //         .then(function (response) {
        //             return response.data;
        //         });
        // }

        function insert (produto) {
            return $http.post(_URL, produto)
                .then(function (response) {
                    return response.data;
                });
        }

        function update (produto) {
            return $http.put(_URL + '/' + produto._id, produto)
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
            // findAllOver: findAllOver, 
            insert :insert,
            update: update,
            remove: remove
        };
    }
})();