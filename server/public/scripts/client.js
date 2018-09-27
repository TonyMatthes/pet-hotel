const petHotelApp = angular.module('PetHotelApp', ['ngRoute','ngMaterial', 'ngMessages']);

petHotelApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as vm'
    }).when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardController as vm'
    }).when('/owners', {
        templateUrl: 'views/owners.html',
        controller: 'OwnersController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });

}]);