(function () {

    angular.module('minhaApp')
        .controller('PedidosListController', PedidosListController);

    PedidosListController.$inject = ['PedidosService', 'ProdutosService', 'FornecedoresService','ClientesService', 'PrepostosService', '$state', '$stateParams']

    function PedidosListController(PedidosService,ProdutosService,ClientesService, FornecedoresService,PrepostosService,$state){
        var vm = this;
        vm.registros = [];
        vm.produto = [];
        vm.cliente = [];
        vm.fornecedor = [];
        vm.preposto = [];

        

        vm.load = function () {
            PedidosService.findAll()
                .then(function (registros) {
                    vm.registros = registros;
                    console.log(vm.registros);
                });
        };

        vm.load();
        
        vm.excluir = function (id) {
            swal({
                title: 'Deseja realmente excluir o registro?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim!',
                cancelButtonText: 'Não tenho certeza'
            }).then(function (result) {
                if (result.value) {
                    PedidosService.remove(id)
                        .then(function () {
                            vm.load()
                            swal({
                                position: 'top-end',
                                type: 'success',
                                title: 'Pedido excluído com sucesso',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        });
                }
            });
        }

    }
})();

