import IStateProvider = angular.ui.IStateProvider;
import IUrlRouterProvider = angular.ui.IUrlRouterProvider;

class RouterConfig {
    constructor($stateProvider:IStateProvider, $urlRouterProvider:IUrlRouterProvider){

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/dashboard.html'
            })
            .state('tables', {
                url: '/tables',
                templateUrl: 'templates/tables.html'
            });
    }
}

angular.module('RDash')
        .config(['$stateProvider', '$urlRouterProvider',RouterConfig]);