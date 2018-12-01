(function () {

    angular.module('minhaApp')
        .controller('TransportadorasFormController', TransportadorasFormController);

        TransportadorasFormController.$inject = ['TransportadorasService', '$state', '$stateParams']

    function TransportadorasFormController(TransportadorasService, $state, $stateParams) {
        var vm = this;
        vm.transportadora = {};
        vm.titulo = 'Inserindo transportadora';

        if ($stateParams.id) {
            vm.titulo = 'Editando transportadora';
            TransportadorasService.findById($stateParams.id)
                .then(function (transportadora) {
                    vm.transportadora = transportadora;
                });
        }

        vm.salvar = function () {
            if (vm.transportadora._id) {
                TransportadorasService.update(vm.transportadora)
                    .then(function () {
                        swal({
                            position: 'top-end',
                            type: 'success',
                            title: 'Transportadora atualizada com sucesso',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        $state.go('app.transportadoras')
                    });
            } else {
                TransportadorasService.insert(vm.transportadora)
                    .then(function () {
                        swal({
                            position: 'top-end',
                            type: 'success',
                            title: 'Transportadora inserida com sucesso',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        $state.go('app.transportadoras')
                    });
            }
        };
    }
})();