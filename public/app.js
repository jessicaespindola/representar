(function(){
    angular.module('minhaApp', [
        'ui.router'
    ]);

    angular.module('minhaApp')
        .config(MinhaAppConfig)
        .config(PedidosConfig)
        .config(MenuConfig);
    
    MinhaAppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    function MinhaAppConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state({
                name: 'app',
                url: '/',
                redirectTo: 'app.menu'
            })    
            .state({
                name: 'app.clientes', 
                url: 'clientes',
                template: '<ui-view></ui-view>',
                redirectTo: 'app.clientes.list'
            })
            .state({
                name: 'app.clientes.list', 
                url: '/list',
                templateUrl: '/views/clientes/list.html',
                controller: 'ClientesListController',
                controllerAs: 'vm'
            })
            .state({
                name: 'app.clientes.new', 
                url: '/new',
                templateUrl: '/views/clientes/form.html',
                controller: 'ClientesFormController',
                controllerAs: 'vm'
            })
            .state({
                name: 'app.clientes.edit', 
                url: '/:id',
                templateUrl: '/views/clientes/form.html',
                controller: 'ClientesFormController',
                controllerAs: 'vm'
            })
            .state({
                name: 'app.fornecedores', 
                url: 'fornecedores',
                template: '<ui-view></ui-view>',
                redirectTo: 'app.fornecedores.list'
            })
            .state({
                name: 'app.fornecedores.list', 
                url: '/list',
                templateUrl: '/views/fornecedores/list.html',
                controller: 'FornecedoresListController',
                controllerAs: 'vm'
            })
            .state({
                name: 'app.fornecedores.new', 
                url: '/new',
                templateUrl: '/views/fornecedores/form.html',
                controller: 'FornecedoresFormController',
                controllerAs: 'vm'
            })
            .state({
                name: 'app.fornecedores.edit', 
                url: '/:id',
                templateUrl: '/views/fornecedores/form.html',
                controller: 'FornecedoresFormController',
                controllerAs: 'vm'
            })
            .state({
                name: 'app.prepostos', 
                url: 'prepostos',
                template: '<ui-view></ui-view>',
                redirectTo: 'app.prepostos.list'
            })
            .state({
                name: 'app.prepostos.list', 
                url: '/list',
                templateUrl: '/views/prepostos/list.html',
                controller: 'PrepostosListController',
                controllerAs: 'vm'
            })
            .state({
                name: 'app.prepostos.new', 
                url: '/new',
                templateUrl: '/views/prepostos/form.html',
                controller: 'PrepostosFormController',
                controllerAs: 'vm'
            })
            .state({
                name: 'app.prepostos.edit', 
                url: '/:id',
                templateUrl: '/views/prepostos/form.html',
                controller: 'PrepostosFormController',
                controllerAs: 'vm'
            })
            .state({
                name: 'app.transportadoras', 
                url: 'transportadoras',
                template: '<ui-view></ui-view>',
                redirectTo: 'app.transportadoras.list'
            })
            .state({
                name: 'app.transportadoras.list', 
                url: '/list',
                templateUrl: '/views/transportadoras/list.html',
                controller: 'TransportadorasListController',
                controllerAs: 'vm'
            })
            .state({
                name: 'app.transportadoras.new', 
                url: '/new',
                templateUrl: '/views/transportadoras/form.html',
                controller: 'TransportadorasFormController',
                controllerAs: 'vm'
            })
            .state({
                name: 'app.transportadoras.edit', 
                url: '/:id',
                templateUrl: '/views/transportadoras/form.html',
                controller: 'TransportadorasFormController',
                controllerAs: 'vm'
            })
            .state({
                name: 'app.produtos', 
                url: 'produtos',
                template: '<ui-view></ui-view>',
                redirectTo: 'app.produtos.list'
            })
            .state({
                name: 'app.produtos.list', 
                url: '/list',
                templateUrl: '/views/produtos/list.html',
                controller: 'ProdutosListController',
                controllerAs: 'vm'
            })
            .state({
                name: 'app.produtos.new', 
                url: '/new',
                templateUrl: '/views/produtos/form.html',
                controller: 'ProdutosFormController',
                controllerAs: 'vm'
            })
            .state({
                name: 'app.produtos.edit', 
                url: '/:id',
                templateUrl: '/views/produtos/form.html',
                controller: 'ProdutosFormController',
                controllerAs: 'vm'
            })
             
    
    }
    MenuConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function MenuConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state({
            name: 'app.menu',
            url: 'menu',
            templateUrl: '/views/menu.html'
            
        })
    }
    PedidosConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function PedidosConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state({
            name: 'app.pedidos',
            url: 'pedidos',
            template: '<ui-view></ui-view>',
            redirectTo: 'app.pedidos.list'
        })
        .state({
            name: 'app.pedidos.list',
            url: '/list',
            templateUrl: '/views/pedidos/list.html',
            controller: 'PedidosListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'app.pedidos.new',
            url: '/new',
            templateUrl: '/views/pedidos/form.html',
            controller: 'PedidosFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'app.pedidos.edit', 
            url: '/:id',
            templateUrl: '/views/pedidos/form.html',
            controller: 'PedidosFormController',
            controllerAs: 'vm'
        })

    }
})();
