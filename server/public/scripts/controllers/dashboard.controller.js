petHotelApp.controller('DashboardController', ['$http', function ($http) {
    let vm = this;

    vm.message = "Dashboard";
    vm.petToAdd = {name:'',breed:'',color:'',owner_id:''};
    vm.owners=[];
    // Add (POST) crew member to an existing ship
    vm.addPet = function (petToAdd) {
        console.log(petToAdd);
        $http({
            method: 'POST',
            url: '/pets',
            data: petToAdd
        }).then((response) => {
            console.log('response', response);
            vm.getPets();
        }).catch((error) => {
            console.log('error making request', error);
            alert('Something went wrong! Check the server.');
        });
    };

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
    vm.getOwners = function () {
        $http({
            method: 'GET',
            url: '/owners'
        }).then((response) => {
            console.log('response', response);
            vm.owners = response.data;
        }).catch((error) => {
            console.log('error making rent get request', error);
            alert('Something went wrong! Check the server.');
        });
    };
    vm.getPets();
    vm.getOwners();
}]);