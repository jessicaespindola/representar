(function () {

    angular.module('minhaApp')
        .controller('PedidosFormController', PedidosFormController);

    PedidosFormController.$inject = ['PedidosService', 'ClientesService', 'FornecedoresService','ProdutosService', 'PrepostosService','$state', '$stateParams']

    function PedidosFormController(PedidosService,ClientesService,FornecedoresService, ProdutosService, PrepostosService,$state, $stateParams) {
        var vm = this;
        vm.registros = {
            codigo: 0,
            valorTotal: 0

        };

        vm.titulo = 'Inserindo pedido';

        vm.salvar = salvar;
        vm.produto = [];
        vm.cliente = [];
        vm.fornecedor = [];
        vm.preposto = [];



        ProdutosService.findAll()
            .then(function (data) {
                vm.produto = data;
            });

        ClientesService.findAll()
            .then(function (data) {
                vm.cliente = data;
            });

        FornecedoresService.findAll()
            .then(function (data) {
                vm.fornecedor = data;
            });


        PrepostosService.findAll()
            .then(function (data) {
                vm.preposto = data;
            });

            if ($stateParams.id) {
            vm.titulo = 'Editando pedido';
            PedidosService.findById($stateParams.id)
                .then(function (registros) {
                    vm.registros = registros;
                    //  vm.registros.produto = {
                    //      code: 1,
                    //      value: "teste"
                    //  }
                });
        }


        function salvar() {
            if (vm.registros._id) {
                PedidosService.update(vm.registros)
                    .then(function () {
                        swal({
                            position: 'top-end',
                            type: 'success',
                            title: 'Pedido atualizado com sucesso',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        $state.go('app.pedidos')
                    });
            } else {
                
                PedidosService.insert(vm.registros)
                    .then(function () {
                        swal({
                            position: 'top-end',
                            type: 'success',
                            title: 'Pedido inserido com sucesso',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        $state.go('app.pedidos')
                    });
            }
        };
    }

})();
