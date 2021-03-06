petHotelApp.controller('DashboardController', ['$http','$mdSidenav', function ($http, $mdSidenav) {
    let vm = this;
    vm.toggleLeft = function() {
        $mdSidenav('left')
          .toggle();
    };
    
    vm.closeLeft = function () {
      $mdSidenav('left').close();
    };

    vm.toggleRight = function() {
        $mdSidenav('right')
          .toggle();
    };
    
    vm.closeRight = function () {
      $mdSidenav('right').close();
    };

    vm.showPetDetails = function(pet){
        vm.toggleRight();
        vm.petInDetail = pet;
    };
    
    vm.petToAdd = { name: '', breed: '', color: '', owner_id: '' };
    vm.owners = [];

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
    vm.check = function (pet) {
        $http({
            method: 'PUT',
            url: `/pets`,
            params: pet
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
            vm.petToAdd = { name: '', breed: '', color: '', owner_id: '' }
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

    vm.deletePet = function (pet) {
        $http({
            method: 'DELETE',
            url: `/pets/${pet.id}`
        }).then((response) => {
            vm.getPets();
        }).catch((error) => {
            console.log('error making rent get request', error);
            alert('Something went wrong! Check the server.');
        });
    };

    vm.getPets();
    vm.getOwners();
}]);
