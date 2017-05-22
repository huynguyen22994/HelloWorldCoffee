var app = angular.module("CoffeeApp", ["ngRoute", "ngResource"]);

    app.config(['$routeProvider', '$locationProvider', function AppConfig($routeProvider, $locationProvider) {
        $routeProvider
        .when('/', {
        templateUrl: 'views/templates/home.html',
        controller:'coffeeCtrl'
        })
        .when('/detail', {
        templateUrl: 'views/templates/detail.html',
        //controller:'coffeeCtrl'
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