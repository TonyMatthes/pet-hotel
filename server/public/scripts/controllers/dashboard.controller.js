petHotelApp.controller('DashboardController', ['$http', function ($http) {
    let vm = this;

    vm.message = "Dashboard";

    vm.getPets = function () {
        $http({
            method: 'GET',
            url: '/pets',
        }).then(function (response) {
            console.log(response);
            vm.response = response.data;
        }).catch(function (error) {
            console.log('error making GET: ', error);
        });
    };
    vm.getPets();
}]);