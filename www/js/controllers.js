

angular.module('mapTest.controllers', [])

.controller('map1Ctrl', function($scope, $ionicLoading, mapboxService, Markers) {
    //Set Mapbox Access Token.
    mapboxService.init({ accessToken: 'pk.eyJ1IjoicHJvc3RoZXRpY2hlYWQiLCJhIjoiZjhhNjU2MWQzODg4YTFjZWZiN2QwN2NkMDE4OGY3OGMifQ.ivtTgYUEwkMQDiZMlrG8rw' });
    

    //Show Loading Screen
    $ionicLoading.show({
          template: 'Loading..'
    });

    //get markers
    $scope.markers = Markers.all();

    // Get users Geolocation
    navigator.geolocation.getCurrentPosition(function(position) {

      var pos = {lat: position.coords.latitude, lng: position.coords.longitude};
      $scope.pos = pos;
      console.log(pos.lng);
      $ionicLoading.hide()
    });
    
})

.controller('map2Ctrl', function($scope, Markers) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  console.log("bla");
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
