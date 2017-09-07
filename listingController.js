angular.module('listings').controller('ListingsController', ['$scope', 'Listings',          //.controller is a method inside of angular.model.
  function($scope, Listings) {                                                              //ListingsController- name of controller
    $scope.listings = Listings;                                                             //$scope- an object that refers to the application model
    $scope.detailedInfo = {};                                                        //controller allows you to control data and template that you didn't have access to without using JS
                                                                                            //'listings' is the name of app
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
   //   if($scope.code.size() <= 0 && $scope.name.size() <= 0){
   //     return
   //   }

   if($scope.code != undefined | $scope.name != undefined){
      $scope.listings.push({code:$scope.code, name:$scope.name, coordinates:$scope.coordinates, address:$scope.address});
      $scope.code = undefined;
      $scope.name = undefined;
      $scope.coordinates = '';
       $scope.address = '';
     }
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);            //splice- adds/removes items to/from an array and returns the removed items.
    };                                            //index- an integer that specifies what position to add/remove items.
                                                  //1- number of items to be removed
    $scope.showDetails = function(index) {
      $scope.detailedInfo = index;
    };
  }
]);