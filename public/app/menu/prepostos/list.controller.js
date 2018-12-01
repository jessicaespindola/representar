(function () {

    angular.module('minhaApp')
        .controller('PrepostosListController', PrepostosListController);

        PrepostosListController.$inject = ['PrepostosService']

    function PrepostosListController (PrepostosService) {
        var vm = this;
        vm.registros = [];

        vm.load = function () {
            PrepostosService.findAll()
            .then(function (registros) {
                vm.registros = registros;
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
                    PrepostosService.remove(id)
                        .then(function() {
                            vm.load()
                            swal({
                                position: 'top-end',
                                type: 'success',
                                title: 'Preposto excluído com sucesso',
                                showConfirmButton: false,
                                timer: 1500
                              });
                        });
                }
            });
        }

    }
})();