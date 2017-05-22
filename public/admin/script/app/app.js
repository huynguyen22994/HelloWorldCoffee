var app = angular.module("CoffeeAdminApp", ["ngRoute", "ngResource", "ngFileUpload"]);

    app.config(['$routeProvider', '$locationProvider', function AppConfig($routeProvider, $locationProvider) {
        $routeProvider
        .when('/', {
        templateUrl: 'views/tables_coffees/templates/tables_coffees.html',
        controller: 'CoffeeAdminCtrl'
        })
        // removed other routes ... *snip
        .otherwise({
        redirectTo: '/'
        }
        );
        //enable html5Mode for pushstate ('#'-less URLs)
        //$locationProvider.html5Mode(true);
        //$locationProvider.hashPrefix('!');
    }]);