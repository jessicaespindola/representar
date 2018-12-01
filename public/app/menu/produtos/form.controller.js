(function () {

    angular.module('minhaApp')
        .controller('ProdutosFormController', ProdutosFormController);

        ProdutosFormController.$inject = ['ProdutosService', '$state', '$stateParams']

    function ProdutosFormController(ProdutosService, $state, $stateParams) {
        var vm = this;
        vm.produto = {};
        vm.titulo = 'Inserindo produto';

        if ($stateParams.id) {
            vm.titulo = 'Editando produto';
            ProdutosService.findById($stateParams.id)
                .then(function (produto) {
                    vm.produto = produto;
                });
        }

        vm.salvar = function () {
            if (vm.produto._id) {
                ProdutosService.update(vm.produto)
                    .then(function () {
                        swal({
                            position: 'top-end',
                            type: 'success',
                            title: 'Produto atualizado com sucesso',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        $state.go('app.produtos')
                    });
            } else {
                ProdutosService.insert(vm.produto)
                    .then(function () {
                        swal({
                            position: 'top-end',
                            type: 'success',
                            title: 'Produto inserido com sucesso',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        $state.go('app.produtos')
                    });
            }
        };
    }
})();