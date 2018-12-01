(function () {

    angular.module('minhaApp')
        .controller('PrepostosFormController', PrepostosFormController);

        PrepostosFormController.$inject = ['PrepostosService', '$state', '$stateParams']

    function PrepostosFormController(PrepostosService, $state, $stateParams) {
        var vm = this;
        vm.preposto = {};
        vm.titulo = 'Inserindo preposto';

        if ($stateParams.id) {
            vm.titulo = 'Editando preposto';
            PrepostosService.findById($stateParams.id)
                .then(function (preposto) {
                    vm.preposto = preposto;
                });
        }

        vm.salvar = function () {
            if (vm.preposto._id) {
                PrepostosService.update(vm.preposto)
                    .then(function () {
                        swal({
                            position: 'top-end',
                            type: 'success',
                            title: 'Preposto atualizado com sucesso',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        $state.go('app.prepostos')
                    });
            } else {
                PrepostosService.insert(vm.preposto)
                    .then(function () {
                        swal({
                            position: 'top-end',
                            type: 'success',
                            title: 'Preposto inserido com sucesso',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        $state.go('app.prepostos')
                    });
            }
        };
    }
})();