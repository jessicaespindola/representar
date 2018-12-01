(function () {

    angular.module('minhaApp')
        .controller('ProdutosListController', ProdutosListController);

        ProdutosListController.$inject = ['ProdutosService']

    function ProdutosListController (ProdutosService) {
        var vm = this;
        vm.filtro = '';
        vm.registros = [];

        vm.load = function () {
            ProdutosService.findAll()
            .then(function (registros) {
                vm.registros = registros;
            });
        };
                vm.load();
                vm.resetFiltro = function () {
                    vm.filtro = '';
                    load();
                };

                function load() {
                    ProdutosService.findAll(vm.filtro, vm.page)
                      .then(function (dados) {
                        vm.data = dados;
                      });
                }
        
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
                    ProdutosService.remove(id)
                        .then(function() {
                            vm.load()
                            swal({
                                position: 'top-end',
                                type: 'success',
                                title: 'Produto excluído com sucesso',
                                showConfirmButton: false,
                                timer: 1500
                              });
                        });
                }
            });
        }

    }
})();