var app = angular.module("CoffeeAdminApp", ["ngRoute", "ngResource", "ngFileUpload"]);

    app.config(['$routeProvider', '$locationProvider', function AppConfig($routeProvider, $locationProvider) {
        $routeProvider
        /*.when('/', {
        templateUrl: 'views/templates/home.html',
        //controller:'createConstructionCtrl'
        })*/
        .when('/test', {
        templateUrl: 'ajax/tables_datatables.html',
        //controller:'createConstructionCtrl'
        })
        // removed other routes ... *snip
        .otherwise({
        redirectTo: '/test'
        }
        );
        //enable html5Mode for pushstate ('#'-less URLs)
        //$locationProvider.html5Mode(true);
        //$locationProvider.hashPrefix('!');
    }]);