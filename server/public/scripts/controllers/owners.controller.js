petHotelApp.controller('OwnersController',['$http','$mdSidenav', function ($http, $mdSidenav){
    let vm = this;

    vm.toggleLeft = function() {
        $mdSidenav('left')
          .toggle();
    };
    
    vm.close = function () {
      $mdSidenav('left').close();
    };

    vm.owners = [];

    vm.addOwner = function (owner) {
        $http({
            method: 'POST',
            url: '/owners',
            data: owner
        }).then((response) => {
            vm.getOwners();

        }).catch((error) => {
            console.log('error making rent get request', error);
            alert('Something went wrong! Check the server.');
        });
    };

    vm.deleteOwner = function (owner) {
        if (owner.count > 0) {
            alert(`You can't delete an owner with pets checked in!`);
        } else {
            $http({
                method: 'DELETE',
                url: `/owners/${owner.id}`
            }).then((response) => {
                vm.getOwners();
            }).catch((error) => {
                console.log('error making rent get request', error);
                alert('Something went wrong! Check the server.');
            });
        }
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

    // Load initial data
    vm.getOwners();
    vm.message = "Owners";
    }]);