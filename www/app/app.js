var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            controller: 'mainController',
            templateUrl: 'app/views/home.htm'
        })
        .when('/theme/:themeName', {
            controller: 'themeController',
            templateUrl: 'app/views/theme.htm'
        })
        .otherwise({
            redirectTo: '/home'
        });
});