(function () {

    angular.module('minhaApp')
        .controller('TransportadorasListController', TransportadorasListController);

        TransportadorasListController.$inject = ['TransportadorasService']

    function TransportadorasListController (TransportadorasService) {
        var vm = this;
        vm.registros = [];

        vm.load = function () {
            TransportadorasService.findAll()
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
                    TransportadorasService.remove(id)
                        .then(function() {
                            vm.load()
                            swal({
                                position: 'top-end',
                                type: 'success',
                                title: 'Transportadora excluída com sucesso',
                                showConfirmButton: false,
                                timer: 1500
                              });
                        });
                }
            });
        }

    }
})();