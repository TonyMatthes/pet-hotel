// petHotelApp.controller('HomeController',['$http', '$mdSidenav', function ($http, $mdSidenav){
// let vm = this;
//     this.toShow = "home";
  
//     this.toggleLeft = function() {
//         $mdSidenav("left")
//           .toggle();
//     };
    
//     this.close = function () {
//       $mdSidenav('left').close();
//     };

//     this.show = function (toShow) {
//       this.toShow = toShow;
//     };
// }]);

  petHotelApp.controller('HomeController', function ($mdSidenav) {
      let vm = this;
    vm.toShow = "home";
  
    vm.toggleLeft = function() {
        $mdSidenav("left")
          .toggle();
    };
    
    vm.close = function () {
      $mdSidenav('left').close();
    };

    vm.show = function (toShow) {
      vm.toShow = toShow;
    };
});
